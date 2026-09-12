---
title: "ModbusLite — Modbus TCP for .NET"
description: "A minimal Modbus TCP client for .NET 8: read and write coils and registers with strict MBAP framing, zero dependencies and in-memory-slave tests."
---

# ModbusLite — Modbus TCP for .NET

**[ModbusLite](https://github.com/Godde3s/modbuslite)** is a **single-class Modbus TCP (MBAP) client** for .NET 8, built for HMI tooling, SCADA glue code and test benches — where a compact, auditable implementation beats a 2 MB framework. It is the C# companion to my PLC/Ladder background: the software side of talking to real hardware.

## What it does

- **FC 1/2/3/4/5/6** — read coils, discrete inputs, holding and input registers; write single coil/register.
- **Strict framing** — MBAP protocol-id and transaction-id verification, unit-id echo checks, plausibility limits on lengths.
- **Real error handling** — slave exception frames (`FC | 0x80`) surface as a typed `ModbusException` with spec codes decoded (illegal address, illegal value, device busy…).
- **Any `Stream`** — `NetworkStream` in production, `MemoryStream` in tests; the client never knows the difference.

```csharp
using var client = new ModbusClient("192.168.1.50");

ushort[] registers = client.ReadHoldingRegisters(start: 107, count: 3);
bool[]   inputs    = client.ReadDiscreteInputs(start: 0, count: 8);

client.WriteSingleCoil(address: 20, on: true);
```

## Engineering notes

Every request/response cycle in the test suite runs against an **in-memory slave**: a fake `Stream` that parses client frames exactly like a real device and scripts spec-correct answers. Big-endian everywhere via `BinaryPrimitives`, coils unpacked LSB-first per the spec, and count limits (`1..125` registers, `1..2000` bits) validated *before* anything hits the wire. **7 xUnit tests**, zero network. MIT licensed.

