import React, { Fragment, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { runTest } from './storyTest';

import { Menu } from '.';
const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {},
  tags: ['!autodocs'],
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

export type Story = StoryObj<typeof meta>;

const menuItems = ['created', 'updated', 'comments'];

export const Default: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState(menuItems[0]);
    return (
      <Menu>
        <Menu.Trigger>{value}</Menu.Trigger>
        <Menu.List value={value} onValueChange={(value) => setValue(value)} minW="200px">
          {menuItems.map((item, index) => (
            <Menu.Item value={item} key={index} itemIndex={index}>
              {item}
            </Menu.Item>
          ))}
        </Menu.List>
      </Menu>
    );
  },
};
const groupItems = [
  {
    title: 'Components',
    items: ['Button', 'Menu', 'Input'],
  },
  {
    title: 'Layout',
    items: ['Box', 'Stack', 'Flex'],
  },
];
export const Group: Story = runTest({
  args: {},
  render: () => {
    const [value, setValue] = useState('Menu');
    let index = 0;
    return (
      <Menu>
        <Menu.Trigger>{value}</Menu.Trigger>
        <Menu.List value={value} onValueChange={(value) => setValue(value)} minW="200px">
          {groupItems.map((group) => (
            <Fragment key={group.title}>
              <Menu.Title title={group.title} />
              <Menu.Group>
                {group.items.map((item) => {
                  const currentIndex = index++;
                  return (
                    <Menu.Item value={item} key={`item-${currentIndex}`} itemIndex={currentIndex}>
                      {item}
                    </Menu.Item>
                  );
                })}
              </Menu.Group>
            </Fragment>
          ))}
        </Menu.List>
      </Menu>
    );
  },
});
