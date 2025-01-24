import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { VStack } from '../Stack';

import { runTest } from './storyTest';

import { Tab } from '.';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  subcomponents: {
    'Tab.List': Tab.List,
    'Tab.Content': Tab.Content,
    'Tab.Trigger': Tab.Trigger,
  },
  args: {
    size: 'md',
    variant: 'underlined',
    colorScheme: 'gray',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Tab defaultValue="members" {...args}>
        {TabList()}
        {TabContent()}
      </Tab>
    </div>
  ),
} satisfies Meta<typeof Tab>;

export default meta;
export type Story = StoryObj<typeof meta>;

const defaultCode = `
      <Tab.List>
        <Tab.Trigger value="members">팀원</Tab.Trigger>
        <Tab.Trigger value="projects">프로젝트</Tab.Trigger>
        <Tab.Trigger value="tasks">작업</Tab.Trigger>
      </Tab.List>
      <Tab.Content value="members">팀원 관리</Tab.Content>
      <Tab.Content value="projects">프로젝트 관리</Tab.Content>
      <Tab.Content value="tasks">작업 관리</Tab.Content>
`;
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

export const Default: Story = runTest({
  parameters: {
    docs: {
      source: {
        code: `
import { Tab } from "cocorig-ui"; \n
const Demo = () => {
  return (
    <Tab defaultValue="members">${defaultCode}    </Tab>
  );
};`,
      },
    },
  },
});

export const Variants: Story = {
  render: (args) => (
    <VStack gap={3}>
      {variants.map((variant) => (
        <Tab defaultValue="members" variant={variant} key={variant}>
          {TabList()}
          {TabContent()}
        </Tab>
      ))}
    </VStack>
  ),

  parameters: {
    docs: {
      source: {
        code: `
import { Tab } from "cocorig-ui";

const Demo = () => {

return (
  <>
    <Tab defaultValue="members" variant="lifted">${defaultCode}   </Tab>

    <Tab defaultValue="members" variant="boxed">${defaultCode}    </Tab>

    <Tab defaultValue="members" variant="underlined">${defaultCode}   </Tab>
  </>
  );
};
`,
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('members');
    return (
      <Tab controlledValue={value} onControlledChange={(value) => setValue(value)}>
        {TabList()}
        {TabContent()}
      </Tab>
    );
  },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `
import { Tab } from "cocorig-ui";
import { useState } from "react";

const Demo = () => {
  const [value, setValue] = useState<string | null>("members");
  return (
    <Tab
      controlledValue={value}
      onControlledChange={(value) => setValue(value)}
    >${defaultCode}    </Tab>
  );
}; `,
      },
    },
  },
};
/**
 * Tab `Indicator`에 애니메이션을 설정할 수 있습니다.
 *
 *`defaultValue` 또는 `controlledValue` 중 하나는 반드시 설정해야 초기 렌더링 때 탭이 올바르게 표시됩니다.

 */
export const Animation: Story = {
  args: {
    variant: 'boxed',
    isIndicatorAnimated: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Tab } from "cocorig-ui"; \n
const Demo = () => {
  return (
    <Tab defaultValue="members" isIndicatorAnimated variant="boxed">${defaultCode}    </Tab>
  );
};`,
      },
    },
  },
};
