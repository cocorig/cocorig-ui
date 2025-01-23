import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { BORDER_RADIUS_SET, BordersToken, COLOR_PALLETTE } from '../../foundation';
import { TableVariantProps } from '../../styled-system';
import { toSizeUnit } from '../../utils';

export interface Container extends HTMLAttributes<HTMLDivElement>, Pick<TableVariantProps, 'colorScheme'> {
  height: number | string;
  borderRadius?: BordersToken;
  borderWidth?: string | number;
}
export const Container = ({ children, ...props }: Container) => {
  return (
    <StyledContainer tabIndex={0} {...props}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<Container>`
  --border-color: ${({ colorScheme = 'gray' }) => COLOR_PALLETTE.subtle[colorScheme]};

  height: ${({ height }) => toSizeUnit(height)};
  display: block;
  white-space: nowrap;
  overflow: auto;
  max-width: 100%;
  border-style: solid;
  border-color: var(--border-color);
  border-width: ${({ borderWidth }) => (borderWidth ? toSizeUnit(borderWidth) : '0px')};
  border-radius: ${({ borderRadius = 'default' }) => BORDER_RADIUS_SET[borderRadius]};

  & table {
    overflow: auto;
  }
  & thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;
