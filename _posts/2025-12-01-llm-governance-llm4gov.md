---
layout: post
title: LLM Governance — From Data to Models to Decision Infrastructure
date: 2025-12-01 10:00:00
description: Why governing LLMs requires more than classic AI frameworks, and how LLM4Gov shows a responsible path forward for the public sector.
tags: llms governance ai research
categories: research
---

LLM governance has moved beyond being a technical topic — it has become an immediate necessity for any organization working with AI.

Traditional governance, which evolved from data to algorithms, now needs to handle models that learn, adapt, and operate in nearly autonomous cycles, advancing faster than corporate structures can keep up with.

## Three layers of governance

**Data governance** was the silent foundation of digital transformation. It ensures quality, traceability, access control, and regulatory compliance — the raw material that feeds everything else.

**AI governance** organizes responsibility, supervision, and auditing over systems that reconfigure themselves. The IIA's Three Lines Model is particularly relevant here: operational teams manage risk directly, independent supervision functions define standards and challenge technical assumptions, and internal audit evaluates adherence to policies.

**LLM governance** connects both layers in systems that don't just execute, but reinterpret, generalize, and influence human decisions. The challenge is hybrid: classic AI risks (bias, opacity, misuse) combine with generative-specific risks (hallucinations, prompt injection, data poisoning, context manipulation).

## LLM4Gov — Responsible AI for the public sector

This is the context in which **LLM4Gov** was developed, a framework I built in collaboration with a team of researchers that received the **Best Paper Award at LASDiGov 2025**, within the 45th Brazilian Computing Society Congress (CSBC 2025).

The goal is practical: give the public sector a way to leverage LLMs without violating citizen privacy, without exposing sensitive data to external proprietary models, and without requiring unrealistic hardware infrastructure.

The pipeline works in three layers:

1. **Anonymization** — removes or replaces personally identifiable information before any data leaves the controlled environment
2. **Teacher model** — a more powerful LLM generates instructions, labels, and natural language explanations from the anonymized data
3. **Student model** — a lightweight, open-source model is fine-tuned using those instructions with LoRA and quantization, enabling local deployment at realistic public sector costs

The results showed significant accuracy gains over generic distilled models, while maintaining interpretability and compliance with data protection requirements like LGPD and GDPR.

## The key insight

Governing LLMs doesn't mean controlling every internal detail of a billion-parameter model. It means building an institutional architecture where trust, transparency, auditing, and purpose are aligned.

Effective governance is not an obstacle to innovation — it is precisely what allows LLMs to be applied in sensitive contexts without resorting to an all-or-nothing logic between risk and benefit.

👉 [Read the full newsletter edition](https://www.linkedin.com/pulse/governan%25C3%25A7a-em-llms-fundamentos-arquitetura-e-do-jorge-valverde-rebaza-qaf0e/)

📄 [LLM4Gov paper — Marcacini et al. (2025)](https://lnkd.in/dF9Nxdev)