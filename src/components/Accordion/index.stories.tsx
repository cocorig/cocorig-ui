import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { colorPaletteOptions, Heading } from '../../foundation';
import { getPropsType } from '../../storybook-props';
import { VStack } from '../Stack';

import { runTest, runTestWithArgs } from './storyTest';

import { Accordion } from '.';

const items = [
  { question: '회원 가입은 어떻게 하나요?', answer: '회원 가입은 홈페이지 상단의 "가입하기" 버튼을 통해 가능합니다.' },
  {
    question: '비밀번호를 잊어버렸어요.',
    answer: '로그인 페이지에서 "비밀번호 찾기"를 클릭하여 이메일을 통해 비밀번호를 재설정할 수 있습니다.',
  },
  {
    question: '배송 추적은 어떻게 하나요?',
    answer: '주문 확인 페이지에서 배송 추적 번호를 확인할 수 있습니다.',
  },
  {
    question: '상품 교환은 가능한가요?',
    answer: '상품 수령 후 7일 이내에 교환 요청을 하실 수 있습니다.',
  },
];

const renderAccordionItems = (items: { question: string; answer: string }[], icon?: React.ReactElement) => {
  return items.map((item, index) => (
    <Accordion.Item key={index} itemValue={index}>
      <Accordion.Header icon={icon}>{item.question}</Accordion.Header>
      <Accordion.Body>{item.answer}</Accordion.Body>
    </Accordion.Item>
  ));
};
const generateAccordionMarkup = () => {
  return items
    .map(
      (item, index) => `
      <Accordion.Item itemValue={${index}}>
        <Accordion.Header>${item.question}</Accordion.Header>
        <Accordion.Body>${item.answer}</Accordion.Body>
      </Accordion.Item>`,
    )
    .join('\n');
};

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Item': Accordion.Item,
    'Accordion.Header': Accordion.Header,
    'Accordion.Body': Accordion.Body,
    'Accordion.Icon': Accordion.Icon,
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  render: (args) => <Accordion {...args}>{renderAccordionItems(items)}</Accordion>,
  tags: ['!autodocs'],
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
      description: '기본적으로 열릴 아이템의 고유 식별자 배열을 설정합니다.',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = runTest({
  parameters: {
    docs: {
      source: {
        code: `
import { Accordion } from "cocorig-ui"; \n
const Demo = () => {
  return (
    <Accordion>${generateAccordionMarkup()}    
    </Accordion>
  );
};`,
      },
    },
  },
});

const sizes = ['sm', 'md', 'lg'] as const;

export const Sizes: Story = {
  render: (args) => (
    <VStack gap={1}>
      {sizes.map((size) => (
        <React.Fragment key={size}>
          <Heading weight="bold">{size}</Heading>
          <Accordion size={size} {...args}>
            {renderAccordionItems(items)}
          </Accordion>
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

export const MultipleOpen: Story = runTestWithArgs({
  args: {
    allowMultiple: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Accordion } from "cocorig-ui"; \n
const Demo = () => {
  return (
    <Accordion allowMultiple>${generateAccordionMarkup()}    
    </Accordion>
  );
};`,
      },
    },
  },
});

export const DefaultOpen: Story = runTestWithArgs({
  args: {
    allowMultiple: true,
    defaultId: [1],
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Accordion } from "cocorig-ui"; \n
const Demo = () => {
  return (
    <Accordion defaultId={[1]}>${generateAccordionMarkup()}    
    </Accordion>
  );
};`,
      },
    },
  },
});
export const WithRenderProps: Story = {
  render: () => (
    <Accordion>
      {items.map((item, index) => (
        <Accordion.Item key={index} itemValue={index}>
          {({ isExpanded }) => (
            <>
              <Accordion.Header icon={isExpanded ? <span>-</span> : <span>+</span>}>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Accordion>
  {items.map((item, index) => (
    <Accordion.Item key={index} itemValue={index}>
      {({ isExpanded }) => (
        <>
          <Accordion.Header icon={isExpanded ? <span>-</span> : <span>+</span>}>
            {item.question}
          </Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </>
      )}
    </Accordion.Item>
  ))}
</Accordion>
        `,
      },
    },
  },
};
