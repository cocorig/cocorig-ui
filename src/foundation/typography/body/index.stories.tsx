import { Meta, StoryObj } from '@storybook/react';

import { getPropsType } from '../../../storybook-props';

import { Body } from './index';

const meta = {
  title: 'Typography/Body',
  component: Body,
  parameters: {},
  args: {
    tag: 'span',
    size: 'sm',
  },
  argTypes: {
    tag: {
      description: '`p`, `span` 태그를 사용합니다',
    },
    children: {
      table: {
        ...getPropsType('ReactNode'),
      },
    },
  },
} satisfies Meta<typeof Body>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Body',
  },
};
