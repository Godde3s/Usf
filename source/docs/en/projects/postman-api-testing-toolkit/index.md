---
title: "Postman API Testing Toolkit"
description: "A production-shaped Postman workspace: chained CRUD contract tests, HMAC request signing, data-driven runs, Newman CI with HTML reports."
---

# Postman API Testing Toolkit

**[Postman API Testing Toolkit](https://github.com/Godde3s/postman-api-testing-toolkit)** answers a different kind of interview question: *how do you test an API?* Not with one GET and a status-code assert — with a layered testing architecture that answers three separate questions: does it work, does it match its contract, and does it fail gracefully?

## What a passing collection actually proves

| Layer | Question | Technique |
| --- | --- | --- |
| Smoke | Is it up? | One request per critical route + response-time SLA |
| Contract | Shape correct? | Field-by-field assertions: type, presence, format |
| Functional | Behavior correct? | Chained CRUD: create → read → update → delete via collection variables |
| Negative | Errors sane? | 404s, malformed payloads, boundary values |
| Data-driven | All inputs? | CSV-driven iterations through Newman |

## Techniques on display

- **HMAC request signing in the sandbox** — a pre-request script computes `HMAC_SHA256(method + path + timestamp + bodyHash)` with CryptoJS, the pattern behind every serious API's anti-replay scheme.
- **Dynamic payloads** — `$randomUUID` and `pm.variables.replaceIn()` so every run produces unique, traceable data.
- **CI as the canary** — GitHub Actions runs both collections via Newman on every push *and* daily, so contract drift from public APIs gets caught even on weeks you commit nothing. HTML reports ship as artifacts.

## Why a "collection repo" belongs next to real services

Because testing is where API engineering shows its discipline. The toolkit is designed to run against [TaskFlow API](/en/projects/taskflow-api/) and public reference APIs, and its conventions — `module :: behavior` test naming, zero anonymous asserts, state never hardcoded — are the same ones I bring to team codebases.

::: tip Try it
Import the collections into Postman, or run headless: `newman run collections/rest-crud-api.postman_collection.json -r htmlextra` — [github.com/Godde3s/postman-api-testing-toolkit](https://github.com/Godde3s/postman-api-testing-toolkit)
:::
