import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { getPropsType } from '../../storybook-props';
import { Input } from '../Input';

import { InputGroup } from '.';

const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  parameters: {},
  args: {},
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Search..." />
    </InputGroup>
  ),
  argTypes: {
    leftElement: {
      table: {
        ...getPropsType('ReactElement | string'),
      },
      control: 'object',
    },
    rightElement: {
      table: {
        ...getPropsType('ReactElement | string'),
      },
      control: 'object',
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLeftElement: Story = {
  args: {
    leftElement: (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
};

export const WithRightElement: Story = {
  args: {
    rightElement: (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
};
