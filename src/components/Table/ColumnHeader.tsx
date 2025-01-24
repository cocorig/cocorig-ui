import { CSSProperties, ThHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../utils';

export type ColumnHeaderProps = CommonStyle & ThHTMLAttributes<HTMLTableCellElement>;

export type CommonStyle = {
  /** 텍스트 정렬 방식을 설정합니다. */
  textAlign?: CSSProperties['textAlign'];
  /** 너비를 설정합니다. */
  width?: string | number;
  /** 최소 너비를 설정합니다. */
  minW?: string | number;
  /** 색상을 설정합니다. */
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
