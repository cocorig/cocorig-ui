import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Body, COLOR_SET, colorPaletteOptions, statesOptions } from '../../foundation';
import { getDefaultValue } from '../../storybook-props';
import { HStack, VStack } from '../Stack';

import { runTest } from './storyTest';

import { Input } from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: '값을 입력해주세요',
    variant: 'outline',
    colorScheme: 'gray',
    placeholderColor: COLOR_SET.gray[600],
    inputSize: 'md',
    borderRadius: 'default',
  },
} satisfies Meta<typeof Input>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Template: Story = runTest({
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Input
        {...args}
        value={value}
        colorScheme={value.length > 10 ? 'error' : 'gray'}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
});

export const Default: Story = {
  argTypes: {
    variant: {
      table: {
        ...getDefaultValue('outline'),
      },
    },
    colorScheme: {
      table: {
        ...getDefaultValue('gray'),
      },
    },
    inputSize: {
      table: {
        ...getDefaultValue('md'),
      },
    },
    borderRadius: {
      table: {
        ...getDefaultValue('default'),
      },
    },
    fullWidth: {
      table: {
        ...getDefaultValue('true'),
      },
    },
  },
};

const variantOptions = ['outline', 'filled', 'underlined'] as const;
const sizeOptions = ['xl', 'lg', 'md', 'sm'] as const;

export const Variants: Story = {
  render: (args) => (
    <VStack gap={1} alignItems="flex-start">
      {variantOptions.map((variant) => (
        <Input {...args} variant={variant} key={variant} />
      ))}
    </VStack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <VStack gap={1} alignItems="flex-start">
      {sizeOptions.map((size) => (
        <Input {...args} inputSize={size} key={size} />
      ))}
    </VStack>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <VStack gap={0.5} alignItems="flex-start">
      {[...colorPaletteOptions, ...statesOptions].map((color) => (
        <HStack gap={2} alignItems="center" key={color}>
          <Body size="md" style={{ minWidth: '10ch' }}>
            {color}
          </Body>
          <Input {...args} colorScheme={color} />
        </HStack>
      ))}
    </VStack>
  ),
};
