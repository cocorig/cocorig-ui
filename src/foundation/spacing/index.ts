import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

const marginOptions = ['m', 'mt', 'mb', 'ml', 'mr', 'my', 'mx'] as const;
const paddingOptions = ['p', 'pt', 'pb', 'pl', 'pr', 'py', 'px'] as const;

export type MarginSpacing = {
  [key in (typeof marginOptions)[number]]?: number;
};

export type PaddingSpacing = {
  [key in (typeof paddingOptions)[number]]?: number;
};
// 전체 spacing prop 타입
export type SpacingProp = MarginSpacing & PaddingSpacing;

const isNumber = (value: [string, number | undefined]): value is [string, number] => {
  return typeof value[1] === 'number';
};

const hasSpacingProps = (props: MarginSpacing | PaddingSpacing, options: readonly string[]) =>
  options.some((option) => option in props);

/** spacing 옵션과 spacing 값을 받아서 객체를 생성
 * @param props - marginOptions의 키와 margin spacing 값이 포함된 객체 ex) {m : 10}
 * @returns  props으로 받은 marginOptions의 키와 spacing 값을 가진 객체
 */
export const marginProps = (props: MarginSpacing): MarginSpacing => {
  if (!hasSpacingProps(props, marginOptions)) {
    return {};
  }
  return marginOptions.reduce(
    (marginMap, option) => ({
      ...marginMap,
      [option]: props[option],
    }),
    {},
  );
};

export const paddingProps = (props: PaddingSpacing): PaddingSpacing => {
  if (!hasSpacingProps(props, paddingOptions)) {
    return {};
  }
  return paddingOptions.reduce(
    (paddingMap, option) => ({
      ...paddingMap,
      [option]: props[option],
    }),
    {},
  );
};

/**
 * margin spacing 객체를 기반으로 CSS 스타일을 생성해 반환하는 함수
 * @param props marginProps객체 ex) {m : 10}
 * @returns SerializedStyles CSS 스타일 객체
 */
export const marginStyle = (props: MarginSpacing): SerializedStyles => {
  const { m, mt = m, mb = m, ml = m, mr = m, mx, my } = props;
  if (!hasSpacingProps(props, marginOptions)) {
    return css``;
  }
  const margins = Object.entries({
    top: mt,
    bottom: mb,
    left: ml,
    right: mr,
    inline: mx,
    block: my,
  });

  return css`
    ${margins
      .filter(isNumber)
      .map(([position, value]) => `margin-${position}: ${value}rem;`)
      .join('')}
  `;
};

/**
 * padding spacing 객체를 기반으로 CSS 스타일을 생성해 반환하는 함수
 * @param props paddingProps객체 ex) {p : 10}
 * @returns SerializedStyles CSS 스타일 객체
 */
export const paddingStyle = (props: PaddingSpacing): SerializedStyles => {
  const { p, pt = p, pb = p, pl = p, pr = p, px, py } = props;

  if (!hasSpacingProps(props, paddingOptions)) {
    return css``;
  }

  const paddings = Object.entries({
    top: pt,
    bottom: pb,
    left: pl,
    right: pr,
    inline: px,
    block: py,
  });

  return css`
    ${paddings
      .filter(isNumber)
      .map(([position, value]) => `padding-${position}: ${value}rem;`)
      .join('')}
  `;
};
