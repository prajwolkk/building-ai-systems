#!/usr/bin/env python3
"""
Matrix compute benchmark for Building AI Systems.

Documentation:
https://buildingaisystems.prajwolkharel.com.np/01-ai-fundamentals/01-what-is-ai/03-deep-dive/

This script compares a pure Python matrix multiplication path with an optional
NumPy acceleration path. It is intentionally small and inspectable so the
compute mechanics in the documentation map directly to executable source.
"""

from __future__ import annotations

import argparse
import json
import math
import statistics
import time
from typing import Callable, Literal

Backend = Literal["auto", "python", "numpy"]


def generate_matrix(size: int) -> list[list[float]]:
    """Create a deterministic dense matrix for repeatable benchmark runs."""
    return [
        [((row * size + col) % 97) / 97.0 for col in range(size)]
        for row in range(size)
    ]


def matmul_python(left: list[list[float]], right: list[list[float]]) -> list[list[float]]:
    """Multiply two dense matrices using only the Python standard library."""
    size = len(left)
    right_columns = list(zip(*right))
    return [
        [sum(left[row][idx] * column[idx] for idx in range(size)) for column in right_columns]
        for row in range(size)
    ]


def matmul_numpy(left: list[list[float]], right: list[list[float]]) -> list[list[float]]:
    """Multiply two dense matrices with NumPy when it is available."""
    try:
        import numpy as np
    except ImportError as error:
        raise RuntimeError("NumPy backend requested, but numpy is not installed.") from error

    return (np.asarray(left, dtype=np.float32) @ np.asarray(right, dtype=np.float32)).tolist()


def select_backend(requested: Backend) -> tuple[str, Callable[[list[list[float]], list[list[float]]], list[list[float]]]]:
    if requested == "python":
        return "python", matmul_python
    if requested == "numpy":
        return "numpy", matmul_numpy

    try:
        import numpy  # noqa: F401
    except ImportError:
        return "python", matmul_python
    return "numpy", matmul_numpy


def checksum(matrix: list[list[float]]) -> float:
    """Compress the result into a stable scalar to prevent dead-code elimination."""
    return math.fsum(math.fsum(row) for row in matrix)


def run_benchmark(size: int, iterations: int, backend: Backend) -> dict[str, float | int | str]:
    if size <= 0:
        raise ValueError("--size must be greater than zero.")
    if iterations <= 0:
        raise ValueError("--iterations must be greater than zero.")

    selected_backend, multiply = select_backend(backend)
    left = generate_matrix(size)
    right = generate_matrix(size)
    timings_ms: list[float] = []
    last_checksum = 0.0

    for _ in range(iterations):
        started = time.perf_counter()
        result = multiply(left, right)
        elapsed_ms = (time.perf_counter() - started) * 1000
        timings_ms.append(elapsed_ms)
        last_checksum = checksum(result)

    return {
        "backend": selected_backend,
        "size": size,
        "iterations": iterations,
        "min_ms": min(timings_ms),
        "median_ms": statistics.median(timings_ms),
        "max_ms": max(timings_ms),
        "checksum": round(last_checksum, 6),
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Benchmark dense matrix multiplication.")
    parser.add_argument("--size", type=int, default=64, help="Square matrix dimension.")
    parser.add_argument("--iterations", type=int, default=5, help="Benchmark iterations.")
    parser.add_argument(
        "--backend",
        choices=("auto", "python", "numpy"),
        default="auto",
        help="Execution backend. Auto uses NumPy when available.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    metrics = run_benchmark(args.size, args.iterations, args.backend)
    print(json.dumps(metrics, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
