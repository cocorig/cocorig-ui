/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useTabs } from '.';

export type IndicatorProps = {
  width: number;
  height: number;
  left: number;
};
export const Indicator = ({ width, height, left }: IndicatorProps) => {
  const { getIndicatorProps } = useTabs();

  const indicatorProps = getIndicatorProps({
    width,
    height,
    left,
  });
  console.log(indicatorProps);
  return <div {...indicatorProps} />;
};

export const indicatorStyle = ({ width, height, left }: IndicatorProps) => css`
  --transition-property: left, right, top, bottom, width, height;
  --left: ${left}px;
  --width: ${width}px;
  --height: ${height}px;
  position: absolute;
  will-change: var(--transition-property);
  transition-property: var(--transition-property);
  transition-duration: 0.2s;
  transition-timing-function: var(--transition-timing-function);

  left: var(--left);
  width: var(--width);
  height: var(--height);
  z-index: -1;

  &:before {
    background-position: ${left === 0 ? 'top right' : 'top left, top right'};
    background-image: radial-gradient(var(--radius-${left === 0 ? 'end' : 'start'})), radial-gradient(var(--radius-end));
  }
`;
