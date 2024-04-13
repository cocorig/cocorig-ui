import { css, SerializedStyles } from '@emotion/react';

const STANDARD = 4;

/**
 * SpacingProps는 컴포넌트의 각 속성에 대한 값들을 나타낸다.
 */
// export type SpacingProps = {
//   [key in keyof Spacing]?: number;
// };
export enum SpacingType {
  MARGIN = 'margin',
  PADDING = 'padding',
}
export interface Spacing {
  [key: string]: (value: number) => SerializedStyles;
}
export type SpacingProps = Record<SpacingType, number>;
export type SpacingStyles = SerializedStyles;

/**
 * 세로와 가로 간격의 스타일을 반환하는 함수
 * @param vertical 세로 간격 값
 * @param horizontal 가로 간격 값
 * @returns {SerializedStyles}
 */
export const getPaddingStyle = (
  vertical: number,
  horizontal: number,
): SerializedStyles => {
  return css`
    ${spacing.py(vertical)};
    ${spacing.px(horizontal)};
  `;
};

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
} as const;
