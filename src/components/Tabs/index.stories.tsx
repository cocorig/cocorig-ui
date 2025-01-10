import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { VStack } from '../Stack';

import { runTest } from './storyTest';

import { Tab } from '.';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {},
  args: {},
  argTypes: {
    // size: {
    //   options: ['2xs', 'xs', 'sm', 'md'],
    //   control: {
    //     type: 'radio',
    //   },
    //   table: {
    //     defaultValue: { summary: 'md' },
    //   },
    // },
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Tab defaultValue="members" {...args}>
        <TabList />
        <TabContent />
      </Tab>
    </div>
  ),
} satisfies Meta<typeof Tab>;

export default meta;
export type Story = StoryObj<typeof meta>;

const TabList = () => (
  <Tab.List>
    <Tab.Trigger value="members">팀원</Tab.Trigger>
    <Tab.Trigger value="projects">프로젝트</Tab.Trigger>
    <Tab.Trigger value="tasks">작업</Tab.Trigger>
  </Tab.List>
);

const TabContent = () => (
  <>
    <Tab.Content value="members">팀원 관리</Tab.Content>
    <Tab.Content value="projects">프로젝트 관리</Tab.Content>
    <Tab.Content value="tasks">작업 관리</Tab.Content>
  </>
);

const variants = ['lifted', 'boxed', 'underlined'] as const;

export const Default: Story = runTest({});

export const Variants: Story = {
  render: () => (
    <VStack gap={3}>
      {variants.map((variant) => (
        <Tab defaultValue="members" variant={variant} key={variant}>
          <TabList />
          <TabContent />
        </Tab>
      ))}
    </VStack>
  ),
};

export const Animation: Story = {
  args: {
    variant: 'lifted',
    indicator: true,
  },
};
