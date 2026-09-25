---
title: "Postman API Testing Toolkit"
description: "Un workspace Postman con forma de producción: pruebas contractuales CRUD encadenadas, firma HMAC, ejecuciones data-driven, Newman CI con reportes HTML."
---

# Postman API Testing Toolkit

**[Postman API Testing Toolkit](https://github.com/Godde3s/postman-api-testing-toolkit)** responde otro tipo de pregunta de entrevista: *¿cómo pruebas una API?* No con un GET y un assert de status — con una arquitectura de pruebas por capas que responde tres preguntas distintas: ¿funciona?, ¿cumple su contrato?, ¿falla con gracia?

## Lo que una colección verde realmente prueba

| Capa | Pregunta | Técnica |
| --- | --- | --- |
| Smoke | ¿Está vivo? | Una request por ruta crítica + SLA de latencia |
| Contrato | ¿Forma correcta? | Asserts campo a campo: tipo, presencia, formato |
| Funcional | ¿Comportamiento correcto? | CRUD encadenado vía variables de colección |
| Negativo | ¿Errores sanos? | 404s, payloads malformados, valores límite |
| Data-driven | ¿Todos los inputs? | Iteraciones CSV vía Newman |

## Técnicas en exhibición

- **Firma HMAC en el sandbox** — un script pre-request calcula `HMAC_SHA256(método + ruta + timestamp + bodyHash)` con CryptoJS: el patrón anti-replay de toda API seria.
- **Payloads dinámicos** — `$randomUUID` y `pm.variables.replaceIn()` para datos únicos y trazables en cada corrida.
- **CI como canario** — GitHub Actions corre ambas colecciones vía Newman en cada push *y* a diario, así la deriva de contratos se detecta incluso en semanas sin commits. Reportes HTML como artefactos.

::: tip Pruébalo
Importa las colecciones en Postman, o corre headless: `newman run collections/rest-crud-api.postman_collection.json -r htmlextra` — [github.com/Godde3s/postman-api-testing-toolkit](https://github.com/Godde3s/postman-api-testing-toolkit)
:::
