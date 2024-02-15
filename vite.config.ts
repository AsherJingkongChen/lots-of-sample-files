/// <reference types="vitest" />

import { PluginOption, defineConfig } from 'vite';
import { default as ViteDtsPlugin } from 'vite-plugin-dts';

export default defineConfig((env) => ({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es'],
    },
    minify: env.mode === 'production',
    outDir: 'dist',
    ssr: true,
    target: ['deno1', 'node18'],
  },
  esbuild: {
    drop: env.mode === 'production' ? ['console', 'debugger'] : undefined,
  },
  plugins: [BundleFinishBannerPlugin(env), DtsPlugin()],
  test: {
    coverage: {
      enabled: true,
      include: ['src/**/*'],
      provider: 'istanbul',
      reporter: ['text', 'text-summary'],
      thresholds: {
        functions: 100,
      },
    },
    fileParallelism: false,
    maxConcurrency: 1,
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    include: ['tests/**/*.test.ts'],
  },
}));

function BundleFinishBannerPlugin(context: { mode: string }): PluginOption {
  return {
    name: 'bundle-finish-banner',
    apply: 'build',
    enforce: 'post',
    closeBundle: {
      order: 'post',
      handler() {
        this.info({
          message: '\x1b[32m' + `Built in ${context.mode} mode` + '\x1b[0m',
        });
      },
    },
  };
}

function DtsPlugin(): PluginOption {
  return ViteDtsPlugin({
    entryRoot: '.',
    include: 'src',
    rollupTypes: true,
  });
}
