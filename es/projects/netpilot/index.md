---
title: "NetPilot — Kit de red en Go"
description: "Un kit de herramientas de red en un solo binario, en Go puro: escáner de puertos, TCP ping, comprobaciones HTTP y DNS. Sin dependencias, multiplataforma."
---

# NetPilot — Kit de red en Go

**[NetPilot](https://github.com/Godde3s/netpilot)** es mi respuesta a una molestia simple: verificar la conectividad de red no debería requerir instalar cinco herramientas distintas ni memorizar los flags de `nmap`. NetPilot compila a **un único binario estático en Go puro** — sin runtime, sin dependencias, sin scripts — y responde las preguntas que le hago a las redes todos los días.

## Lo que hace

| Comando | Trabajo |
| --- | --- |
| `scan` | Escaneo rápido de puertos TCP con pools de workers y timeouts. |
| `tping` | Ping a nivel TCP que funciona donde ICMP está bloqueado. |
| `http` | Comprobaciones de salud HTTP con estado, latencia e info TLS. |
| `dns` | Consultas A/AAAA/MX/TXT contra cualquier resolver. |
| `info` | Resumen de interfaces y rutas para triage rápido. |

## Por qué Go puro

Porque el despliegue es todo el punto. Una herramienta de red que necesita Python, Node o una docena de librerías del sistema falla exactamente donde más la necesitas: un VPS mínimo, un contenedor en un clúster roto, o la laptop Windows de un amigo a las 2 AM. `go build` produce un binario por plataforma; `CGO_ENABLED=0` lo mantiene portable. El modelo de concurrencia (goroutines + channels) hace rápido al escáner sin dolores de threads.

```bash
# escanear el rango de puertos conocidos de un host
./netpilot scan example.com --ports 1-1024 --workers 200

# tcp-ping a un servicio inestable
./netpilot tping db.internal:5432 --count 10

# health-check con salida JSON para scripts
./netpilot http https://api.example.com/health --json
```

## Lo que aprendí construyéndolo

La ingeniería interesante no fue el escaneo — fueron los casos límite: limitar tu propia tasa para no tumbar tu gateway, manejar conexiones medio abiertas, honrar timeouts que de verdad significan algo, y hacer que la salida JSON sea lo bastante estable para escribir scripts sobre ella. También se convirtió en mi proyecto de referencia para entender hasta dónde puede llegar un equipo de agentes con un CLI bien especificado.

::: tip Pruébalo
Clona, `go build`, listo: [github.com/Godde3s/netpilot](https://github.com/Godde3s/netpilot) — licencia MIT.
:::
