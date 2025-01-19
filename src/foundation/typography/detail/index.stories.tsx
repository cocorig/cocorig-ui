import { Meta, StoryObj } from '@storybook/react';

import { getPropsType } from '../../../storybook-props';

import { Detail } from './index';

const meta = {
  title: 'Typography/Detail',
  component: Detail,
  parameters: {},
  args: { tag: 'small', size: 'xs' },
  argTypes: {
    tag: {
      description: '`small` 태그를 사용합니다',
    },
    children: {
      table: {
        ...getPropsType('ReactNode'),
      },
    },
  },
} satisfies Meta<typeof Detail>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Detail',
  },
};
