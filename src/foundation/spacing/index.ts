import { css, SerializedStyles } from '@emotion/react';

const STANDARD = 4;

export interface Spacing {
  [key: string]: (value: number) => SerializedStyles;
}
export type SpacingPropType = {
  m?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mx?: number;
  my?: number;
  p?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
};
export type SerializedType = SerializedStyles;

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
/**
 * spacingStyles 객체 속성에 맞는 스타일을 반환하는 함수
 * @param spacingStyles SpacingPropType 타입 객체
 * @returns {SerializedType}
 */
export const getSpacingStyles = (
  spacingStyles: SpacingPropType,
): SerializedType => {
  const styles = Object.entries(spacingStyles) // spacingStyles 객체 속성들을 [key, value]로 나눈다.
    .filter(([prop]) => prop in spacing) // spacing 모듈에 해당 속성이 있는지 확인한다.
    .map(([prop, value]) => spacing[prop as keyof Spacing](value)); // spacing 함수를 사용해 스타일을 반환한다.
  return css`
    ${styles}
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
