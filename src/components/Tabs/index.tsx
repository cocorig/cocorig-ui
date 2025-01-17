import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getSizesAndFontSize } from '../../css';
import { SystemProps } from '../../styled-system';
import { PropsMerger } from '../../utils';

import { Indicator, IndicatorProps, indicatorStyle } from './Indicator';
import { variantStyle } from './styles';
import TabContent from './TabContent';
import TabList from './TabList';
import TabTrigger, { base } from './TabTrigger';

type TabProps = {
  children?: ReactNode;
  /**
   * 초기 선택 값 (`Uncontrolled` 상태로 동작할 때 사용합니다).
   */
  defaultValue?: string;
  /**
   * 외부에서 Tab의 선택 값을 관리합니다.
   * `Controlled` 상태에서는 반드시 `onControlledChange` 콜백도 함께 전달해야 합니다.
   */
  controlledValue?: string | null;
  /**
   * `Controlled` 상태에서 선택 값이 변경될 때 호출되는 콜백 함수.
   */
  onControlledChange?: (value: string) => void;
  /**
   * `Indicator`를 애니메이션으로 표시할지 결정합니다.
   */
  isIndicatorAnimated?: boolean;
} & SystemProps<'tab'>;

type TabContextProps = {
  value: string | null;
  onValueChange: (value: string) => void;
  isIndicatorAnimated?: boolean;
} & SystemProps<'tab'>;

const TabContext = createContext<TabContextProps | null>(null);

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

export const useTabs = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTabContext must be used within a Tab');
  }

  const { isIndicatorAnimated, value, onValueChange, variant, size = 'md', colorScheme } = context;

  const { list, trigger, content } = useMemo(() => variantStyle(variant, colorScheme), [variant, colorScheme]);

  const getListProps = useCallback<PropsMerger>(
    (props = {}) => ({
      css: list,
      role: 'tablist',
      ...props,
    }),
    [list],
  );
  const getTriggerProps = useCallback<PropsMerger>(
    (props = {}) => ({
      'aria-selected': value === props.value,
      'data-value': props.value,
      role: 'tab',
      css: isIndicatorAnimated ? [getSizesAndFontSize(size), base] : [getSizesAndFontSize(size), base, trigger],
      ...props,
    }),
    [isIndicatorAnimated, size, trigger, value],
  );
  const getContentProps = useCallback<PropsMerger>(
    (props = {}) => ({
      'data-state': value === props.value ? 'active' : 'inactive',
      hidden: value !== props.value,
      role: 'tabpanel',
      tabIndex: 0,
      css: [
        content,
        props.className as SerializedStyles,
        css`
          &:focus-visible {
            outline: 2px solid currentColor;
          }
        `,
      ],
      ...props,
    }),
    [content, value],
  );

  const getIndicatorProps = useCallback(
    ({ width, height, left }: IndicatorProps) => ({
      'aria-selected': true,
      'data-part': 'indicator',
      css: [getSizesAndFontSize(size), base, trigger, indicatorStyle({ width, height, left })],
    }),
    [size, trigger],
  );

  return {
    size,
    value,
    variant,
    isIndicatorAnimated,
    onValueChange,
    getListProps,
    getTriggerProps,
    getContentProps,
    getIndicatorProps,
  };
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
