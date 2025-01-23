import { createContext, useCallback, useContext, useMemo } from 'react';

import { css, SerializedStyles } from '@emotion/react';

import { getSizesAndFontSize } from '../../css';
import { PropsMerger } from '../../utils';

import { variantStyle, base, indicatorStyle } from './styles';

import type { IndicatorProps, TabContextProps } from './types';

export const TabContext = createContext<TabContextProps | null>(null);

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
