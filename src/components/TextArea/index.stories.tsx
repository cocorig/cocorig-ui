import { Meta, StoryObj } from '@storybook/react';

import { COLOR_SET } from '../../foundation';
import { Default as InputDefault } from '../Input/index.stories';

import { TextArea } from '.';
const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {},
  args: {
    placeholder: 'Placeholder..',
    variant: 'outline',
    colorScheme: 'gray',
    placeholderColor: COLOR_SET.gray[600],
    inputSize: 'md',
    borderRadius: 'default',
    resize: 'none',
    minH: 'initial',
  },
  argTypes: {
    ...InputDefault.argTypes,
    resize: {
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    minH: {
      table: {
        defaultValue: { summary: 'initial' },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
