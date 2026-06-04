---
title: "Introduction"
sidebar:
  order: 1
---

## Building AI Systems

Building AI Systems is an engineering-first curriculum for designing, implementing, evaluating, and operating production AI software. It treats models as one part of a larger system that includes data contracts, orchestration layers, retrieval paths, safety controls, observability, deployment strategy, and cost governance.

The repository is intentionally dual-purpose. The documentation portal provides the architecture map and deep technical explanations, while the root-level examples directory mirrors the curriculum with production-grade Python implementations. The goal is to make every concept navigable as both a design note and executable source.

## Engineering Standard

The project is organized around the discipline required to ship AI workloads under real constraints:

- Latency budgets must be measured end to end, not only at the model boundary.
- Prompt, retrieval, and tool contracts must be versioned like application interfaces.
- Evaluation must cover correctness, groundedness, regressions, safety, and user impact.
- Observability must expose traces, model choices, token spend, and failure modes.
- Security must assume hostile inputs, indirect prompt injection, data leakage risk, and tool abuse.

## Repository Model

Each module is a structured section of the system. Every topic contains an overview, a system architecture page, and a technical deep dive. This forced structure keeps the portal navigable as the curriculum grows and makes every topic visible as a collapsible sidebar group.

The examples directory follows the same naming scheme as the documentation. When a page introduces a concrete implementation pattern, the corresponding Python source lives outside the docs tree so it can be imported, tested, and reused like normal application code.

## Operating Principle

This is not a prompt cookbook. It is a systems manual for engineers who need to reason about reliability, cost, latency, data flow, model behavior, and release safety at the same time.
