---
title: "Terminal & Linux — The Unix Toolbox"
description: "WSL2, shell scripting, SSH, systemd and the Unix toolbox — the environment where all my work actually happens."
---

# Terminal & Linux — The Unix Toolbox

My primary work environment is a terminal — usually WSL2 on Windows giving me both worlds, or a bare Linux box for services. Fluency here is not nostalgia; it is leverage. Every tool I use, including every agent, ultimately drives the same Unix primitives.

## Daily drivers

| Area | Tools |
| --- | --- |
| Shell | bash/zsh, pipes, jq, awk/sed one-liners, fzf |
| Remote | SSH keys and agents, tmux sessions, port forwarding |
| Services | systemd units, cron, log rotation |
| Containers | Docker, compose, minimal images |
| Inspection | htop, ss/netstat, strace, journalctl |

This is also where my [NetPilot](/en/projects/netpilot/) philosophy came from: the best terminal tools do one job, stay fast, and compose. I hold my own tools — and my agents' output — to the same standard. A command that cannot be piped is a command I will rewrite.
