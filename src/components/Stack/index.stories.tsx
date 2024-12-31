import React, { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { getPropsType } from '../../storybook-props';

import { Stack } from '.';

type StoryProps = ComponentProps<typeof Stack> & {
  testOfChildren: number;
};

const meta = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {},
  // 공통 args
  args: {
    testOfChildren: 5,
    gap: '10px',
  },
  // 공통 render
  render: ({ testOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(testOfChildren)}</Stack>;
  },
  // control 패널 설정
  argTypes: {
    testOfChildren: {
      options: [1, 5, 10],
      control: {
        type: 'select',
      },
    },
    alignItems: {
      table: {
        ...getPropsType(
          '"center" | "start" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "baseline" | "normal" | "stretch"|"inherit" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset"',
        ),
      },
    },
    justifyContent: {
      table: {
        ...getPropsType(
          '"stretch" | "space-around" | "space-between" | "space-evenly"|"center" | "start" | "end" | "flex-end" | "flex-start"|"left" | "normal" | "right"|"inherit" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset"|',
        ),
      },
    },
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  args: {
    direction: 'row',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'column',
  },
};

const createChildren = (testOfChildren: number) => {
  return Array(testOfChildren)
    .fill(null)
    .map((_, index) => {
      return <div key={index} style={{ width: 100, height: 100, backgroundColor: 'red' }} />;
    });
};
