import React, { Fragment, useState } from 'react';

import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';

import { runTest } from './storyTest';

import { Menu } from '.';
const meta = {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    'Menu.Trigger ': Menu.Trigger,
    'Menu.List ': Menu.List,
    'Menu.Item ': Menu.Item,
    'Menu.Group': Menu.Group,
    'Menu.Title ': Menu.Title,
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;

export type Story = StoryObj<typeof meta>;

const menuItems = ['created', 'updated', 'comments'];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(menuItems[0]);
    return (
      <Menu {...args}>
        <Menu.Trigger>{value}</Menu.Trigger>
        <Menu.List
          selectStyles={css`
            font-weight: bold;
          `}
          selectIcon={
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          }
          value={value}
          onValueChange={(value) => setValue(value)}
          minW="200px"
        >
          {menuItems.map((item, index) => (
            <Menu.Item value={item} key={index} itemIndex={index}>
              {item}
            </Menu.Item>
          ))}
        </Menu.List>
      </Menu>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { css } from "@emotion/react";
import { Menu } from "cocorig-ui";
import { useState } from "react";

const Demo = () => {
  const [value, setValue] = useState(menuItems[0]);
  return (
    <Menu>
      <Menu.Trigger>{value}</Menu.Trigger>
      <Menu.List
        selectStyles={css\`
          font-weight: bold;
        \`}
        selectIcon={
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        }
        value={value}
        onValueChange={(value) => setValue(value)}
        minW="200px"
      >
        {menuItems.map((item, index) => (
          <Menu.Item value={item} key={index} itemIndex={index}>
            {item}
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  );
};

const menuItems = ["created", "updated", "comments"];

`,
      },
    },
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
  render: (args) => {
    const [value, setValue] = useState('Menu');
    let index = 0;
    return (
      <Menu {...args}>
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
  parameters: {
    docs: {
      source: {
        code: `
import { Menu } from "cocorig-ui";
import { Fragment, useState } from "react";


const Demo = () => {
  const [value, setValue] = useState("Menu");
  let index = 0;
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <Menu>
        <Menu.Trigger>{value}</Menu.Trigger>
        <Menu.List
          value={value}
          onValueChange={(value) => setValue(value)}
          minW="200px"
        >
          {groupItems.map((group) => (
            <Fragment key={group.title}>
              <Menu.Title title={group.title} />
              <Menu.Group>
                {group.items.map((item) => {
                  const currentIndex = index++;
                  return (
                    <Menu.Item
                      value={item}
                      key={\`item-\${currentIndex}\`}
                      itemIndex={currentIndex}
                    >
                      {item}
                    </Menu.Item>
                  );
                })}
              </Menu.Group>
            </Fragment>
          ))}
        </Menu.List>
      </Menu>
    </div>
  );
};

const groupItems = [
  {
    title: "Components",
    items: ["Button", "Menu", "Input"],
  },
  {
    title: "Layout",
    items: ["Box", "Stack", "Flex"],
  },
];

`,
      },
    },
  },
});
