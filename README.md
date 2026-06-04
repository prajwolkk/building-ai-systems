# Building AI Systems

**A production-grade curriculum and implementation lab for designing, shipping, evaluating, and securing real AI systems.**

[Live Documentation](https://buildingaisystems.prajwolkharel.com.np) | [Repository](https://github.com/prajwolkk/building-ai-systems)

Building AI Systems is both a structured engineering documentation portal and an executable source catalog. The Astro Starlight site explains the architecture, tradeoffs, and operational model behind production AI systems. The root-level `examples/` tree mirrors the documentation with clean Python implementations that can be inspected, tested, and extended.

## System Summary

This repository is built for engineers who want to move beyond prompt snippets and into system design. It covers foundations, LLM application architecture, retrieval, agents, evaluation, security, production projects, and architectural case studies with a strict documentation matrix:

- `index.md`: conceptual overview.
- `02-architecture.md`: system topology and component boundaries.
- `03-deep-dive.md`: implementation mechanics and production tradeoffs.

## Directory Map

```text
building-ai-systems/
├── src/content/docs/                 # Astro Starlight documentation portal
│   ├── index.mdx                     # Root documentation homepage
│   ├── 00-getting-started/           # Introduction and roadmap
│   ├── 01-ai-fundamentals/           # Foundations of AI systems
│   ├── 02-llm-engineering/           # Prompting, tools, context, memory
│   ├── 03-embeddings/                # Vector representations and search
│   ├── 04-rag/                       # Retrieval-augmented generation
│   ├── 05-ai-agents/                 # Agent loops, planning, memory, tools
│   ├── 06-ai-system-design/          # Routing, orchestration, tracing, cache
│   ├── 07-evaluation/                # Offline evals, online evals, tracing
│   ├── 08-ai-security/               # Prompt injection, leakage, red teaming
│   ├── 09-projects/                  # Production reference builds
│   ├── 10-case-studies/              # Real-world architecture studies
│   └── 11-interview-prep/            # Interview-focused system design prep
├── examples/                         # Executable Python source examples
│   └── 01-ai-fundamentals/
│       └── 01-what-is-ai/
│           └── compute_benchmark.py
├── astro.config.mjs                  # Generated manual-label sidebar config
├── package.json                      # Astro/Starlight build tooling
└── README.md                         # Project catalog
```

## Curriculum Tree

<details open>
<summary><strong>00. Getting Started</strong></summary>

- Introduction
- System Roadmap

</details>

<details>
<summary><strong>01. AI Fundamentals</strong></summary>

- What Is AI
- Machine Learning
- Deep Learning
- Neural Networks
- Transformers
- Tokens
- Context Windows
- Inference
- Training vs Inference
- Model Parameters

</details>

<details>
<summary><strong>02. LLM Engineering</strong></summary>

- System Prompts
- Prompt Engineering
- Structured Output
- Function Calling
- Tool Calling
- Context Engineering
- Conversation Memory
- Guardrails
- Model Selection
- Cost Optimization

</details>

<details>
<summary><strong>03. Embeddings & Search</strong></summary>

- What Are Embeddings
- Vector Space
- Similarity Search
- Semantic Search
- ANN Search
- Vector Indexes
- pgvector
- Pinecone
- Qdrant
- Weaviate

</details>

<details>
<summary><strong>04. Production RAG</strong></summary>

- RAG Fundamentals
- Document Loading
- Chunking
- Retrieval
- Hybrid Search
- Reranking
- Context Building
- Citations
- Evaluation
- Production RAG

</details>

<details>
<summary><strong>05. Autonomous Agents</strong></summary>

- Agent Basics
- Agent Loop
- Planning
- Tool Use
- Agent Memory
- Reflection
- Multi-Agent Systems
- Human In The Loop
- Workflows vs Agents
- Production Agents

</details>

<details>
<summary><strong>06. AI System Design</strong></summary>

- Stateless vs Stateful Routing
- Multi-Model Orchestration
- Speculative Editing Engines
- Multi-Tenant Context Isolation
- Distributed RAG Pipelines
- Asynchronous Agent Clusters
- Dynamic LLM Routing
- Distributed Tracing Observability
- Gateway Layer Security
- Caching and Edge Inference

</details>

<details>
<summary><strong>07. Evaluation Systems</strong></summary>

- Why Evaluation Matters
- Hallucinations
- Groundedness
- Faithfulness
- Benchmarking
- Offline Eval
- Online Eval
- A/B Testing
- Tracing
- Production Evals

</details>

<details>
<summary><strong>08. AI Security & Red Teaming</strong></summary>

- Prompt Injection
- Jailbreaks
- Data Leakage
- RAG Poisoning
- Agent Risks
- Secrets Management
- API Security
- Model Abuse
- Red Teaming
- Secure AI Design

</details>

<details>
<summary><strong>09. Production Projects</strong></summary>

- Project 01: Chatbot
- Project 02: RAG Chat
- Project 03: Document Chat
- Project 04: Support Agent
- Project 05: Research Agent
- Project 06: AI Workflow
- Project 07: Coding Assistant
- Project 08: AI Search Engine

</details>

<details>
<summary><strong>10. Architectural Case Studies</strong></summary>

- OpenAI Chat Session State
- Anthropic System Prompt Scaling
- vLLM Speculative Decoding
- Perplexity Knowledge Fusion
- GitHub Copilot Context Assembly
- DeepSeek Mixture Of Experts
- Meta Llama Alignment Tuning
- Langfuse Production Tracing

</details>

<details>
<summary><strong>11. Interview Preparation</strong></summary>

- Agents Interview
- AI Engineer Questions
- Embeddings Interview
- RAG Interview
- System Design Interview

</details>

## Local Development

```bash
npm install
npm run dev
npm run build
```

The production portal is deployed at:

```text
https://buildingaisystems.prajwolkharel.com.np
```

## Implementation Track

Run the first mirrored source example:

```bash
python3 examples/01-ai-fundamentals/01-what-is-ai/compute_benchmark.py --size 16 --iterations 2 --backend python
```

Each new implementation should mirror the documentation module and topic path so readers can move cleanly between design explanation and executable source.
