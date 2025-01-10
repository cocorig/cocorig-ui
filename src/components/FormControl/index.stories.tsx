import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { statesOptions } from '../../foundation';
import { getPropsType } from '../../storybook-props';
import { Input } from '../Input';
import { VStack } from '../Stack';

import { runTest } from './storyTest';

import { FormControl } from '.';

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  args: {
    label: '닉네임',
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
} satisfies Meta<typeof FormControl>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Template: Story = runTest({
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <FormControl
        required
        status={value.length > 15 ? 'error' : null}
        helperText={value.length > 15 ? '15자 이하로 작성해주세요' : ''}
        {...args}
      >
        <Input placeholder="값을 입력해주세요" value={value} onChange={(e) => setValue(e.target.value)} />
      </FormControl>
    );
  },
});

export const Status: Story = {
  render: (args) => (
    <VStack gap={1} alignItems="flex-start">
      {statesOptions.map((status) => (
        <FormControl status={status} {...args}>
          <Input placeholder="값을 입력해주세요" />
        </FormControl>
      ))}
    </VStack>
  ),
};

export const Required: Story = {
  render: (args) => (
    <FormControl required helperTextColor="red" {...args}>
      <Input placeholder="값을 입력해주세요" />
    </FormControl>
  ),
};
