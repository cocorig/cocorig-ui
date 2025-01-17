import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { COLOR_SET } from '../../foundation';

interface RowProps extends HTMLAttributes<HTMLTableRowElement> {}
export const Row = ({ children, ...props }: RowProps) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

const StyledRow = styled.tr`
  color: ${COLOR_SET.gray['900']};
  thead &,
  tbody &:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
`;
