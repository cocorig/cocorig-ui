/** @jsxImportSource @emotion/react */

import { useTabs } from './useTabs';

import type { IndicatorProps } from './types';

export const Indicator = ({ width, height, left }: IndicatorProps) => {
  const { getIndicatorProps } = useTabs();

  const indicatorProps = getIndicatorProps({
    width,
    height,
    left,
  });
  return <div {...indicatorProps} />;
};
