import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';
import { BORDER_RADIUS_SET, COLOR_PALLETTE } from '../../foundation';
import { TableVariantProps } from '../../styled-system';

interface TableContainerProps extends HTMLAttributes<HTMLDivElement>, Pick<TableVariantProps, 'colorScheme'> {
  height: number | string;
}
export const TableContainer = ({ children, ...props }: TableContainerProps) => {
  return (
    <StyledContainer tabIndex={0} {...props}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<TableContainerProps>`
  border-width: 1px;
  border-radius: ${BORDER_RADIUS_SET.default};
  border-color: ${({ colorScheme = 'gray' }) => COLOR_PALLETTE.subtle[colorScheme]};
  height: ${({ height }) => toSizeUnit(height)};
  display: block;
  white-space: nowrap;
  overflow: auto;
  max-width: 100%;

  & table {
    overflow: auto;
  }
  & thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;
