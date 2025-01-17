import { LiHTMLAttributes, ReactElement } from 'react';

import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { COLOR_SET } from '../../foundation';
import { Icon } from '../Icon';

import { useMenuList } from './useMenuList';

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  value: string;
  itemIndex: number;
}

type MenuItemStyle = {
  isSelected?: boolean;
  selectCSS?: SerializedStyles | SerializedStyles[];
  hasSelectIcon?: boolean;
};

export const MenuItem = ({ children, itemIndex, ...props }: MenuItemProps) => {
  const { getMenuItemProps } = useMenuList(itemIndex);

  const menuItemProps = getMenuItemProps(props);

  const { selected, selectIcon, ...itemProps } = menuItemProps as {
    selected: boolean;
    selectIcon: ReactElement;
  };
  const hasSelectIcon = !!selectIcon;

  return (
    <Item isSelected={selected} selectCSS={menuItemProps.css} {...itemProps}>
      <ItemButton hasSelectIcon={hasSelectIcon} isSelected={selected} tabIndex={-1}>
        {selected && hasSelectIcon && <Icon style={{ width: '1em', height: '1em' }}>{selectIcon}</Icon>}

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

  ${({ isSelected, selectCSS }) => isSelected && selectCSS}
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
  padding-inline-start: ${({ hasSelectIcon, isSelected }) =>
    hasSelectIcon
      ? isSelected
        ? 'var(--menu-px)'
        : 'calc(var(--menu-px) + 14px +  var(--menu-gap))'
      : 'var(--menu-px)'};

  padding-inline-end: var(--menu-px);
  text-align: start;
  text-decoration: none;
  cursor: pointer;
`;
