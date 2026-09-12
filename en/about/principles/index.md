---
title: "Engineering Principles"
description: "The working principles behind every project Reza Bazdar ships: run it, own it, secure it, document it, improve it."
---

# Engineering Principles

Principles are cheap to write and expensive to keep. These are the ones I actually keep — the same ones I audit agent-written code against before anything ships.

## 1. It must run

A project that compiles but does not run is a sketch, not software. Every repository I publish comes with a working entry point, real configuration and a deployment path. [GLM Free API](/en/projects/glm-free-api/) is one Go file that serves real traffic; [NetPilot](/en/projects/netpilot/) is a single binary you can execute in seconds. "Works on my machine" is where I start, not where I stop.

## 2. Own the whole stack

When something breaks at 2 AM, the person who understands only their own layer points at everyone else. I deliberately keep skills sharp across the whole pipeline — front, back, database, network, deployment — so the buck stops with someone who can actually fix it. Full-stack is not a buzzword here; it is an incident-response strategy.

## 3. Security is a habit, not a feature

I write offensive tooling — scanners, analyzers, exploit research — so that defensive thinking is never theoretical. Every panel ships with token + 2FA admin access, every API bridge with account isolation, every deployment with the minimum surface I can manage. Agents make this even more important: machine-written code must be audited by a human who knows what attacks look like.

## 4. Write it down

A README is a promise. I document setup, architecture decisions and limitations honestly — including the things that do not work yet. The [Persian guides](https://github.com/Godde3s/fa-guides) I publish exist because good documentation in your own language can be the difference between learning and giving up.

## 5. Improve other people's work, with credit

Standing on giants is how software evolves. When I fork or extend someone's project, I study it first, improve it meaningfully, and credit loudly. That is how I treat the open-source I build on, and how I expect my own work to be treated.

::: tip The meta-principle
Ship small, ship honest, ship again. Momentum beats perfection — but honesty about the current state is never negotiable.
:::
