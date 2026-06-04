import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://buildingaisystems.prajwolkharel.com.np',
    integrations: [
        starlight({
            title: 'Building AI Systems',
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
                    items: [{ autogenerate: { directory: '00-getting-started' } }]
                },
                {
                    label: 'AI Fundamentals',
                    items: [{ autogenerate: { directory: '01-ai-fundamentals' } }]
                },
                {
                    label: 'LLM Engineering',
                    items: [{ autogenerate: { directory: '02-llm-engineering' } }]
                },
                {
                    label: 'Embeddings & Search',
                    items: [{ autogenerate: { directory: '03-embeddings' } }]
                },
                {
                    label: 'Production RAG',
                    items: [{ autogenerate: { directory: '04-rag' } }]
                },
                {
                    label: 'Autonomous Agents',
                    items: [{ autogenerate: { directory: '05-ai-agents' } }]
                },
                {
                    label: 'AI System Design',
                    items: [{ autogenerate: { directory: '06-ai-system-design' } }]
                },
                {
                    label: 'Evaluation Systems',
                    items: [{ autogenerate: { directory: '07-evaluation' } }]
                },
                {
                    label: 'AI Security & Red Teaming',
                    items: [{ autogenerate: { directory: '08-ai-security' } }]
                },
                {
                    label: 'Production Projects',
                    items: [{ autogenerate: { directory: '09-projects' } }]
                },
                {
                    label: 'Architectural Case Studies',
                    items: [{ autogenerate: { directory: '10-case-studies' } }]
                },
                {
                    label: 'Interview Preparation',
                    items: [{ autogenerate: { directory: '11-interview-prep' } }]
                },
            ],
        }), // <-- Closed starlight integration
    ], // <-- Closed integrations array
}); // <-- Closed defineConfig