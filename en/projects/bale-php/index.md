---
title: "BalePhp — PHP SDK for Bale Bots"
description: "A dependency-free PHP 8.2 SDK for the Bale Bot API with inline keyboards, webhooks, long polling and first-class Laravel integration."
---

# BalePhp — PHP SDK for Bale Bots

**[BalePhp](https://github.com/Godde3s/bale-php)** wraps the Bale Bot API in a small, typed, **zero-dependency** PHP 8.2 SDK — because consuming a Telegram-compatible API through raw cURL snippets and associative arrays is exactly the pain the language has outgrown.

## What it gives you

- **Typed update objects** — `Update::command()` normalizes `/start@Bot` heads, `chatId()`, `callbackData()` and `fromId()` handle missing sections once, correctly.
- **Fluent inline keyboards** — `InlineKeyboard::make()->row([InlineButton::callback('وضعیت', 'status'), ...])`.
- **Both transports** — long polling with internal offset bookkeeping (`pollUpdates()`), and webhooks via `BaleClient::fromWebhook($request->getContent())`.
- **Injectable transport** — pass a `callable(string, array): mixed` fake and assert exact payloads without touching the network.
- **Laravel integration** — service provider + facade, token from `.env`, one-command config publishing.

```php
$bale = new BaleClient(getenv('BALE_TOKEN'));
$kb = InlineKeyboard::make()->row([
    InlineButton::callback('وضعیت سیستم', 'status'),
    InlineButton::url('وب‌سایت', 'https://example.com'),
]);
$bale->sendMessage($chatId, 'سلام! چه کمکی می‌تونم بکنم؟', $kb);
```

## Engineering notes

The default cURL transport maps API errors to a typed `BaleException` carrying the method, description and HTTP status. Payloads strip `null` values before serialization so requests stay exactly as the API expects, and Unicode flows through un-escaped — Persian text never becomes `\uXXXX` soup. **6 PHPUnit tests** cover payload shaping, offset advancement, webhook parsing and error mapping. MIT licensed.

