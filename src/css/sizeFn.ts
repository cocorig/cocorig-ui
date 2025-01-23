import { css } from '@emotion/react';

import { BOX_SIZE_SET, SizesToken } from '../foundation';
import { toSizeUnit } from '../utils';

export const fontStyle = (size: SizesToken) => {
  const { fontSize, lineHeight } = BOX_SIZE_SET[size];
  return css`
    font-size: ${toSizeUnit(fontSize)};
    line-height: ${toSizeUnit(lineHeight)};
  `;
};
export const BoxSizeStyle = (size: SizesToken) => {
  const { padding, height } = BOX_SIZE_SET[size];
  return css`
    padding-inline-start: ${toSizeUnit(padding)};
    padding-inline-end: ${toSizeUnit(padding)};
    height: ${toSizeUnit(height)};
  `;
};
export const getSizesAndFontSize = (size: SizesToken) => {
  return css`
    ${fontStyle(size)}
    ${BoxSizeStyle(size)}
  `;
};
