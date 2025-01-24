import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { colorPaletteOptions } from '../../foundation';
import { getDefaultValue } from '../../storybook-props';

import { Table } from '.';

const meta = {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    'Table.Container': Table.Container,
    'Table.Head': Table.Head,
    'Table.ColumnHeader': Table.ColumnHeader,
    'Table.Body': Table.Body,
    'Table.Cell': Table.Cell,
    'Table.Row': Table.Row,
  },
  args: {
    variant: 'outline',
    size: 'sm',
    colorScheme: 'gray',
  },
  argTypes: {
    variant: {
      options: ['line', 'outline'],
      ...getDefaultValue('outline'),
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      ...getDefaultValue('sm'),
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
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { id: 1, name: 'John Doe', department: 'Engineering', salary: 85000 },
  { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 72000 },
  { id: 3, name: 'Alice Johnson', department: 'HR', salary: 65000 },
  { id: 4, name: 'Bob Brown', department: 'Engineering', salary: 90000 },
  { id: 5, name: 'Charlie Davis', department: 'Sales', salary: 75000 },
];

const TableHeader = () => (
  <Table.Head>
    <Table.Row>
      <Table.ColumnHeader>Name</Table.ColumnHeader>
      <Table.ColumnHeader>Department</Table.ColumnHeader>
      <Table.ColumnHeader textAlign="end">Salary</Table.ColumnHeader>
    </Table.Row>
  </Table.Head>
);

const TableBody = (data: Array<{ id: number; name: string; department: string; salary: number }>) => (
  <Table.Body>
    {data.map((item) => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.department}</Table.Cell>
        <Table.Cell textAlign="end">{item.salary}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
);

const defaultCode = `
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Department</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Salary</Table.ColumnHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.department}</Table.Cell>
              <Table.Cell textAlign="end">{item.salary}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
`;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      {TableHeader()}
      {TableBody(data)}
    </Table>
  ),
  parameters: {
    docs: {
      source: {
        code: `
import { Table } from "cocorig-ui";

const Demo = () => {
  return (
  ${defaultCode}
  );
};
`,
      },
    },
  },
};

/**
 * 테이블의 헤더를 고정시킬 수 있습니다.
 *
 * `Table`을 `Table.Container`로 감싸면, `Table.Container`에 적용된 `overflow: auto` 속성 때문에 `Table`의 기본 `border` 스타일이 적용되지 않습니다.
 * 이로 인해 기존 `box-shadow`와 `border-radius` 스타일이 자동으로 제거됩니다.
 *
 * 따라서 테두리 스타일을 유지하려면, `Table.Container`에 `borderRadius`와 `borderWidth` 값을 설정하여 조정할 수 있습니다.
 */
export const PinnedHeader: Story = {
  render: (args) => (
    <Table.Container height="150px" borderWidth={'1px'}>
      <Table>
        {TableHeader()}
        {TableBody(data)}
      </Table>
    </Table.Container>
  ),

  parameters: {
    docs: {
      source: {
        code: `
import { Table } from "cocorig-ui";

const Demo = () => {
  return (
    <Table.Container height={"150px"} borderWidth={"1px"}>${defaultCode}    </Table.Container>
  );
};
`,
      },
    },
  },
};
