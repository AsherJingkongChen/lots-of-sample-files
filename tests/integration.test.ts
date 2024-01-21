import { Sample } from 'dist';
import { describe, expect, it } from 'vitest';

describe('Unit tests (import from src)', () => {
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
  });
});
