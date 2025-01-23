import { CSSProperties, ThHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../utils';

export interface ColumnHeaderProps extends ThHTMLAttributes<HTMLTableCellElement>, CommonStyle {}
export type CommonStyle = {
  textAlign?: CSSProperties['textAlign'];
  width?: string | number;
  minW?: string | number;
  color?: string;
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
`;
