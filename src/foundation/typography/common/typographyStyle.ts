import { css } from '@emotion/react';
import { spacing, SpacingProps } from '../../spacing';

export type TypographyProps = SpacingProps & {
  color?: string;
  size?: 'xxxl' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | number;
  textAlign?: 'center' | 'left' | 'right' | 'inherit' | 'justify';
  weight?: 'extraBold' | 'bold' | 'regular';
  letterSpacing?: string | number;
  lineHeight?: string | number;
  textDecoration?: string | 'line-through' | 'underline';
};

export const SizeStyles = (size: TypographyProps['size']): string => {
  const sizeMap: { [key: string]: string } = {
    xxxl: '1.5rem',
    xxl: '1.375rem',
    xl: '1.25rem',
    l: '1.125rem',
    m: '1rem',
    s: '0.875rem',
    xs: '0.75rem',
    xxs: '0.6875rem',
  } as const;

  if (typeof size === 'number') {
    return `${size}px`;
  } else {
    return sizeMap[size as string] || sizeMap.m;
  }
};

export const WeightStyles = (weight: TypographyProps['weight']): number => {
  const weightMap: { [key: string]: number } = {
    extraBold: 700,
    bold: 500,
    regular: 400,
  } as const;
  return weightMap[weight as string] || weightMap.regular;
};

export const SpacingStyles = (
  spacingProps: Partial<SpacingProps>,
): ReturnType<typeof css> => {
  const styles = Object.entries(spacingProps)
    .filter(([prop, value]) => typeof value === 'number' && spacing[prop])
    .map(([prop, value]) => spacing[prop](value as number));
  return css`
    ${styles}
  `;
};

export const getTypographyStyles = ({
  color,
  size,
  textAlign = 'left',
  weight,
  letterSpacing,
  lineHeight,
  textDecoration,
  ...spacingProps
}: TypographyProps): ReturnType<typeof css> => {
  const fontSize = SizeStyles(size);
  const fontWeight = WeightStyles(weight);
  return css`
    color: ${color};
    font-size: ${fontSize};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
    text-decoration: ${textDecoration};
    ${SpacingStyles(spacingProps)};
  `;
};
