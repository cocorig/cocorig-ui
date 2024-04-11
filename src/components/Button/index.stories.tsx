import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    radius: {
      control: {
        type: 'select',
        options: ['square', 'rounded', 'default'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary: Story = (args) => <Button {...args} />;
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const WithIcons: Story = (args) => <Button {...args} />;
WithIcons.args = {
  variant: 'primary',
  children: 'Button with Icons',
  leftIcon: <span>🤗</span>,
  rightIcon: <span>🔥</span>,
};

export const FullWidth: Story = (args) => <Button {...args} />;
FullWidth.args = {
  variant: 'primary',
  children: 'Full Width Button',
  fullWidth: true,
};

export const Disabled: Story = (args) => <Button {...args} />;
Disabled.args = {
  variant: 'primary',
  children: 'Disabled Button',
  disabled: true,
};
