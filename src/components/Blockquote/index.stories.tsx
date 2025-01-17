import { Meta, StoryObj } from '@storybook/react';

import { Body, colorPaletteOptions } from '../../foundation';
import { getPropsType } from '../../storybook-props';
import { HStack, VStack } from '../Stack';

import { runTest } from './storyTest';

import { Blockquote } from '.';

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  args: {
    children: (
      <Body>내일 죽는다면 오늘 대부분의 일들은 아무것도 아닐 것이다. 그러니 너무 하나하나에 연연하며 살지 말자.</Body>
    ),
    borderRadius: 0,
  },
  argTypes: {
    children: {
      table: {
        ...getPropsType('ReactNode'),
      },
    },
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = runTest({
  args: {
    colorScheme: 'pink',
  },
});

export const AllColors: Story = {
  render: (args) => (
    <VStack gap={0.5} alignItems="flex-start">
      {colorPaletteOptions.map((colorPalettes) => (
        <HStack gap={2} alignItems="center" key={colorPalettes}>
          <Body size="md" style={{ minWidth: '10ch' }}>
            {colorPalettes}
          </Body>
          <Blockquote colorScheme={colorPalettes} {...args} />
        </HStack>
      ))}
    </VStack>
  ),
};
