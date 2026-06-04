import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://buildingaisystems.prajwolkharel.com.np',
    integrations: [
        starlight({
            title: 'Building AI Systems',
            social: {
                github: 'https://github.com/prajwolkk/building-ai-systems',
            },
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'System Roadmap', link: '/00-roadmap' },
                    ],
                },
                {
                    label: '01. AI Fundamentals',
                    autogenerate: { directory: '01-ai-fundamentals' },
                },
                {
                    label: '02. LLM Engineering',
                    autogenerate: { directory: '02-llm-engineering' },
                },
                {
                    label: '03. Embeddings & Search',
                    autogenerate: { directory: '03-embeddings' },
                },
                {
                    label: '04. Production RAG',
                    autogenerate: { directory: '04-rag' },
                },
                {
                    label: '05. Autonomous Agents',
                    autogenerate: { directory: '05-ai-agents' },
                },
                {
                    label: '06. AI System Design',
                    autogenerate: { directory: '06-ai-system-design' },
                },
                {
                    label: '07. Evaluation Systems',
                    autogenerate: { directory: '07-evaluation' },
                },
                {
                    label: '08. AI Security & Red Teaming',
                    autogenerate: { directory: '08-ai-security' },
                },
                {
                    label: '09. Production Projects',
                    autogenerate: { directory: '09-projects' },
                },
                {
                    label: '10. Architectural Case Studies',
                    autogenerate: { directory: '10-case-studies' },
                },
                {
                    label: '11. Interview Preparation',
                    autogenerate: { directory: '11-interview-prep' },
                },
            ],
        }),
    ],
});