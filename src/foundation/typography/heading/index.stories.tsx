import { Meta, StoryObj } from '@storybook/react';

import { getPropsType } from '../../../storybook-props';

import { Heading } from './index';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {},
  args: { tag: 'h1', size: '2xl' },
  argTypes: {
    tag: {
      description: '`h1` `h2` , `h3` , `h4` , `h5` , `h6` 태그를 사용합니다',
    },
    children: {
      table: {
        ...getPropsType('ReactNode'),
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading',
  },
};
