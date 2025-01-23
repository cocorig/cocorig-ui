/** @jsxImportSource @emotion/react */

import { useTabs } from './useTabs';

import type { TabContentProps } from './types';

export const TabContent = ({ children, ...props }: TabContentProps) => {
  const { getContentProps } = useTabs();
  const contentProps = getContentProps(props);

  return <div {...contentProps}>{children}</div>;
};
