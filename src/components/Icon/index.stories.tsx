import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {},
  args: {},
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
