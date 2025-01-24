import { HTMLAttributes, ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLOR_SET, Heading, HeadingProps } from '../../foundation';

export interface MenuGroupProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * menu 그룹 항목들 사이에 구분선을 추가할 때, 구분선의 색상을 설정합니다.
   */
  dividerColor?: string;
}

export type MenuTitleProps = {
  /**
   * menu 그룹에 속한 항목들을 구분하는 제목을 설정합니다.
   */
  title: string;
  /**
   * menu title 앞에 표시할 아이콘을 설정할 수 있습니다.
   */
  icon?: ReactElement;
} & HeadingProps;

export const MenuGroup = ({ children, ...props }: MenuGroupProps) => {
  return <StyledMenuGroup {...props}>{children}</StyledMenuGroup>;
};
const StyledMenuGroup = styled.ul<MenuGroupProps>`
  position: relative;
  white-space: nowrap;
  margin-inline-start: calc(var(--menu-px) + 2px);
  padding-inline-start: var(--menu-px);

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    top: var(--menu-py);
    bottom: var(--menu-py);
    background-color: ${({ dividerColor }) => dividerColor || COLOR_SET.gray['400']};
    inset-inline-start: 0px;
  }
`;
export const MenuTitle = ({ icon, title, ...props }: MenuTitleProps) => {
  return (
    <StyledMenuTitle weight="extraBold" color={props.color || COLOR_SET.gray['600']} {...props}>
      {icon && icon}
      {title}
    </StyledMenuTitle>
  );
};

const StyledMenuTitle = styled(Heading)<HeadingProps>`
  display: flex;
  align-items: center;
  gap: var(--menu-gap);

  ${({ px, py }) => css`
    font-size: var(--menu-fontSize);
    line-height: var(--menu-lineHeight);
    padding: ${py || 'var(--menu-py)'} ${px || 'var(--menu-px)'};
  `};
`;
