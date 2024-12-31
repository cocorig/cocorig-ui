import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { WEIGHT_SET } from '../../foundation';

interface HeadProps extends HTMLAttributes<HTMLTableSectionElement> {}
export const Head = ({ children, ...props }: HeadProps) => {
  return <StyledHead {...props}>{children}</StyledHead>;
};

const StyledHead = styled.thead<HeadProps>`
  background-color: var(--bg-color);
  font-weight: ${WEIGHT_SET.extraBold};
  white-space: nowrap;
`;
