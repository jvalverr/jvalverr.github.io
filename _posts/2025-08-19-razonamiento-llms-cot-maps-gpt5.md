---
layout: post
title: "Razonamiento en LLMs: de CoT a MAPS y GPT-5"
date: 2025-08-19 10:00:00
description: Evolución del razonamiento en IA — desde Chain-of-Thought hasta MAPS — y qué implica hablar de razonamiento en GPT-5.
tags: llms reasoning chain-of-thought prompt-engineering mathematical-reasoning reflection ai
categories: ai
---

El razonamiento en la IA es fascinante y, al mismo tiempo, **lleno de trampas**. Durante décadas fue el “santo grial”: los sistemas resolvían tareas acotadas, pero no la flexibilidad con la que un humano enmarca problemas ambiguos o corrige su propio error.

Con los **grandes modelos de lenguaje**, a partir sobre todo de 2022, algo cambió: técnicas de *prompting* simples empezaron a **despertar** capacidades de razonamiento que antes parecían inaccesibles.

## De la cadena de pensamiento a árboles y grafos

El *chain-of-thought* (**CoT**) fue el primer gran golpe de efecto: pedir pasos intermedios mejoró matemáticas, lógica y tareas de varias inferencias. Pero quedó claro que **si el primer paso falla, toda la cadena se vuelve frágil**.

Sobre esa base aparecieron, entre otras:

- **Auto-consistencia** — varias cadenas y “votar” o consensuar la respuesta
- **Autorreflexión** — el modelo revisa su propia salida e intenta corregirla (a menudo en un solo ciclo)
- **Tree-of-Thoughts y Graph-of-Thoughts** — explorar ramas, retroceder o conectar líneas de razonamiento de forma más parecida a cómo probamos hipótesis

## MAPS: reflexión en capas, no en una sola pasada

**MAPS** (*Multi-Layered Self-Reflection with Auto-Prompting*) propone **varias capas iterativas de reflexión**. La idea clave: en cada vuelta el **prompt se adapta** al error detectado en la iteración anterior, en lugar de depender de una única ronda de autocorrección.

En experimentos de **razonamiento matemático** (de operaciones simples a problemas más exigentes), MAPS ha mostrado ventajas consistentes frente a CoT aislado y frente a esquemas clásicos de autorreflexión. El trabajo asociado fue **aceptado en ECML PKDD 2025** — un foro de referencia en aprendizaje automático y descubrimiento de conocimiento en Europa.

## GPT-5 y la misma pregunta, otra escala

Los modelos más recientes, como **GPT-5**, ponen el acento en **razonamiento contextual** y en “invertir más tiempo cognitivo” antes de cerrar una respuesta: explorar alternativas, revisar pasos intermedios, buscar mayor consistencia en problemas de varias etapas.

En esa lectura, **CoT, MAPS y las capacidades emergentes de los modelos de última generación** no compiten en abstracto: forman parte de una **misma trayectoria** hacia sistemas que no solo responden más rápido, sino que **revisan y refinan** con más disciplina.

La pregunta práctica es si estamos preparados para **colaborar** con ellos — validar procesos, fijar límites y asegurar que la precisión acompañe a la velocidad — cuando a nosotros mismos, a ratos, nos cuesta mantener esa misma constancia.

👉 [Mismo tema en LinkedIn](https://www.linkedin.com/pulse/racioc%C3%ADnio-em-llms-da-simula%C3%A7%C3%A3o-ao-pensamento-jorge-valverde-rebaza-xjqoe/)

¿Qué técnica o enfoque de razonamiento con LLMs te ha dado mejores resultados en tu día a día: CoT, varias pasadas de revisión, o algo distinto?
