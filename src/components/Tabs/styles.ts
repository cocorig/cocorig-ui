import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TabListStyles } from './type';
import {
  blue100,
  blue500,
  gray100,
  gray500,
  gray800,
  white,
} from '../../foundation/color';

export const TabListContainer = styled.div<{
  fullWidth?: boolean;
  styles: TabListStyles;
}>`
  display: grid;
  justify-self: start;
  grid-row-start: 1;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  grid-row-start: 1;
  ${({ styles }) => css`
    background-color: ${styles.tabList.backgroundColor};
    border-radius: ${styles.tabList.borderRadius}px;
    box-shadow: ${styles.tabList.boxShadow};

    &::before {
      content: '';
      z-index: 1;
      position: absolute;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      background-color: ${styles.tab.activeBackgroundColor};
      border-radius: ${styles.tab.borderRadius}px;
      box-shadow: ${styles.tab.boxShadow};
    }
  `};
`;

export const Tab = styled.button<{ selected: boolean; styles: TabListStyles }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.875rem;
  height: 2rem;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  grid-row-start: 1;
  ${({ selected, styles }) => css`
    color: ${selected ? styles.tab.activeColor : styles.tab.color};
    border-width: 2px;
    border-style: solid;
    border-bottom-color: ${selected
      ? styles.tab.BorderBottomColor
      : styles.tab.activeBorderBottomColor};
    border-inline-start-color: ${selected
      ? styles.tab.activeBorderBottomColor
      : styles.tab.BorderBottomColor};
    border-inline-end-color: ${selected
      ? styles.tab.activeBorderBottomColor
      : styles.tab.BorderBottomColor};
    border-top-color: ${selected
      ? styles.tab.activeBorderBottomColor
      : styles.tab.BorderBottomColor};
    background-color: ${styles.tab.backgroundColor};
    border-start-start-radius: ${styles.tab.borderRadius}rem;
    border-start-end-radius: ${styles.tab.borderRadius}rem;
  `};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:disabled {
    color: ${gray100};
    cursor: not-allowed;
  }
`;

export const DEFAULT_STYLES_SET: {
  [variant in 'bordered' | 'rounded']: TabListStyles;
} = {
  bordered: {
    tabList: {
      backgroundColor: white,
    },
    tab: {
      color: gray800,
      activeColor: blue500,
      backgroundColor: 'transparent',
      activeBackgroundColor: white,
      BorderBottomColor: 'transparent',
      activeBorderBottomColor: blue500,
      borderRadius: 0.4,
    },
  },
  rounded: {
    tabList: {
      backgroundColor: 'transparent',
      borderRadius: 4,
    },
    tab: {
      color: gray800,
      activeColor: blue500,
      backgroundColor: 'transparent',
      activeBackgroundColor: white,
      BorderBottomColor: 'transparent',
      activeBorderBottomColor: blue500,
      borderRadius: 0.4,
    },
  },
};
