---
title: "Arquitectura — Diseñar para el cambio"
description: "De servicios de un archivo a sistemas distribuidos — modularidad, dominios de fallo y la evolución como preocupación de primera clase."
---

# Arquitectura — Diseñar para el cambio

La arquitectura es el conjunto de decisiones caras de cambiar después. Mi sesgo: empezar tan pequeño como sea posible — a veces [un solo archivo](/es/projects/glm-free-api/) — pero con costuras en los lugares correctos, para que crecer signifique reemplazar módulos en vez de reescribir sistemas.

## Principios con los que diseño

- **Dominios de fallo.** Lo que puede morir debe morir solo — los routers aíslan proveedores, los paneles aíslan usuarios.
- **Tecnología aburrida primero.** El presupuesto de innovación se gasta en la única cosa que es realmente nueva.
- **Interfaces sobre implementaciones.** La forma de la API de OpenAI se volvió estándar precisamente porque los contratos viven más que los productos.
- **El estado es la parte difícil.** Mantenlo pequeño, explícito, con backup, y sabe dónde vive cada byte.
- **Rutas de evolución.** Cada diseño lleva una nota de "cuando esto se le quede pequeño" — escrita mientras los trade-offs están frescos.

La cartera de proyectos sigue este mismo arco: los puentes ([un archivo](/es/projects/glm-free-api/)) maduraron a routers ([OmniRouter](/es/projects/omnirouter/)), los routers a stacks ([Hermes](/es/projects/hermes-stack/)) — cada paso reemplazó un módulo, no reescribió un sistema. Eso es para mí lo que significa "ingeniero versátil": no saberlo todo, sino construir de forma que puedas aprender lo siguiente.
