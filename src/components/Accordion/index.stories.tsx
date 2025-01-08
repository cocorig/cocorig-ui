import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { colorPaletteOptions, Heading } from '../../foundation';
import { getPropsType } from '../../storybook-props';
import { VStack } from '../Stack';

import { runTest, runTestWithArgs } from './storyTest';

import { Accordion } from '.';

const items = [
  { title: '1일차', text: '공항에 도착 후 호텔 체크인' },
  { title: '2일차', text: '지역 시장 탐방 후 현지 음식 시도' },
  { title: '3일차', text: '유명한 관광지 방문 후 시티 투어' },
  { title: '4일차', text: '해변에서 휴식 후 석양 감상' },
];

const renderAccordionItems = (items: { title: string; text: string }[]) => {
  return items.map((item, index) => (
    <Accordion.Item key={index} itemValue={index}>
      <Accordion.Header icon={<Accordion.Icon />}>{item.title}</Accordion.Header>
      <Accordion.Body>{item.text}</Accordion.Body>
    </Accordion.Item>
  ));
};

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {},

  render: (args) => <Accordion {...args}>{renderAccordionItems(items)}</Accordion>,
  args: {
    size: 'md',
    variant: 'underlined',
    colorScheme: 'gray',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    variant: {
      options: ['filled', 'underlined'],
      control: {
        type: 'radio',
      },
    },
    colorScheme: {
      options: colorPaletteOptions,
      control: {
        type: 'select',
      },
    },

    allowMultiple: {
      control: {
        type: 'boolean',
      },
      table: {
        ...getPropsType('boolean'),
      },
      description: '여러 항목을 동시에 열 수 있는지 여부를 설정합니다.',
    },
    defaultId: {
      table: {
        ...getPropsType('number[]'),
      },
      description: '기본적으로 열릴 아이템의 고유 ID 배열을 설정합니다.',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = runTest({});

const sizes = ['sm', 'md', 'lg'] as const;

export const Sizes: Story = {
  render: () => (
    <VStack gap={1}>
      {sizes.map((size) => (
        <React.Fragment key={size}>
          <Heading weight="bold">{size}</Heading>
          <Accordion size={size}>{renderAccordionItems(items)}</Accordion>
        </React.Fragment>
      ))}
    </VStack>
  ),
};
export const FilledVariant: Story = {
  args: {
    variant: 'filled',
  },
};

export const MultipleOpenDefault: Story = runTestWithArgs({
  args: {
    allowMultiple: true,
    defaultId: [1],
  },
});
