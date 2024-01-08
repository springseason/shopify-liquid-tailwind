import vituum from 'vituum';
import liquid from '@vituum/vite-plugin-liquid';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  plugins: [vituum(), liquid()],
  build: {
    rollupOptions: {
      input: ['index.liquid.html'],
    },
  },
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};
export default config;
