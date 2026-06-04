---
title: "Introduction"
sidebar:
  order: 1
---

## Building AI Systems

Building AI Systems is an engineering-first curriculum for designing, implementing, evaluating, and operating production AI software. It treats models as one part of a larger system that includes data contracts, orchestration layers, retrieval paths, safety controls, observability, deployment strategy, and cost governance.

The repository is intentionally structured as a tutorial-first documentation system. The source tree already contains the complete curriculum matrix, but the public sidebar only reveals topics once they contain meaningful writing. That keeps the live web app clean while preserving a stable writing path inside the repo.

## Engineering Standard

The project is organized around the discipline required to ship AI workloads under real constraints:

- Latency budgets must be measured end to end, not only at the model boundary.
- Prompt, retrieval, and tool contracts must be versioned like application interfaces.
- Evaluation must cover correctness, groundedness, regressions, safety, and user impact.
- Observability must expose traces, model choices, token spend, and failure modes.
- Security must assume hostile inputs, indirect prompt injection, data leakage risk, and tool abuse.

## Repository Model

Each module is a structured section of the system. Every topic contains three numbered pages:

- `01-overview.md`: the conceptual boundary, vocabulary, and engineering purpose.
- `02-architecture.md`: the topology, interfaces, constraints, and failure surfaces.
- `03-deep-dive.md`: the implementation mechanics, tradeoffs, and production details.

This structure keeps the repository predictable as the curriculum grows. A topic appears in the live sidebar only after at least one of its pages has real tutorial content.

The docs sync step runs before local development and production builds. It keeps scaffold-only pages as drafts, removes draft guards from filled pages, and lets the sidebar, search index, sitemap, and generated routes stay aligned with the content that is actually ready to read.

## Operating Principle

This is not a prompt cookbook. It is a systems manual for engineers who need to reason about reliability, cost, latency, data flow, model behavior, and release safety at the same time.
