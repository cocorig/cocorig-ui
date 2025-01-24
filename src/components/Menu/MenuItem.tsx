import { LiHTMLAttributes, ReactElement } from 'react';

import styled from '@emotion/styled';

import { COLOR_SET } from '../../foundation';
import { Css } from '../../utils';

import { useMenuList } from './useMenuList';

export interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /**
   * menu의 상태를 설정합니다.
   */
  value: string;
  /**
   * 각 menuItem의 고유 식별값을 설정합니다.
   */
  itemIndex: number;
}

type MenuItemStyle = {
  selectIcon?: boolean;
  hasSelectIcon?: boolean;
};

export const MenuItem = ({ children, itemIndex, ...props }: MenuItemProps) => {
  const { getMenuItemProps } = useMenuList(itemIndex);
  const menuItemProps = getMenuItemProps(props);
  const { selected, selectIcon, css, ...itemProps } = menuItemProps as {
    selected: boolean;
    selectIcon: ReactElement;
    css: Css;
  };

  const hasSelectIcon = selected && !!selectIcon;

  return (
    <Item {...itemProps}>
      <ItemButton css={css} hasSelectIcon={hasSelectIcon} selectIcon={!!selectIcon}>
        {hasSelectIcon && selectIcon}
        {children}
      </ItemButton>
    </Item>
  );
};

const Item = styled.li<MenuItemStyle>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  outline: 0;
  font-size: var(--menu-fontSize);
  line-height: var(--menu-lineHeight);
  border-radius: var(--menu-radius);
  &:focus,
  &:focus-visible,
  :hover {
    background-color: ${COLOR_SET.gray[100]};
  }
`;

const ItemButton = styled.button<MenuItemStyle>`
  display: grid;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;

  gap: var(--menu-gap);
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  -webkit-user-select: none;
  user-select: none;

  padding-block: var(--menu-py);
  padding-inline-end: var(--menu-px);
  padding-inline-start: ${({ selectIcon, hasSelectIcon }) =>
    hasSelectIcon
      ? 'var(--menu-px)'
      : selectIcon
        ? 'calc(var(--menu-px) + 14px +  var(--menu-gap))'
        : 'var(--menu-px)'};

  text-align: start;
  text-decoration: none;
  cursor: pointer;
`;
