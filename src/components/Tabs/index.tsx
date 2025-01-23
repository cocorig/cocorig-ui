import { useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { Indicator } from './Indicator';
import { TabContent } from './TabContent';
import { TabList } from './TabList';
import { TabTrigger } from './TabTrigger';
import { TabContext } from './useTabs';

import type { TabProps } from './types';

export const Tab = ({
  size,
  variant,
  isIndicatorAnimated,
  colorScheme,
  defaultValue,
  controlledValue,
  onControlledChange,
  children,
}: TabProps) => {
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue || null);
  const value = controlledValue ?? internalValue;

  const onValueChange = useCallback(
    (newValue: string) => {
      if (onControlledChange) {
        onControlledChange(newValue);
      } else {
        setInternalValue(newValue);
      }
    },
    [onControlledChange],
  );

  return (
    <TabContext.Provider value={{ size, value, variant, onValueChange, colorScheme, isIndicatorAnimated }}>
      <StyledTabs>{children}</StyledTabs>
    </TabContext.Provider>
  );
};

const StyledTabs = styled.div`
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --list-radius: 0.3rem;
  display: grid;
`;

Tab.List = TabList;
Tab.Content = TabContent;
Tab.Trigger = TabTrigger;
Tab.Indicator = Indicator;
