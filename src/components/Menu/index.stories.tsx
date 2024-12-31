import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {},
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

const menuItems = ['Home', 'Profile', 'Settings'];
const colorItems = ['Red', 'Green', 'Blue'];

export const Default: Story = {
  args: {},
  render: () => (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.List value="Home" onValueChange={(value) => console.log(value)} minW="200px">
        {menuItems.map((item, index) => (
          <Menu.Item value={item} key={index} itemIndex={index}>
            {item}
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  ),
};

export const Group: Story = {
  args: {},
  render: () => (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.List value="Home" onValueChange={(value) => console.log(value)} minW="200px">
        <Menu.Title title="Navigation" />
        <Menu.Group>
          {menuItems.map((item, index) => (
            <Menu.Item value={item} key={index} itemIndex={index}>
              {item}
            </Menu.Item>
          ))}
        </Menu.Group>

        <Menu.Title title="Colors" />
        <Menu.Group>
          {colorItems.map((item, index) => (
            <Menu.Item value={item} key={index} itemIndex={index}>
              {item}
            </Menu.Item>
          ))}
        </Menu.Group>
      </Menu.List>
    </Menu>
  ),
};
