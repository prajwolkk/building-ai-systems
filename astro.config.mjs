import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://buildingaisystems.prajwolkharel.com.np',
    integrations: [
        starlight({
            title: 'Building AI Systems',
            // FIXED: Re-architected to comply with Starlight v0.33.0 array syntax requirements
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/prajwolkk/building-ai-systems'
                }
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'System Roadmap', link: '/00-roadmap' },
                    ],
                },
                {
                    label: '01. AI Fundamentals',
                    items: [{ autogenerate: { directory: '01-ai-fundamentals' } }]
                },
                {
                    label: '02. LLM Engineering',
                    items: [{ autogenerate: { directory: '02-llm-engineering' } }]
                },
                {
                    label: '03. Embeddings & Search',
                    items: [{ autogenerate: { directory: '03-embeddings' } }]
                },
                {
                    label: '04. Production RAG',
                    items: [{ autogenerate: { directory: '04-rag' } }]
                },
                {
                    label: '05. Autonomous Agents',
                    items: [{ autogenerate: { directory: '05-ai-agents' } }]
                },
                {
                    label: '06. AI System Design',
                    items: [{ autogenerate: { directory: '06-ai-system-design' } }]
                },
                {
                    label: '07. Evaluation Systems',
                    items: [{ autogenerate: { directory: '07-evaluation' } }]
                },
                {
                    label: '08. AI Security & Red Teaming',
                    items: [{ autogenerate: { directory: '08-ai-security' } }]
                },
                {
                    label: '09. Production Projects',
                    items: [{ autogenerate: { directory: '09-projects' } }]
                },
                {
                    label: '10. Architectural Case Studies',
                    items: [{ autogenerate: { directory: '10-case-studies' } }]
                },
                {
                    label: '11. Interview Preparation',
                    items: [{ autogenerate: { directory: '11-interview-prep' } }]
                },
            ],
        }),
    ],
});