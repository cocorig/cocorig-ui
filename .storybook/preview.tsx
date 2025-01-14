import React from 'react';
import { Global } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { baseStyle } from '../src/css/baseStyle';

const GlobalStyle = () => <Global styles={baseStyle} />;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;
