---
title: Compute Mechanics
sidebar:
  order: 3
---

## Hardware expectations
Modern AI workloads are bound by matrix math throughput and memory bandwidth. GPUs and specialized accelerators dominate because they are optimized for parallel linear algebra.

## Matrix arithmetic engines
Training and inference rely on dense and sparse matrix operations. These are executed by tensor cores or similar units that multiply and accumulate at very high rates.

## Why floating point dominates
Floating-point formats such as FP16, BF16, and FP32 balance precision with speed and memory usage. Lower precision improves throughput and reduces cost, but may require careful numerical stability work during training.

## Inference performance
Latency is driven by model size, sequence length, and batch size. Production systems must trade off throughput against responsiveness and ensure stable tail latency.

## Systems takeaway
Compute limits are a first-class design constraint. You should size models around available hardware, plan for quantization where possible, and measure end-to-end latency early.
