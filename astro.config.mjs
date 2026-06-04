import { readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const docsRoot = new URL('./src/content/docs/', import.meta.url);

const moduleLabels = {
  '00-getting-started': 'Getting Started',
  '01-ai-fundamentals': 'AI Fundamentals',
  '02-llm-engineering': 'LLM Engineering',
  '03-embeddings': 'Embeddings & Search',
  '04-rag': 'Production RAG',
  '05-ai-agents': 'Autonomous Agents',
  '06-ai-system-design': 'AI System Design',
  '07-evaluation': 'Evaluation Systems',
  '08-ai-security': 'AI Security & Red Teaming',
  '09-projects': 'Production Projects',
  '10-case-studies': 'Architectural Case Studies',
  '11-interview-prep': 'Interview Preparation',
};

const acronymLabels = new Map([
  ['ai', 'AI'],
  ['llm', 'LLM'],
  ['rag', 'RAG'],
  ['api', 'API'],
  ['apis', 'APIs'],
  ['ann', 'ANN'],
  ['ab', 'A/B'],
  ['vllm', 'vLLM'],
  ['qdrant', 'Qdrant'],
  ['pgvector', 'pgvector'],
  ['weaviate', 'Weaviate'],
  ['pinecone', 'Pinecone'],
  ['github', 'GitHub'],
  ['openai', 'OpenAI'],
  ['deepseek', 'DeepSeek'],
  ['llama', 'Llama'],
  ['langfuse', 'Langfuse'],
]);

function directoryNames(parentUrl) {
  return readdirSync(parentUrl, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'en'));
}

function titleCaseToken(token) {
  const lower = token.toLowerCase();
  return acronymLabels.get(lower) ?? lower.charAt(0).toUpperCase() + lower.slice(1);
}

function humanizeTopicSlug(slug) {
  const projectMatch = slug.match(/^project-(\d+)-(.+)$/);
  if (projectMatch) {
    return `Project ${projectMatch[1]}: ${humanizeTopicSlug(projectMatch[2])}`;
  }

  return slug
    .replace(/^\d+-/, '')
    .split('-')
    .map(titleCaseToken)
    .join(' ');
}

function topicSidebarItems(moduleSlug) {
  const moduleUrl = new URL(`${moduleSlug}/`, docsRoot);

  return directoryNames(moduleUrl).map((topicSlug) => ({
    label: humanizeTopicSlug(topicSlug),
    collapsed: true,
    items: [
      { label: 'Overview', slug: `${moduleSlug}/${topicSlug}` },
      { label: 'System Architecture', slug: `${moduleSlug}/${topicSlug}/02-architecture` },
      { label: 'Technical Deep Dive', slug: `${moduleSlug}/${topicSlug}/03-deep-dive` },
    ],
  }));
}

function buildSidebar() {
  return [
    {
      label: moduleLabels['00-getting-started'],
      items: [
        { label: 'Introduction', slug: '00-getting-started' },
        { label: 'System Roadmap', slug: '00-getting-started/roadmap' },
      ],
    },
    ...Object.keys(moduleLabels)
      .filter((moduleSlug) => moduleSlug !== '00-getting-started')
      .map((moduleSlug) => ({
        label: moduleLabels[moduleSlug],
        items: topicSidebarItems(moduleSlug),
      })),
  ];
}

// https://astro.build/config
export default defineConfig({
  site: 'https://buildingaisystems.prajwolkharel.com.np',
  integrations: [
    starlight({
      title: 'Building AI Systems',
      disable404Route: true,
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/prajwolkk/building-ai-systems',
        },
      ],
      sidebar: buildSidebar(),
    }),
  ],
});
