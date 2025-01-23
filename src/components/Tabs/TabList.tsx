/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';

import { Indicator } from './Indicator';
import { useTabs } from './useTabs';

import type { TabListProps } from './types';

type TabStyles = {
  left?: number;
  width?: number;
} & Pick<TabListProps, 'justify'>;

export const TabList = ({ children, ...props }: TabListProps) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    height: 0,
  });
  const { variant, isIndicatorAnimated, value: activeValue, onValueChange, getListProps } = useTabs();

  const { css } = getListProps();

  const tabListRef = useRef<HTMLDivElement>(null);
  const tabElements = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    tabElements.current = Array.from(tabListRef.current!.children) as HTMLButtonElement[];
  }, []);

  const findTab = (condition: (tab: HTMLButtonElement) => boolean) => {
    return tabElements.current.find(condition);
  };

  useEffect(() => {
    const targetTab = findTab((tab) => tab.dataset.value === activeValue);
    if (targetTab) {
      const { offsetWidth, offsetLeft, offsetHeight } = targetTab;
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft,
        height: offsetHeight,
      });
    }
  }, [activeValue, variant]);

  const handleSelectTab = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const targetTab = findTab((tab) => tab.contains(target));

    if (targetTab) {
      const value = targetTab.dataset.value as string;
      if (activeValue !== value) {
        onValueChange(value);
      }
    }
  };

  return (
    <div role="tablist" ref={tabListRef} css={[base, css]} onClick={handleSelectTab} {...props}>
      {children}

      {isIndicatorAnimated && <Indicator {...indicatorStyle} />}
    </div>
  );
};

const base = ({ justify }: TabStyles) => css`
  display: grid;
  position: relative;
  justify-self: ${justify};
  isolation: isolate;
`;
