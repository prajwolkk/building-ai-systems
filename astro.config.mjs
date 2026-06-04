import { existsSync, readFileSync, readdirSync } from 'node:fs';
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

const matrixPages = [
  {
    label: 'Overview',
    fileName: 'index.md',
    slug: (moduleSlug, topicSlug) => `${moduleSlug}/${topicSlug}`,
  },
  {
    label: 'System Architecture',
    fileName: '02-architecture.md',
    slug: (moduleSlug, topicSlug) => `${moduleSlug}/${topicSlug}/02-architecture`,
  },
  {
    label: 'Technical Deep Dive',
    fileName: '03-deep-dive.md',
    slug: (moduleSlug, topicSlug) => `${moduleSlug}/${topicSlug}/03-deep-dive`,
  },
];

const scaffoldOnlyLines = new Set([
  'Content coming soon.',
  '### System Topology',
  'Placeholder for production-grade architectural specifications.',
  '### Implementation Vector',
  'Detailed engineering logs coming soon.',
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

function markdownBody(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '').trim();
}

function hasPublishableContent(fileUrl) {
  if (!existsSync(fileUrl)) {
    return false;
  }

  const body = markdownBody(readFileSync(fileUrl, 'utf8'));
  const meaningfulLines = body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !scaffoldOnlyLines.has(line));

  return meaningfulLines.length > 0;
}

function topicSidebarItems(moduleSlug) {
  const moduleUrl = new URL(`${moduleSlug}/`, docsRoot);

  return directoryNames(moduleUrl)
    .map((topicSlug) => {
      const items = matrixPages
        .filter((page) =>
          hasPublishableContent(new URL(`${moduleSlug}/${topicSlug}/${page.fileName}`, docsRoot))
        )
        .map((page) => ({
          label: page.label,
          slug: page.slug(moduleSlug, topicSlug),
        }));

      if (items.length === 0) {
        return null;
      }

      return {
        label: humanizeTopicSlug(topicSlug),
        collapsed: true,
        items,
      };
    })
    .filter(Boolean);
}

function buildSidebar() {
  const curriculumModules = Object.keys(moduleLabels)
    .filter((moduleSlug) => moduleSlug !== '00-getting-started')
    .map((moduleSlug) => ({
      label: moduleLabels[moduleSlug],
      items: topicSidebarItems(moduleSlug),
    }))
    .filter((module) => module.items.length > 0);

  return [
    {
      label: moduleLabels['00-getting-started'],
      items: [
        { label: 'Introduction', slug: '00-getting-started' },
        { label: 'System Roadmap', slug: '00-getting-started/roadmap' },
      ],
    },
    ...curriculumModules,
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
