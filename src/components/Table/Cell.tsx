import { TdHTMLAttributes } from 'react';

import { CommonStyle, CommonStyled } from './ColumnHeader';

interface CellProps extends TdHTMLAttributes<HTMLTableCellElement>, CommonStyle {}
export const Cell = ({ children, ...props }: CellProps) => {
  return <StyledCell {...props}>{children}</StyledCell>;
};

const StyledCell = CommonStyled.withComponent('td');
