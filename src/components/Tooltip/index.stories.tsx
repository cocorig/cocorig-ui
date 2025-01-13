import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Body, colorPaletteOptions } from '../../foundation';
import { getDefaultValue } from '../../storybook-props';
import { Button } from '../Button';
import { HStack, VStack } from '../Stack';

import { Tooltip } from '.';
const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {},
  args: {
    'data-tip': 'hello 👋🏻',
    direction: 'right',
    colorScheme: 'gray',
    borderRadius: 'default',
  },
  argTypes: {
    direction: {
      table: {
        ...getDefaultValue('right'),
      },
    },
    colorScheme: {
      table: {
        ...getDefaultValue('gray'),
      },
    },
    borderRadius: {
      table: {
        ...getDefaultValue('default'),
      },
    },
  },
  render: ({ ...args }) => (
    <Tooltip {...args} role="tooltip">
      <Button>Hover me!!</Button>
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Top: Story = {
  args: {
    direction: 'top',
    className: 'hover-tooltip',
  },
};

export const Bottom: Story = {
  args: {
    direction: 'bottom',
    className: 'hover-tooltip',
  },
};

export const Left: Story = {
  args: {
    direction: 'left',
    className: 'hover-tooltip',
  },
};

export const Right: Story = {
  args: {
    direction: 'right',
    className: 'hover-tooltip',
  },
};

export const Colors: Story = {
  args: {
    direction: 'right',
  },
  render: ({ ...args }) => (
    <>
      <VStack gap={0.5} alignItems="flex-start">
        {colorPaletteOptions.map((color) => (
          <HStack gap={2} alignItems="center">
            <Body size="md" style={{ minWidth: '10ch' }}>
              {color}
            </Body>
            <Tooltip {...args} className="hover-tooltip" colorScheme={color}>
              <Button>Hover me!!</Button>
            </Tooltip>
          </HStack>
        ))}
      </VStack>
      <style>
        {`
          .hover-tooltip[data-tip]::before,
          .hover-tooltip[data-tip]::after {
            opacity: 1 
          }
        `}
      </style>
    </>
  ),
};
