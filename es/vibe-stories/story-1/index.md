---
title: "TaskFlow API: Seguridad Que Puedes Probar"
description: "Construir un backend donde cada claim de seguridad tiene su test — la historia detrás de la rotación de refresh tokens, RBAC y rate limiting de TaskFlow API."
---

# TaskFlow API: Seguridad Que Puedes Probar

Todos los portafolios de backend tienen "autenticación JWT" en el README. Muy pocos pueden mostrarte el test que repite un refresh token rotado y afirma que **toda la familia de tokens muere**. Esa diferencia — entre mencionar seguridad y demostrarla — es la razón por la que construí [TaskFlow API](/es/projects/taskflow-api/).

## Empezar por el modelo de amenazas

Escribí el modelo de amenazas antes de la primera ruta: credenciales robadas, tokens reutilizados, ráfagas de fuerza bruta, vecinos curiosos leyendo las tareas ajenas y — el clásico — una página 500 que filtra un stack trace. Cada amenaza se mapea a un control específico y comprobable en el código:

- **¿Refresh token robado?** Rotación con detección de reuso por familia. Una sola repetición revoca todo lo que el atacante posee.
- **¿Fuerza bruta?** Un limitador de ventana deslizante responde al sexto intento con `429` y `Retry-After`.
- **¿Vecinos husmeando?** Las comprobaciones de propiedad viven en un solo lugar — `_owned_task` — así que olvidar un guard es un bug que arreglas una vez, no un hábito que auditas para siempre.
- **¿Fugas de información?** Los manejadores de excepciones devuelven 500 genéricos; los detalles van a logs JSON estructurados con un request id que puedes grepear.

## El test que vende el diseño

```python
async def test_refresh_rotation_and_reuse_detection(client, user_tokens):
    old = user_tokens["refresh_token"]
    r1 = await client.post("/api/v1/auth/refresh", json={"refresh_token": old})
    assert r1.status_code == 200                      # rotado
    r2 = await client.post("/api/v1/auth/refresh", json={"refresh_token": old})
    assert r2.status_code == 401                      # replay rechazado
    new = r1.json()["refresh_token"]
    r3 = await client.post("/api/v1/auth/refresh", json={"refresh_token": new})
    assert r3.status_code == 401                      # familia revocada
```

Trece tests, cero contenedores, unos segundos de reloj. CI los ejecuta en cada push, así que la historia de seguridad se mantiene cierta por construcción y no por documentación.

## Lo que demuestra

TaskFlow es el backend de referencia de mi trabajo con APIs — se empareja con el [toolkit de Postman](/es/projects/postman-api-testing-toolkit/) que lo somete a pruebas de contrato en CI. FastAPI, PostgreSQL 16 y Redis 7 detrás de Docker Compose; SQLAlchemy 2.0 async con migraciones Alembic; caché con invalidación al escribir; logs estructurados listos para Loki o ELK. Es la respuesta a una simple pregunta de entrevista: *muéstrame cómo entregas un backend en 2026.* Así — endurecido, probado, observable y funcionando.
