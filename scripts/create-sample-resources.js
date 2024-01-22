#! /usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cp, mkdir } from 'fs/promises';

const { argv } = process;
if (argv.length < 3) {
  throw new Error(
    'Missing required arguments: "Sample media types". ' +
      `Usage: ${argv[0]} ${argv[1]} <Sample-media-types...>`,
  );
}

const mediaTypes = argv.slice(2);
Promise.all(mediaTypes.map(createSample));

async function createSample(mediaType) {
  const resourcesDir = join(
    dirname(fileURLToPath(import.meta.url)),
    '../resources',
  );
  const sampleDir = join(resourcesDir, 'samples', mediaType);
  const docsDir = join(sampleDir, 'docs');
  const filesDir = join(sampleDir, 'files');
  const templateDir = join(resourcesDir, 'archives/templates/template/docs');

  await mkdir(filesDir, { recursive: true });
  await cp(templateDir, docsDir, { recursive: true });
}
