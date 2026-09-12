---
title: "Security — Offense Informed, Defense Minded"
description: "Pentesting toolkit, XSS research, static analysis — finding holes before someone else does."
---

# Security — Offense Informed, Defense Minded

I learned security from the offensive side — building scanners, studying XSS, auditing source for unsafe patterns — because you cannot defend a system you cannot attack. That lens now runs over everything I ship, especially agent-written code.

## The toolkit

- **Static analysis** — my [explorer](https://github.com/Godde3s/explorer) project hunts vulnerable patterns and unsafe code paths in source trees.
- **Web exploitation research** — XSS flows, reverse-access patterns ([access](https://github.com/Godde3s/access)), bug-hunting utilities ([thehunter](https://github.com/Godde3s/thehunter)).
- **Tooling literacy** — the classic collection ([Collection-](https://github.com/Godde3s/Collection-)) every practitioner should know how to read.
- **Hardening practice** — token + 2FA admin panels, encrypted session vaults, minimum-surface deploys.

## Security in the agentic era

Agents write more code than ever, and they write it *confidently* — including the insecure kind. My review checklist therefore treats every generated diff as untrusted input: injection surfaces, auth bypasses, secrets handling, dependency provenance. The [method page](/en/about/how-i-work/) calls this the human review step; in security terms it is the only step that matters.

::: warning Ethics clause
My offensive work targets systems I own or am authorized to test. Anything else is a crime, not a skill.
:::
