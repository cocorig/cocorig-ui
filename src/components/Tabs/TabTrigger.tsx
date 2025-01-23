/** @jsxImportSource @emotion/react */

import { useTabs } from './useTabs';

import type { TabTriggerProps } from './types';

export const TabTrigger = ({ children, ...props }: TabTriggerProps) => {
  const { getTriggerProps } = useTabs();

  const triggerProps = getTriggerProps(props);

  return <button {...triggerProps}>{children}</button>;
};
