/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes } from 'react';

import { css } from '@emotion/react';

import { centerContent } from '../../css';
import { COLOR_SET } from '../../foundation';

import { useTabs } from '.';

interface TabTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabTrigger = ({ children, ...props }: TabTriggerProps) => {
  const { getTriggerProps } = useTabs();

  const triggerProps = getTriggerProps(props);

  return <button {...triggerProps}>{children}</button>;
};

export default TabTrigger;

export const base = css`
  color: ${COLOR_SET.gray['800']};
  border-style: solid;
  position: relative;
  grid-row-start: 1;
  text-align: center;
  font-weight: 500;
  ${centerContent('inline')};

  cursor: pointer;
`;
