import { TdHTMLAttributes } from 'react';

import { CommonStyle, CommonStyled } from './ColumnHeader';

export type CellProps = CommonStyle & TdHTMLAttributes<HTMLTableCellElement>;

export const Cell = ({ children, ...props }: CellProps) => {
  return <StyledCell {...props}>{children}</StyledCell>;
};

const StyledCell = CommonStyled.withComponent('td');
