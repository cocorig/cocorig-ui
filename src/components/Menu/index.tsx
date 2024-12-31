import React, { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';
import { BORDER_RADIUS_SET, TEXT_SIZE_SET } from '../../foundation';
import { SystemProps } from '../../styled-system';

import { MenuProvider } from './MenuContext';
import { MenuGroup, MenuTitle } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuTrigger } from './MenuTrigger';

type MenuProps = HTMLAttributes<HTMLDivElement> & SystemProps<'menu'>;

export const Menu = ({ children, ...props }: MenuProps) => {
  return (
    <MenuProvider>
      <MenuContainer {...props}>{children}</MenuContainer>
    </MenuProvider>
  );
};

const MenuContainer = styled.div<MenuProps>`
  --menu-bg: #ffff;
  --menu-color: #09090b;
  --menu-radius: ${BORDER_RADIUS_SET.default};
  --menu-px: 0.5rem;
  --menu-py: 0.375rem;
  --menu-gap: 0.5rem;

  ${({ size = 'sm' }) => `
    --menu-fontSize: ${toSizeUnit(TEXT_SIZE_SET[size]?.fontSize)};
    --menu-lineHeight: ${toSizeUnit(TEXT_SIZE_SET[size]?.lineHeight)};
  `}

  position: relative;
  display: inline-block;
`;

Menu.Group = MenuGroup;
Menu.Title = MenuTitle;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Trigger = MenuTrigger;
