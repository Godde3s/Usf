---
title: "NetPilot — Go Network Toolkit"
description: "A single-binary network toolkit in pure Go: port scanner, TCP ping, HTTP health checks, DNS lookups. Zero dependencies, cross-platform."
---

# NetPilot — Go Network Toolkit

**[NetPilot](https://github.com/Godde3s/netpilot)** is my answer to a simple annoyance: checking network reachability should not require installing five different tools or memorizing `nmap` flags. NetPilot compiles to **one static binary in pure Go** — no runtime, no dependencies, no scripts — and answers the questions I ask networks every day.

## What it does

| Command | Job |
| --- | --- |
| `scan` | Fast TCP port scanning with worker pools and timeouts. |
| `tping` | TCP-level ping that works where ICMP is blocked. |
| `http` | HTTP health checks with status, latency and TLS info. |
| `dns` | A/AAAA/MX/TXT lookups against any resolver. |
| `info` | Interface and routing summary for quick triage. |

## Why pure Go

Because deployment is the whole point. A network tool that needs Python, Node or a dozen system libraries fails exactly where you need it most — a minimal VPS, a container in a broken cluster, a friend's Windows laptop at 2 AM. `go build` produces one binary per platform; `CGO_ENABLED=0` keeps it portable. The concurrency model (goroutines + channels) makes the scanner fast without thread headaches.

```bash
# scan the well-known range of a host
./netpilot scan example.com --ports 1-1024 --workers 200

# tcp-ping a flaky service./netpilot tping db.internal:5432 --count 10

# health-check with JSON output for scripts
./netpilot http https://api.example.com/health --json
```

## What I learned building it

The interesting engineering was not the scanning — it was the edge cases: rate-limiting yourself so you do not DoS your own gateway, handling half-open connections, honoring timeouts that actually mean something, and making JSON output stable enough to script against. It also became my reference project for learning how far agent teams can take a well-specified CLI.

::: tip Try it
Clone, `go build`, done: [github.com/Godde3s/netpilot](https://github.com/Godde3s/netpilot) — MIT licensed.
:::
