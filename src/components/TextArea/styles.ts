import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { fontStyle, toSizeUnit } from '../../css';
import { InputVariant } from '../../styled-system';
import { BaseComponent } from '../Input/BaseComponent';

import { TextAreaStyle } from '.';

export const SIZE_SET: Record<InputVariant['inputSize'], SerializedStyles> = {
  sm: css`
    padding-inline: 0.625rem;
    padding-block: 0.5rem;
  `,

  md: css`
    padding-inline: 0.75rem;
    padding-block: 0.5rem;
  `,

  lg: css`
    padding-inline: 1rem;
    padding-block: 0.75rem;
  `,
  xl: css`
    padding-inline: 1.125rem;
    padding-block: 0.875rem;
  `,
};
export const StyledTextArea = styled(BaseComponent)<TextAreaStyle>`
  ${({ inputSize = 'md' }) => {
    return css`
      ${SIZE_SET[inputSize]}
      ${fontStyle(inputSize)}
    `;
  }}
  min-height : ${({ minH }) => (minH ? toSizeUnit(minH) : 'initial')};
  resize: ${({ resize }) => (resize ? resize : 'none')};
`;
