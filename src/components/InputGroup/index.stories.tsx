import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { getPropsType } from '../../storybook-props';
import { Icon } from '../Icon';
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

const SearchButton = () => (
  <button aria-label="검색">
    <Icon viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
      ></path>
    </Icon>
  </button>
);
export const WithLeftElement: Story = {
  args: {
    leftElement: <SearchButton />,
  },
};

export const WithRightElement: Story = {
  args: {
    rightElement: <SearchButton />,
  },
};
