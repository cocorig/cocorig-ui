import { HTMLAttributes, ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLOR_SET, Heading, HeadingProps } from '../../foundation';

interface MenuGroupProps extends HTMLAttributes<HTMLUListElement> {
  dividerColor?: string;
}

type MenuTitleProps = {
  title: string;
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
