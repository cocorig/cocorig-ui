import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['Configure.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // union prop type을 select 컨트롤로 생성
      shouldExtractLiteralValuesFromEnum: true,
      // string,boolean type을 inputs 혹은 switches 컨트롤로 생성
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                  importSource: '@emotion/react',
                },
              ],
              '@babel/preset-typescript',
            ],
            plugins: ['@emotion/babel-plugin'],
          },
        },
      ],
    });

    return config;
  },
};
export default config;
