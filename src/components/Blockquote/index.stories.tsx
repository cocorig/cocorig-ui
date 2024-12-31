import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Body, colorPaletteOptions } from '../../foundation';
import { HStack, VStack } from '../Stack';

import { Blockquote } from '.';

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {},
  args: {},
  argTypes: {},
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorScheme: 'pink',
    children: 'Blockquote',
    borderRadius: 0,
  },
};

export const AllColors: Story = {
  render: () => (
    <VStack gap={0.5} alignItems="flex-start">
      {colorPaletteOptions.map((colorPalettes) => (
        <HStack gap={2} alignItems="center" key={colorPalettes}>
          <Body size="md" style={{ minWidth: '10ch' }}>
            {colorPalettes}
          </Body>
          <Blockquote colorScheme={colorPalettes}>
            내일 죽는다면 오늘 대부분의 일들은 아무것도 아닐것이다. 그러니 너무 하나하나에 연연하며 살지 말자.
          </Blockquote>
        </HStack>
      ))}
    </VStack>
  ),
};
