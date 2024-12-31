import React, { TableHTMLAttributes, useMemo } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';
import { BORDER_RADIUS_SET, ColorStyleReturnType, getColorStyles, textStyle } from '../../foundation';
import { SystemProps } from '../../styled-system';

import { Body } from './Body';
import { Cell } from './Cell';
import { ColumnHeader } from './ColumnHeader';
import { Head } from './Head';
import { Row } from './Row';
import { SIZE_SET } from './styles';
import { TableContainer } from './TableContainer';

interface TableProps extends TableHTMLAttributes<HTMLTableElement>, SystemProps<'table'> {}
type TableStyle = ColorStyleReturnType & Pick<TableProps, 'size'>;
export const Table = ({ children, colorScheme, ...props }: TableProps) => {
  const COLOR = useMemo(() => getColorStyles(colorScheme), [colorScheme]);
  return (
    <StyledTable {...COLOR} {...props}>
      {children}
    </StyledTable>
  );
};

const StyledTable = styled.table<TableStyle>`
  width: 100%;
  table-layout: fixed;
  display: table;
  position: relative;
  border-collapse: collapse;
  box-shadow: 0 0 0 1px var(--border-color);
  border-radius: ${BORDER_RADIUS_SET.default};
  font-variant-numeric: lining-nums tabular-nums;
  overflow: hidden;
  ${({ size = 'sm', soft, subtle }) => {
    const { p } = SIZE_SET[size];

    return css`
      --table-padding: ${toSizeUnit(p)};
      --border-color: ${subtle};
      --bg-color: ${soft};
      ${textStyle(size)}
    `;
  }}
`;
Table.Container = TableContainer;
Table.Head = Head;
Table.ColumnHeader = ColumnHeader;
Table.Body = Body;
Table.Cell = Cell;
Table.Row = Row;
