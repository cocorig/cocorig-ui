import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { BORDER_RADIUS_SET, BordersToken, COLOR_PALLETTE } from '../../foundation';
import { TableVariantProps } from '../../styled-system';
import { toSizeUnit } from '../../utils';

export interface Container extends HTMLAttributes<HTMLDivElement>, Pick<TableVariantProps, 'colorScheme'> {
  /** 테이블의 `높이`를 설정합니다. number나 string 형태로 지정할 수 있습니다. */
  height: number | string;
  /** 테이블의 `테두리 반지름`을 설정합니다. 기본값은 `default`입니다. */
  borderRadius?: BordersToken;
  /** 테이블의 `테두리 두께`를 설정합니다. */
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
    box-shadow: none;
    border-radius: 0;
  }
  & thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;
