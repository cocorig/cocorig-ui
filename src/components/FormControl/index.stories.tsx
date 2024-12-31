import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { statesOptions } from '../../foundation';
import { getPropsType } from '../../storybook-props';
import { Input } from '../Input';
import { VStack } from '../Stack';

import { FormControl } from '.';

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  args: {
    label: '비밀번호',
    helperText: '비밀번호의 길이가 8~20자가 되어야 합니다.',
    required: true,
  },
  argTypes: {
    label: {
      table: {
        ...getPropsType('string'),
      },
    },
    helperText: {
      table: {
        ...getPropsType('string'),
      },
    },
    required: {
      table: {
        ...getPropsType('boolean'),
      },
      control: 'boolean',
    },
    labelSize: {
      control: 'text',
    },
    helperTextSize: {
      control: 'text',
    },
  },
  render: (args) => (
    <FormControl label="비밀번호" {...args}>
      <Input placeholder="영문자,숫자,특수문자 포함 8~20자" />
    </FormControl>
  ),
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Status: Story = {
  args: {},
  render: (args) => (
    <VStack gap={1} alignItems="flex-start">
      {statesOptions.map((status) => (
        <FormControl status={status} {...args}>
          <Input placeholder="영문자,숫자,특수문자 포함 8~20자" />
        </FormControl>
      ))}
    </VStack>
  ),
};

export const Required: Story = {
  render: (args) => (
    <FormControl required helperTextColor="red" {...args}>
      <Input placeholder="영문자,숫자,특수문자 포함 8~20자" />
    </FormControl>
  ),
};
