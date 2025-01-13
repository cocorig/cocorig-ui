import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { colorPaletteOptions } from '../../foundation';
import { getDefaultValue } from '../../storybook-props';
import { HStack } from '../Stack';

import { runTest } from './storyTest';

import { Switch } from '.';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {},
  args: {
    label: 'Switch',
    colorScheme: 'gray',
    size: 'lg',
    checked: true,
    onCheckedChange: (event) => {
      console.log(event.target.checked);
    },
  },
  argTypes: {
    size: {
      table: {
        ...getDefaultValue('lg'),
      },
    },
    colorScheme: {
      table: {
        ...getDefaultValue('gray'),
      },
    },
    thumbLabel: {
      table: {
        type: {
          summary: '{ on: ReactElement; off: ReactElement; }',
        },
      },
    },
    trackLabel: {
      table: {
        type: {
          summary: '{ on: ReactElement; off: ReactElement; }',
        },
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
export type Story = StoryObj<typeof meta>;

const renderSwitch = (args, overrides = {}) => (
  <Switch {...args} {...overrides} onCheckedChange={(event) => args.onCheckedChange(event)} />
);

export const Default: Story = runTest({
  render: (args) => {
    const [toggle, setToggle] = useState(false);

    return (
      <Switch {...args} checked={toggle} onCheckedChange={(event) => setToggle(event.target.checked)}>
        스위치
      </Switch>
    );
  },
});

const sizeOptions = ['md', 'lg'] as const;

export const Sizes: Story = {
  render: (args) => (
    <HStack gap={1} alignItems="center" wrap="wrap">
      {sizeOptions.map((size) => renderSwitch(args, { size, key: size }))}
    </HStack>
  ),
};

export const AllCheckedColor: Story = {
  render: (args) => (
    <HStack gap={0.5} alignItems="flex-start" wrap="wrap">
      {colorPaletteOptions.map((colorScheme) => renderSwitch(args, { colorScheme, key: colorScheme }))}
    </HStack>
  ),
};

export const TrackLabel: Story = {
  args: {
    ...Default.args,
    checked: false,
    trackLabel: {
      on: <span style={{ color: 'white' }}>on</span>,
      off: <span>off</span>,
    },
  },
  render: (args) => renderSwitch(args),
};

export const ThumbLabel: Story = {
  args: {
    ...Default.args,
    checked: false,
    thumbLabel: {
      on: <span style={{ fontSize: '0.5em', lineHeight: '2em' }}>on</span>,
      off: <span style={{ fontSize: '0.5em', lineHeight: '2em' }}>off</span>,
    },
  },
  render: (args) => renderSwitch(args),
};
