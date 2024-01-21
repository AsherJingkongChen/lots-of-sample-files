import { readdirSync, readFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

/**
 * ## Introduction
 * Manage the samples
 *
 * ## References
 * - [APNG Sample](https://apng.onevcat.com/assets/elephant.png)
 * - [EXIF Samples](https://pixelpeeper.com/photos)
 * - [Download Sample Files](https://www.dwsamplefiles.com/)
 * - [FFmpeg Samples](https://samples.ffmpeg.org/)
 * - [File Examples](https://file-examples.com/)
 * - [File Format Conformance Framework](https://mpeggroup.github.io/FileFormatConformance/)
 * - [FileSamples](https://filesamples.com/)
 * - [Fontsource](https://fontsource.org/)
 * - [Samples Files](https://samples-files.com/)
 */
export namespace Sample {
  /**
   * ## Introduction
   * Walk through all the files in the directory `dir`
   *
   * ## Results
   * - `Generator<string>`
   *   + file paths
   */
  function* _paths(dir: string): Generator<string> {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullEntry = join(entry.path, entry.name);
      if (entry.isDirectory()) {
        yield* _paths(fullEntry);
      } else {
        yield fullEntry;
      }
    }
  }

  /**
   * ## Introduction
   * Walk through all the files in the sample directory
   *
   * ## Parameters
   * - `filter` - `(type: string) => boolean`
   *   + A function to filter paths by media types
   *
   * ## Results
   * - `Generator<{ path: string; type: string }>`
   *   + paths and media types
   */
  export function* paths(
    filter?: (type: string) => boolean,
  ): Generator<{ path: string; type: string }> {
    const sampleDir = join(
      fileURLToPath(import.meta.url),
      '../resources/samples',
    );
    for (const path of _paths(sampleDir)) {
      const relDir = relative(sampleDir, dirname(path));
      /* Only read files in the "files" sub-directory */
      if (!relDir.endsWith('files')) {
        continue;
      }

      const type = dirname(relDir);
      /* Filter by media types */
      if (filter && !filter(type)) {
        continue;
      }

      yield { path, type };
    }
  }

  /**
   * ## Introduction
   * Walk through all the files in the sample directory
   *
   * ## Parameters
   * - `filter` - `(type: string) => boolean`
   *   + A function to filter files by media types
   *
   * ## Results
   * - `Generator<File>`
   *   + file references
   *     - `File.type` - The media type is pre-determined manually
   */
  export function* files(filter?: (type: string) => boolean): Generator<File> {
    for (const { path, type } of paths(filter)) {
      const buffer = readFileSync(path);
      const file = new File([buffer], path, { type });
      yield file;
    }
  }
}

import buffer from 'buffer';

const nodejsVersion = Number(/(\d+\.\d+)/.exec(process.version)?.[1]);
if (nodejsVersion < 20 && nodejsVersion >= 18) {
  Object.assign(globalThis, buffer);
} else if (nodejsVersion < 18) {
  /**
   * [TODO] Maybe we can use "jsdom" to polyfill File API... but who uses Node.js 16 anyway?
   */
}
