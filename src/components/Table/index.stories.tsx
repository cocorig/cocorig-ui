import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { colorPaletteOptions } from '../../foundation';
import { getDefaultValue } from '../../storybook-props';

import { Table } from '.';

const meta = {
  title: 'Components/Table',
  component: Table,
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

const TableBody = ({ data }: { data: Array<{ id: number; name: string; department: string; salary: number }> }) => (
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

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  ),
};

export const PinnedHeader: Story = {
  render: () => (
    <Table.Container height="150px" borderWidth={'1px'}>
      <Table>
        <TableHeader />
        <TableBody data={data} />
      </Table>
    </Table.Container>
  ),
};
