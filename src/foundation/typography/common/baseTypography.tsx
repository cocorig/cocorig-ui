/** @jsxImportSource @emotion/react */
import React from 'react';
import { getTypographyStyles, TypographyProps } from './typographyStyle';

export interface BaseTypographyProps extends TypographyProps {
  children?: React.ReactNode;
  className?: string;
}

export interface TypographyComponentProps extends BaseTypographyProps {
  tag?: React.ElementType;
}

export const TypographyComponent: React.FC<TypographyComponentProps> = ({
  children,
  className,
  tag: Tag = 'span',
  color,
  size,
  textAlign,
  weight,
  letterSpacing,
  lineHeight,
  textDecoration,
  ...spacingProps
}) => {
  const styles = getTypographyStyles({
    color,
    size,
    textAlign,
    weight,
    letterSpacing,
    lineHeight,
    textDecoration,
    ...spacingProps,
  });

  return (
    <Tag css={styles} className={className}>
      {children}
    </Tag>
  );
};
