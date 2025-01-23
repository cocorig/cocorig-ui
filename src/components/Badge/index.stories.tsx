import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Body, colorPaletteOptions } from '../../foundation';
import { getDefaultValue, getPropsType } from '../../storybook-props';
import { Icon } from '../Icon';
import { HStack, VStack } from '../Stack';

import { runTest } from './storyTest';

import { Badge } from '.';
export const commonArgTypes = {
  children: {
    table: {
      ...getPropsType('ReactNode'),
    },
  },
  size: {
    table: {
      ...getDefaultValue('md'),
    },
  },
  leftIcon: {
    table: {
      ...getPropsType('ReactElement'),
    },
  },
  rightIcon: {
    table: {
      ...getPropsType('ReactElement'),
    },
  },
  borderRadius: {
    table: {
      ...getDefaultValue('default'),
    },
  },
  weight: {
    table: {
      ...getDefaultValue('bold'),
    },
  },
  colorScheme: {
    table: {
      ...getDefaultValue('gray'),
    },
  },
};
const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {},
  args: {
    children: 'Badge',
    variant: 'base',
    size: 'md',
    colorScheme: 'gray',
    borderRadius: 'default',
    weight: 'bold',
  },
  argTypes: {
    ...commonArgTypes,
  },
  excludeStories: ['commonArgTypes'],
} satisfies Meta<React.ComponentProps<typeof Badge>>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BadgeWithIcon: Story = runTest({
  args: {
    children: 'IconBadge',
    size: 'sm',
    colorScheme: 'blue',
    leftIcon: (
      <Icon style={{ fontSize: '1.25rem', fill: 'currentColor' }} viewBox="0 0 20 20" data-testid="badge-icon">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </Icon>
    ),
  },
});

export const AllBadgeVariants: Story = {
  render: (args) => (
    <VStack gap={0.5} alignItems="flex-start">
      {colorPaletteOptions.map((colorPalettes) => (
        <HStack gap={2} alignItems="center" key={colorPalettes}>
          <Body size="md" style={{ minWidth: '10ch' }}>
            {colorPalettes}
          </Body>
          <Badge colorScheme={colorPalettes} variant="base">
            base
          </Badge>
          <Badge colorScheme={colorPalettes} variant="outline">
            outline
          </Badge>
          <Badge colorScheme={colorPalettes} variant="soft">
            soft
          </Badge>
          <Badge colorScheme={colorPalettes} variant="subtle">
            subtle
          </Badge>
        </HStack>
      ))}
    </VStack>
  ),
};
