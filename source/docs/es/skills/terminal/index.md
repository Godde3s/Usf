---
title: "Terminal y Linux — La caja de herramientas Unix"
description: "WSL2, scripting de shell, SSH, systemd y la caja de herramientas Unix — el entorno donde realmente ocurre todo mi trabajo."
---

# Terminal y Linux — La caja de herramientas Unix

Mi entorno de trabajo principal es la terminal — normalmente WSL2 en Windows, que me da ambos mundos, o una máquina Linux pelada para servicios. La fluidez aquí no es nostalgia; es palanca. Cada herramienta que uso, incluido cada agente, termina moviendo los mismos primitivos Unix.

## Uso diario

| Área | Herramientas |
| --- | --- |
| Shell | bash/zsh, pipes, jq, one-liners de awk/sed, fzf |
| Remoto | Claves y agentes SSH, sesiones tmux, port forwarding |
| Servicios | unidades systemd, cron, rotación de logs |
| Contenedores | Docker, compose, imágenes mínimas |
| Inspección | htop, ss/netstat, strace, journalctl |

De aquí vino la filosofía de [NetPilot](/es/projects/netpilot/): las mejores herramientas de terminal hacen un trabajo, siguen siendo rápidas y se componen entre sí. Sostengo mis propias herramientas — y el output de mis agentes — al mismo estándar. Un comando que no puede pasarse por pipe es un comando que reescribiré.
