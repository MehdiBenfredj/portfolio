---
date: 2026-05-06
feed: thought
title: "Introducing SubQ"
tags: [ai, llm, architecture]
---

Introducing SubQ - a major breakthrough in LLM intelligence.

It is the first model built on a fully sub-quadratic sparse-attention architecture (SSA), and the first frontier model with a 12 million token context window which is:

- 52x faster than FlashAttention at 1MM tokens
- Less than 5% the cost of Opus

Transformer-based LLMs waste compute by processing every possible relationship between words (standard attention). Only a small fraction actually matter.

[@subquadratic](https://x.com/subquadratic) finds and focuses only on the ones that do.

That's nearly 1,000x less compute and a new way for LLMs to scale.
