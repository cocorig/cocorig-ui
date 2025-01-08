import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Body, colorPaletteOptions } from '../../foundation';
import { getDefaultValue } from '../../storybook-props';
import { commonArgTypes } from '../Badge/index.stories';
import { HStack, VStack } from '../Stack';

import { runTest } from './storyTest';

import { Button } from '.';
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
  args: {
    children: 'Button',
    size: 'md',
    colorScheme: 'gray',
    variant: 'base',
    borderRadius: 'default',
    weight: 'bold',
    onClick: fn(),
  },
  argTypes: {
    ...commonArgTypes,
    iconSpacing: {
      table: {
        ...getDefaultValue('12px'),
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = runTest({});

const variantOptions = ['base', 'soft', 'subtle', 'outline', 'ghost'] as const;
export const ButtonVariants: Story = {
  render: () => (
    <VStack gap={0.5} alignItems="flex-start">
      {variantOptions.map((variant) => (
        <HStack gap={2} alignItems="center" key={variant}>
          <Body size="md" style={{ minWidth: '10ch' }}>
            {variant}
          </Body>
          <Button variant={variant}>Button</Button>
        </HStack>
      ))}
    </VStack>
  ),
};

export const ButtonColors: Story = {
  render: () => (
    <VStack gap={0.5} alignItems="flex-start">
      {colorPaletteOptions.map((color) => (
        <HStack gap={2} alignItems="center" key={color}>
          <Body size="md" style={{ minWidth: '10ch' }}>
            {color}
          </Body>
          <Button variant="base" colorScheme={color}>
            Button
          </Button>
        </HStack>
      ))}
    </VStack>
  ),
};

export const AllButtonVariantsAndColors: Story = {
  render: () => (
    <VStack gap={0.5} alignItems="flex-start">
      {colorPaletteOptions.map((color) => (
        <HStack gap={2} alignItems="center" key={color}>
          {variantOptions.map((variant) => (
            <HStack gap={2} alignItems="center">
              <Button key={`${color}-${variant}`} variant={variant} colorScheme={color}>
                Button
              </Button>
            </HStack>
          ))}
        </HStack>
      ))}
    </VStack>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
