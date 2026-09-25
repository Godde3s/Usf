---
title: "TaskFlow API: seguridad comprobable"
description: "Construir un backend donde cada afirmación de seguridad tiene una prueba — la historia detrás de la rotación JWT, RBAC y rate limiting de TaskFlow API."
---

# TaskFlow API: seguridad comprobable

Todos los portafolios backend tienen "autenticación JWT" en el README. Muy pocos pueden mostrarte la prueba que reutiliza un refresh token rotado y afirma que **toda la familia de tokens muere**. Esa diferencia — entre mencionar seguridad y demostrarla — es por qué construí [TaskFlow API](/es/projects/taskflow-api/).

## Empieza por el modelo de amenazas

Escribí el modelo de amenazas antes de la primera ruta: credenciales robadas, tokens reutilizados, ráfagas de fuerza bruta, vecinos curiosos leyendo tareas ajenas y — el clásico — una página 500 filtrando un stack trace. Cada amenaza se mapea a un control específico y probable:

- **¿Refresh token robado?** Rotación con detección de reuso familiar. Una repetición revoca todo lo que el atacante tiene.
- **¿Fuerza bruta?** Un limitador de ventana deslizante responde el sexto intento con `429` y `Retry-After`.
- **¿Vecino entrometido?** Las verificaciones de propiedad viven en un solo lugar — `_owned_task`.
- **¿Fugas de información?** Los handlers devuelven 500 genéricos; los detalles van a logs estructurados con request id.

## La prueba que vende el diseño

```python
async def test_refresh_rotation_and_reuse_detection(client, user_tokens):
    old = user_tokens["refresh_token"]
    r1 = await client.post("/api/v1/auth/refresh", json={"refresh_token": old})
    assert r1.status_code == 200                      # rotado
    r2 = await client.post("/api/v1/auth/refresh", json={"refresh_token": old})
    assert r2.status_code == 401                      # reuso rechazado
    new = r1.json()["refresh_token"]
    r3 = await client.post("/api/v1/auth/refresh", json={"refresh_token": new})
    assert r3.status_code == 401                      # familia revocada
```

Trece pruebas, cero contenedores, pocos segundos. CI las corre en cada push: la historia de seguridad se mantiene cierta por construcción, no por documentación.

## Lo que los años de paneles me enseñaron

Publicar infraestructura para redes hostiles me enseñó que los paneles de administración y los flujos de auth son los objetivos más jugosos de cualquier sistema. TaskFlow es donde esa cicatriz se volvió código: las decisiones de endurecimiento están documentadas en `SECURITY.md` — incluidos los trade-offs que decidí conservar, porque fingir que no existen es la vulnerabilidad real.
