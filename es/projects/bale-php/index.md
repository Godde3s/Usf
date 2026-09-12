---
title: "BalePhp — SDK de PHP para bots de Bale"
description: "SDK de PHP 8.2 sin dependencias para la API de bots de Bale: teclados inline, webhooks, long polling e integración de primera con Laravel."
---

# BalePhp — SDK de PHP para bots de Bale

**[BalePhp](https://github.com/Godde3s/bale-php)** envuelve la API de bots de Bale en un SDK de PHP 8.2 pequeño, tipado y **sin dependencias** — consumir una API compatible con Telegram mediante snippets de cURL y arrays asociativos es justo el dolor que el lenguaje ya superó.

## Qué te da

- **Objetos tipados** — `Update::command()` normaliza `/start@Bot`; `chatId()`, `callbackData()` y `fromId()` gestionan las secciones ausentes una vez, correctamente.
- **Teclados inline fluidos** — `InlineKeyboard::make()->row([...])`.
- **Ambos transportes** — long polling con control interno de offset, y webhooks vía `BaleClient::fromWebhook()`.
- **Transporte inyectable** — pasa un `callable` falso y verifica payloads exactos sin red.
- **Integración Laravel** — provider + facade, token desde `.env`, publicación de config con un comando.

```php
$bale = new BaleClient(getenv('BALE_TOKEN'));
$kb = InlineKeyboard::make()->row([
    InlineButton::callback('وضعیت سیستم', 'status'),
]);
$bale->sendMessage($chatId, '¡Hola!', $kb);
```

## Notas de ingeniería

El transporte cURL por defecto mapea errores de la API a una `BaleException` tipada con método, descripción y estado HTTP. Los payloads eliminan valores `null` antes de serializar y el texto persa fluye sin escapar a `\uXXXX`. **6 tests PHPUnit** cubren forma de payloads, avance de offset, parsing de webhook y mapeo de errores. Licencia MIT.

