import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const docsRoot = 'src/content/docs';
const matrixFiles = ['01-overview.md', '02-architecture.md', '03-deep-dive.md'];
const scaffoldOnlyLines = new Set([
  'Content coming soon.',
  '### System Topology',
  'Placeholder for production-grade architectural specifications.',
  '### Implementation Vector',
  'Detailed engineering logs coming soon.',
]);

function moduleDirs() {
  return readdirSync(docsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => {
      const order = Number(name.slice(0, 2));
      return Number.isInteger(order) && order >= 1 && order <= 11;
    })
    .sort((a, b) => a.localeCompare(b, 'en'));
}

function topicDirs(moduleSlug) {
  const modulePath = join(docsRoot, moduleSlug);
  return readdirSync(modulePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'en'));
}

function parseMarkdown(markdown, filePath) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${filePath} is missing YAML frontmatter.`);
  }

  return {
    frontmatter: match[1].split(/\r?\n/),
    body: match[2],
  };
}

function hasPublishableContent(body) {
  return body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .some((line) => line.length > 0 && !scaffoldOnlyLines.has(line));
}

function setFrontmatterValue(lines, key, value) {
  const nextLine = `${key}: ${value}`;
  const index = lines.findIndex((line) => line.match(new RegExp(`^${key}:`)));

  if (index === -1) {
    return [...lines, nextLine];
  }

  return lines.map((line, lineIndex) => (lineIndex === index ? nextLine : line));
}

function removeFrontmatterKey(lines, key) {
  return lines.filter((line) => !line.match(new RegExp(`^${key}:`)));
}

function normalizePublishState(filePath) {
  const markdown = readFileSync(filePath, 'utf8');
  const { frontmatter, body } = parseMarkdown(markdown, filePath);
  const publishable = hasPublishableContent(body);

  let nextFrontmatter = frontmatter;

  if (publishable) {
    nextFrontmatter = removeFrontmatterKey(nextFrontmatter, 'draft');
    nextFrontmatter = removeFrontmatterKey(nextFrontmatter, 'pagefind');
  } else {
    nextFrontmatter = setFrontmatterValue(nextFrontmatter, 'draft', 'true');
    nextFrontmatter = setFrontmatterValue(nextFrontmatter, 'pagefind', 'false');
  }

  const nextMarkdown = `---\n${nextFrontmatter.join('\n')}\n---\n${body}`;

  if (nextMarkdown !== markdown) {
    writeFileSync(filePath, nextMarkdown);
    return 1;
  }

  return 0;
}

let updated = 0;

for (const moduleSlug of moduleDirs()) {
  for (const topicSlug of topicDirs(moduleSlug)) {
    for (const fileName of matrixFiles) {
      updated += normalizePublishState(join(docsRoot, moduleSlug, topicSlug, fileName));
    }
  }
}

console.log(`Docs publish state synced. Updated ${updated} file${updated === 1 ? '' : 's'}.`);
