import { CSSProperties } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { PaddingSpacing, paddingStyle } from '../../spacing';
import {
  FontWeightsToken,
  LETTER_SPACING_SET,
  LetterSpacingsToken,
  WEIGHT_SET,
  TextSizeToken,
  textStyle,
} from '../../styles';

export type TypographyComponentProps = {
  /**
   * 텍스트의 크기를 지정합니다.
   */
  size?: TextSizeToken;
  /**
   * 텍스트의 글자 간격(letter-spacing)을 지정합니다.
   */
  letter?: LetterSpacingsToken;
  /**
   * 텍스트의 폰트 두께(font-weight)를 지정합니다.
   */
  weight?: FontWeightsToken;
  /**
   * 텍스트의 색상을 지정합니다.
   */
  textColor?: string;
  /**
   * 텍스트의 정렬 방식을 지정합니다.
   */
  textAlign?: CSSProperties['textAlign'];
} & PaddingSpacing;

export const BaseTypography = styled.span<TypographyComponentProps>`
  ${({ size, letter, weight, textColor, textAlign, ...props }) => css`
    ${size && textStyle(size)};
    ${letter && `letter-spacing: ${LETTER_SPACING_SET[letter]};`};
    ${weight && `font-weight: ${WEIGHT_SET[weight]};`};
    ${textColor && `color: ${textColor};`};
    ${textAlign && `text-align: ${textAlign};`};
    ${paddingStyle(props)};
  `}
`;
