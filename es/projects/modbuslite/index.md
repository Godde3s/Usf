---
title: "ModbusLite — Modbus TCP para .NET"
description: "Cliente Modbus TCP mínimo para .NET 8: lee y escribe coils y registros con framing MBAP estricto, cero dependencias y tests contra un esclavo en memoria."
---

# ModbusLite — Modbus TCP para .NET

**[ModbusLite](https://github.com/Godde3s/modbuslite)** es un cliente **de una sola clase** Modbus TCP (MBAP) para .NET 8, pensado para herramientas HMI, código de pegamento SCADA y bancos de prueba — donde una implementación compacta y auditable vence a un framework de 2 MB. Es el compañero C# de mi experiencia con PLC/Ladder: el lado software de hablar con hardware real.

## Qué hace

- **FC 1/2/3/4/5/6** — leer coils, entradas discretas, registros de retención y de entrada; escribir coil/registro simple.
- **Framing estricto** — verificación de protocol-id y transaction-id MBAP, comprobaciones de unit-id, límites de longitud.
- **Errores reales** — los frames de excepción (`FC | 0x80`) aparecen como `ModbusException` tipada con códigos del estándar.
- **Cualquier `Stream`** — `NetworkStream` en producción, `MemoryStream` en tests.

```csharp
using var client = new ModbusClient("192.168.1.50");

ushort[] registers = client.ReadHoldingRegisters(start: 107, count: 3);
client.WriteSingleCoil(address: 20, on: true);
```

## Notas de ingeniería

Cada ciclo petición/respuesta del test suite corre contra un **esclavo en memoria** que parsea los frames como un dispositivo real. Big-endian en todas partes con `BinaryPrimitives`, coils desempaquetadas LSB-first y límites de conteo validados *antes* de tocar la red. **7 tests xUnit**, red cero. Licencia MIT.

