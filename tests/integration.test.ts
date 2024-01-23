// @ts-ignore
import { Sample } from 'dist/index';
import { describe, expect, it } from 'vitest';
import mediaTypes from 'iana-media-type';

describe('Sample.files()', () => {
  it('All the results are readable', async () => {
    expect(Sample.files().next().done).toBeFalsy();
    for (const file of Sample.files()) {
      await expect(file.slice(0, 0).arrayBuffer()).resolves.toBeTruthy();
    }
  });
});
describe('Sample.paths()', () => {
  it('It returns some paths', () => {
    const { done, value } = Sample.paths().next();
    expect(done).toBeFalsy();
    expect(value.path).toBeTypeOf('string');
  });
  it('It only returns filtered paths', () => {
    const filter = (type: string) =>
      type === 'image/jpeg' || type === 'video/mpeg';
    expect(Sample.files(filter).next().done).toBeFalsy();
    for (const { type } of Sample.paths(filter)) {
      expect(filter(type)).toBeTruthy();
    }
  });
  it('All media types are included in IANA assignments', () => {
    const ianaMediaTypes = new Set(mediaTypes);
    for (const { type } of Sample.paths()) {
      expect(ianaMediaTypes).toContain(type);
    }
  });
});
