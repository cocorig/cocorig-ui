import React from 'react';

import { css } from '@emotion/react';

import { SpacingProp, marginStyle, paddingStyle } from '../foundation';
import { toSizeUnit } from '../utils';

export type FixedDirectionStackProps = {
  gap?: string | number;
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  wrap?: React.CSSProperties['flexWrap'];
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullSize?: boolean;
  flexGrow?: boolean;
  children?: React.ReactNode;
} & SpacingProp;

export type StackProps = FixedDirectionStackProps & {
  direction: React.CSSProperties['flexDirection'];
};

export const formatFlexAlignment = (
  value: React.CSSProperties['alignItems'] | React.CSSProperties['justifyContent'],
) => {
  if (value === 'end' || value === 'start') {
    return `flex-${value}`;
  }

  return value;
};

export const stack = ({
  gap,
  alignItems,
  justifyContent,
  wrap,
  fullWidth,
  fullHeight,
  fullSize,
  direction,
  flexGrow,
  ...props
}: StackProps) => css`
  display: flex;
  flex-direction: ${direction};
  ${gap &&
  css`
    gap: ${toSizeUnit(gap)};
  `}
  ${alignItems &&
  css`
    align-items: ${formatFlexAlignment(alignItems)};
  `}
  ${justifyContent &&
  css`
    justify-content: ${formatFlexAlignment(justifyContent)};
  `}
  ${wrap &&
  css`
    flex-wrap: ${wrap};
  `}
  ${fullWidth &&
  css`
    width: 100%;
  `}
  ${fullHeight &&
  css`
    height: 100%;
  `}
  ${fullSize &&
  css`
    width: 100%;
    height: 100%;
  `}
    ${flexGrow &&
  css`
    flex: 1;
  `}
   ${marginStyle(props)};
  ${paddingStyle(props)}
`;

export const vStack = (props: FixedDirectionStackProps = {}) => stack({ ...props, direction: 'column' });

export const hStack = (props: FixedDirectionStackProps = {}) => stack({ ...props, direction: 'row' });
