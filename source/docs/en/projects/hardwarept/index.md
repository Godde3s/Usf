---
title: "HardwarePT — Hardware Pentest Toolkit"
description: "A low-level hardware probing and penetration-testing toolkit written in C — ports, devices, firmware surfaces and stress probes."
---

# HardwarePT — Hardware Pentest Toolkit

**[HardwarePT](https://github.com/Godde3s/HardwarePT)** is my low-level C project: a hardware-focused probing and pentest toolkit that talks to the machine underneath the operating system. It grew out of the same curiosity that pulled me into industrial automation — wanting to know what a device does *before* trusting what it claims.

## What it covers

- **Hardware enumeration** — buses, devices and interfaces surfaced from user space.
- **Attack-surface probing** — exposed debug interfaces, weak default configurations and unsafe device states.
- **Stress probes** — controlled load generation to watch how hardware and firmware behave at the edges.
- **Pure C, no frameworks** — direct syscalls and interfaces, the kind of code that teaches you what your tooling actually does.

It sits in the security lane of my portfolio next to my static-analysis and bug-hunting tools: understanding systems by taking them apart — hardware this time — and writing down what I find in reusable form. For a software engineer, there is no better debug lesson than watching a board misbehave because you assumed the timing was somebody else's problem.

