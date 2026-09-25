---
title: "VeilChat: A Messenger With No Server to Breach"
description: "The story of building VeilChat — a serverless P2P messenger with end-to-end encryption, direct TCP connections and zero metadata."
---

# VeilChat: A Messenger With No Server to Breach

Every mainstream messenger quietly relies on infrastructure that knows *who* talks to *whom*, even when it cannot read the content. Metadata is the business model. I wanted to know how far I could push in the opposite direction — so I built **[VeilChat](https://github.com/Godde3s/veilchat)**: two peers, one direct TCP connection, and an encrypted channel that never touches a third party.

## The design constraint

No accounts. No servers. No phone numbers. No metadata. That constraint decided everything. There is no signup flow because there is nothing to sign up to; there is no message relay because there is no message relay company. Two peers discover each other — over the LAN or a direct dial — run a mutually-authenticated key exchange, and from that moment every byte on the wire is an AEAD-encrypted frame.

## The hard parts

- **Key exchange done right** — an X25519 handshake with mutual authentication, HKDF-derived session keys and transcript checks, so neither a passive listener nor an active impostor learns anything.
- **The wire protocol** — a 24-byte nonce header plus ChaCha20-Poly1305 frames: replay protection and integrity without a single byte of plaintext metadata.
- **NAT-friendly delivery** — LAN discovery for the common case, direct dial for everything else, with the handshake retried until both sides confirm.

## What it proves

VeilChat is roughly 1,000 lines of readable, auditable Python — CLI and importable library. I built the hard parts of a messenger from scratch: key management, handshake design, wire protocol, encrypted delivery. It is the difference between *using* cryptography libraries and *designing with* them, and it is the project I reach for when someone asks whether I understand security as engineering rather than as a checklist.
