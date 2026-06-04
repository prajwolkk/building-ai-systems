---
title: "Overview"
sidebar:
  order: 1
---
## Why it matters
Machine learning defines how models are trained, evaluated, and monitored. The choices you make here directly impact system reliability, cost, and the ability to improve over time.

## Core idea
A model learns a mapping from inputs to outputs by optimizing an objective on historical data. Good models generalize beyond the training data, which is why train, validation, and test splits matter.

## Key terms
- Features: The input signals the model uses.
- Labels: The outputs you want the model to predict.
- Loss: A function that measures prediction error.
- Generalization: Performance on new, unseen data.
- Overfitting: When a model memorizes training data instead of learning patterns.

## Example
A churn predictor takes account activity features and learns to estimate the probability a user will cancel. The model is trained on past outcomes and evaluated on a held-out test set.

## Common pitfalls
- Leaking future information into training data.
- Skipping a simple baseline before complex models.
- Ignoring drift and failing to refresh training data.

## Next
Deep learning extends machine learning with neural networks that scale across large datasets.
