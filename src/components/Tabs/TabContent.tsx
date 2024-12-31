/** @jsxImportSource @emotion/react */

import { HTMLAttributes } from 'react';

import { useTabs } from '.';

interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabContent = ({ children, ...props }: TabContentProps) => {
  const { getContentProps } = useTabs();
  const contentProps = getContentProps(props);

  return <div {...contentProps}>{children}</div>;
};

export default TabContent;
