---
title: "VeilChat — Serverless P2P Messenger"
description: "A P2P messenger with end-to-end encryption in pure Python: X25519 handshake, ChaCha20-Poly1305 frames, LAN discovery. No servers, no accounts, no metadata."
---

# VeilChat — Serverless P2P Messenger

**[VeilChat](https://github.com/Godde3s/veilchat)** is my answer to a question I kept hearing: *who knows that we are talking?* Every mainstream messenger still needs infrastructure that can log who talked to whom and when. VeilChat removes that layer entirely — two peers open a **direct TCP connection**, run a mutually-authenticated key exchange, and talk over an encrypted channel that never touches a third party.

## The cryptography

I implemented a Noise-inspired handshake from standard primitives — no homemade math:

- **Long-term identity** — an X25519 key at `~/.veilchat/identity.key`, whose SHA-256 fingerprint humans compare out-of-band.
- **Forward secrecy** — every connection mixes three DH results (`ee`, `es`, `se`) through HKDF-SHA256 with fresh ephemeral keys, so later key compromise cannot decrypt past sessions.
- **Mutual authentication** — a transcript MAC over the handshake binds both static identities; a man in the middle cannot compute it.
- **Frame sealing** — ChaCha20-Poly1305 with per-direction keys, monotonically rising nonces and direction-bound AAD, plus a 4 MiB frame cap against floods.

```bash
pip install veilchat

# terminal 1 — announce on the LAN and wait
veilchat listen --name alice

# terminal 2 — find peers and connect
veilchat lan
veilchat connect 192.168.1.20 --name bob
```

## Engineering notes

The interesting part was not the crypto — it was making asyncio behave: one listener accepts exactly one session, the handshake is written so both roles share one code path (with mirrored transcript ordering — the bug class that silently breaks handshakes), and the session layer multiplexes message/typing/ping/file frames to callbacks. UDP beacons handle LAN discovery, and the crypto, wire-format and transport layers are fully separated, so swapping TCP for WebRTC data channels touches no crypto code.

**8 unit + integration tests** cover key agreement, tamper detection, nonce discipline and a live two-peer exchange on localhost. MIT licensed.

