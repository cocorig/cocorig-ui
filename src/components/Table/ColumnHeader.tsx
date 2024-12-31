import { CSSProperties, ThHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';

interface ColumnHeaderProps extends ThHTMLAttributes<HTMLTableCellElement>, CommonStyle {}
export type CommonStyle = {
  textAlign?: CSSProperties['textAlign'];
  width?: string | number;
  minW?: string | number;
  color?: string;
  columnBorder?: boolean;
};
export const ColumnHeader = ({ children, ...props }: ColumnHeaderProps) => {
  return <CommonStyled {...props}>{children}</CommonStyled>;
};

export const CommonStyled = styled.th<CommonStyle>`
  text-align: ${({ textAlign }) => textAlign || 'start'};
  padding-inline: var(--table-padding);
  padding-block: var(--table-padding);
  width: ${({ width }) => (width ? toSizeUnit(width) : 'auto')};
  min-width: ${({ minW }) => (minW ? toSizeUnit(minW) : 'auto')};
  color: ${({ color }) => color};

  ${({ columnBorder }) =>
    columnBorder &&
    `
    &:not(:last-child) {
      border-inline-end-width: 1px;
      border-color: var(--border-color);
    }
  `}
`;
