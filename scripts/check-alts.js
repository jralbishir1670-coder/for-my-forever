#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(res)));
    else if (/\.(jsx?|tsx?)$/.test(e.name)) files.push(res);
  }
  return files;
}

function findImgIssues(content) {
  const regex = /<img\s+[^>]*>/gi;
  const matches = content.match(regex) || [];
  const problems = [];

  for (const tag of matches) {
    // detect alt attribute
    const hasAlt = /alt\s*=/.test(tag);
    if (!hasAlt) problems.push({ tag, reason: 'missing alt attribute' });
    else if (/alt\s*=\s*(""|''|"\s*"|'\s*')/i.test(tag)) problems.push({ tag, reason: 'empty alt attribute' });
  }

  return problems;
}

(async () => {
  try {
    const files = await walk(srcDir);
    let totalProblems = 0;
    for (const f of files) {
      const content = await fs.readFile(f, 'utf8');
      const problems = findImgIssues(content);
      if (problems.length) {
        totalProblems += problems.length;
        console.log(`\n[${path.relative(root, f)}] - ${problems.length} issue(s)`);
        for (const p of problems) console.log(`  - ${p.reason} -> ${p.tag}`);
      }
    }

    if (totalProblems === 0) {
      console.log('\n✔ No missing or empty alt attributes found in src/');
      process.exit(0);
    }

    console.log(`\nFound ${totalProblems} image accessibility issue(s).`);
    process.exit(2);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
