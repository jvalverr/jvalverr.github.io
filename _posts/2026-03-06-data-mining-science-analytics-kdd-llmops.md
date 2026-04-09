---
layout: post
title: Data Mining, Data Science y Data Analytics — Del pipeline KDD a la era LLMOps
date: 2026-03-06 10:00:00
description: Por qué confundir estos tres conceptos genera fricción en proyectos reales, y cómo el marco KDD ayuda a ordenar roles, pipelines y expectativas.
tags: data-science machine-learning mlops llmops
categories: research
published : true
---

La confusión entre Data Mining, Data Science y Data Analytics no es solo semántica: se refleja en cómo se diseñan proyectos, cómo se definen entregables y cómo se construyen equipos.

Muchas empresas publican vacantes pidiendo "Data Science" cuando en realidad necesitan Analytics (KPIs, dashboards, diagnóstico), o contratan Analytics cuando el reto real requiere Mining y modelado predictivo. Con el tiempo, esa desalineación se traduce en fricción: expectativas infladas, perfiles mal evaluados, rotación y equipos que no logran sostener el pipeline cuando el trabajo pasa de exploración a decisiones recurrentes.

## El KDD como marco operativo

El **KDD (Knowledge Discovery in Databases)** es el marco que separa con claridad el proceso end-to-end de la fase específica de minería. Su pipeline recorre cinco etapas iterativas:

- **Selección de datos** — qué fuentes entran al análisis y con qué criterios
- **Preprocesamiento** — limpieza, corrección de inconsistencias y valores faltantes
- **Transformación** — feature engineering, agregaciones, normalización
- **Data Mining** — aplicación de métodos de ML para descubrir patrones
- **Evaluación e interpretación** — validación técnica y lectura de negocio

La primera observación clave: **Data Mining no es sinónimo de KDD**. En el marco KDD, data mining es solo el núcleo algorítmico, una parte de un proceso más amplio.

## ¿Qué es Data Analytics?

Data Analytics es el conjunto de actividades orientadas a obtener evidencia para decisión, con énfasis en interpretación, comunicación y acción. Se organiza en cuatro tipos:

- **Descriptiva** — qué pasó (KPIs, dashboards, series temporales)
- **Diagnóstica** — por qué pasó (segmentación, pruebas de hipótesis)
- **Predictiva** — qué podría pasar (modelos supervisados, series temporales)
- **Prescriptiva** — qué conviene hacer (optimización, simulación)

Data Analytics puede incorporar Data Mining, pero no se reduce a él.

## ¿Qué es Data Science y por qué es más amplio?

Data Science integra estadística, ingeniería, machine learning y conocimiento de dominio para generar valor con datos. La pregunta "¿funciona?" no se responde solo con métricas offline, sino con criterios de estabilidad, trazabilidad, degradación en el tiempo y costo operativo.

En otras palabras, **Data Science no termina cuando se obtiene un buen resultado experimental: termina cuando el sistema se puede operar con confianza.**

## De pipeline a operación: MLOps y LLMOps

Una vez que el pipeline empieza a repetirse con datos nuevos o decisiones recurrentes, aparece una necesidad distinta: operar el pipeline sin que se degrade.

**MLOps** convierte esa idea en práctica operativa: versionado de datos, código y modelos, automatización de entrenamiento y despliegue, monitoreo de desempeño y drift, y mecanismos de reentrenamiento.

**LLMOps** aparece cuando el componente central depende de un LLM. Aquí entran piezas como embeddings, bases vectoriales, RAG, orquestación de llamadas y evaluación semántica. No basta con monitorear drift estadístico; también hay que monitorear alucinaciones, consistencia y riesgos como inyección de prompts.

## Implicaciones en el mercado laboral

Si tu organización está invirtiendo en IA, el cuello de botella rara vez será "falta de modelos". Será falta de pipeline entendido como responsabilidad, y por tanto falta de roles bien definidos: Data Analyst, BI Analyst, Data Scientist, Data Engineer, ML Engineer, AI Engineer — cada rol aparece cuando el pipeline madura y se vuelve infraestructura.

👉 [Lee la edición completa en LinkedIn](https://www.linkedin.com/pulse/data-mining-science-y-analytics-del-pipeline-kdd-la-valverde-rebaza-8klef/)