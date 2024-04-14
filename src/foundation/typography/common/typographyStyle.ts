import { css } from '@emotion/react';
import {
  SpacingPropType,
  SerializedType,
  getSpacingStyles,
} from '../../spacing';
import { SIZE_SET, SizeKeyType } from '../../styles/size';

export interface TypographyProps extends SpacingPropType {
  color?: string;
  size?: SizeKeyType | number;
  textAlign?: 'center' | 'left' | 'right' | 'inherit' | 'justify';
  weight?: WeightProps;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  textDecoration?: string | 'line-through' | 'underline';
}

const WEIGHT_SET = {
  extraBold: 700,
  bold: 500,
  regular: 400,
} as const;

export type WeightProps = keyof typeof WEIGHT_SET;

export const getSizeStyles = (size: SizeKeyType | number): string => {
  return typeof size === 'number' ? `${size}px` : SIZE_SET[size];
};

export const getWeightStyles = (weight: WeightProps): number => {
  return WEIGHT_SET[weight];
};

export const getTypographyStyles = ({
  color,
  size = 'md',
  textAlign = 'left',
  weight = 'regular',
  letterSpacing,
  lineHeight,
  textDecoration,
  ...spacingProps
}: TypographyProps): SerializedType => {
  const fontSize = getSizeStyles(size);
  const fontWeight = getWeightStyles(weight);
  return css`
    color: ${color};
    font-size: ${fontSize};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
    text-decoration: ${textDecoration};
    ${getSpacingStyles(spacingProps)};
  `;
};
