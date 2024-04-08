import { css, SerializedStyles } from '@emotion/react';

const STANDARD = 4;

interface Spacing {
  [key: string]: (value: number) => SerializedStyles;
}

export const spacing: Spacing = {
  mt: (value) => css`
    margin-top: ${value * STANDARD}px;
  `,
  mb: (value) => css`
    margin-bottom: ${value * STANDARD}px;
  `,
  ml: (value) => css`
    margin-left: ${value * STANDARD}px;
  `,
  mr: (value) => css`
    margin-right: ${value * STANDARD}px;
  `,
  mx: (value) => css`
    margin-left: ${value * STANDARD}px;
    margin-right: ${value * STANDARD}px;
  `,
  my: (value) => css`
    margin-top: ${value * STANDARD}px;
    margin-bottom: ${value * STANDARD}px;
  `,
  m: (value) => css`
    margin-top: ${value * STANDARD}px;
    margin-bottom: ${value * STANDARD}px;
    margin-left: ${value * STANDARD}px;
    margin-right: ${value * STANDARD}px;
  `,
  pt: (value) => css`
    padding-top: ${value * STANDARD}px;
  `,
  pb: (value) => css`
    padding-bottom: ${value * STANDARD}px;
  `,
  pl: (value) => css`
    padding-left: ${value * STANDARD}px;
  `,
  pr: (value) => css`
    padding-right: ${value * STANDARD}px;
  `,
  px: (value) => css`
    padding-left: ${value * STANDARD}px;
    padding-right: ${value * STANDARD}px;
  `,
  py: (value) => css`
    padding-top: ${value * STANDARD}px;
    padding-bottom: ${value * STANDARD}px;
  `,
  p: (value) => css`
    padding-top: ${value * STANDARD}px;
    padding-bottom: ${value * STANDARD}px;
    padding-left: ${value * STANDARD}px;
    padding-right: ${value * STANDARD}px;
  `,
};
