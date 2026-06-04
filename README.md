# Building AI Systems

**A production-grade AI systems curriculum built as a clean Astro Starlight documentation portal.**

[Live Documentation](https://buildingaisystems.prajwolkharel.com.np) | [Repository](https://github.com/prajwolkk/building-ai-systems)

Building AI Systems is a structured engineering guide for learning how real AI products are designed, evaluated, secured, and operated. The repository is organized as a long-form tutorial system: every topic has the same internal page shape, and the public sidebar only reveals sections once meaningful content has been written.

## System Summary

This project is for engineers who want to move beyond prompt snippets and into production architecture. It covers model foundations, LLM application design, embeddings, RAG, agents, evaluation, security, project architecture, case studies, and interview-grade system design.

Every curriculum topic follows the same numbered matrix:

- `01-overview.md`: concept boundary, vocabulary, and engineering purpose.
- `02-architecture.md`: topology, components, interfaces, and failure surfaces.
- `03-deep-dive.md`: mechanics, tradeoffs, constraints, and production details.

The docs matrix exists on disk from the start, but the Astro sidebar is fill-gated. Placeholder-only modules stay hidden in the live web app until their pages contain real tutorial content.

The `sync:docs` script runs automatically before `npm run dev` and `npm run build`. It marks scaffold-only pages as production drafts and removes draft guards from pages once their body contains real content.

## Repository Map

```text
building-ai-systems/
├── src/content/docs/
│   ├── index.mdx                     # Documentation homepage
│   ├── 404.md                        # Custom documentation 404 page
│   ├── 00-getting-started/
│   │   ├── index.md                  # Introduction
│   │   └── roadmap.md                # Curriculum topology
│   ├── 01-ai-fundamentals/
│   │   └── 01-what-is-ai/
│   │       ├── 01-overview.md
│   │       ├── 02-architecture.md
│   │       └── 03-deep-dive.md
│   ├── 02-llm-engineering/
│   ├── 03-embeddings/
│   ├── 04-rag/
│   ├── 05-ai-agents/
│   ├── 06-ai-system-design/
│   ├── 07-evaluation/
│   ├── 08-ai-security/
│   ├── 09-projects/
│   ├── 10-case-studies/
│   └── 11-interview-prep/
├── astro.config.mjs                  # Starlight config and generated sidebar
├── package.json                      # Astro build scripts
└── README.md
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

The production documentation portal is deployed at:

```text
https://buildingaisystems.prajwolkharel.com.np
```
