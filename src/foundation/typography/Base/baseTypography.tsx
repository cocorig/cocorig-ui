import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { PaddingSpacing, paddingStyle } from '../../spacing';
import { FontWeightsToken, LETTER_SPACING_SET, LetterSpacingsToken, WEIGHT_SET } from '../../styles';
import { TextSizeToken, textStyle } from '../../styles/textSize';

export type TypographyComponentProps = {
  size?: TextSizeToken;
  letter?: LetterSpacingsToken;
  weight?: FontWeightsToken;
  color?: string;
} & PaddingSpacing;

export const BaseTypography = styled.span<TypographyComponentProps>`
  ${({ size, letter, weight, color, ...props }) => css`
    ${size ? textStyle(size) : ''}
    ${letter && `letter-spacing: ${LETTER_SPACING_SET[letter]};`}
    ${weight && `font-weight: ${WEIGHT_SET[weight]};`}
    color : ${color};
    ${paddingStyle(props)}
  `}
`;
