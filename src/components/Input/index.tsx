import { forwardRef, Ref } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getSizesAndFontSize } from '../../css';
import { BOX_SIZE_SET } from '../../foundation';
import { toSizeUnit } from '../../utils';

import { BaseComponent } from './BaseComponent';
import { SizeType } from './styles';
import { InputProps } from './types';

export const Input = forwardRef(({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
  return <TextInput as="input" ref={ref} {...props} />;
});

const TextInput = styled(BaseComponent)<SizeType>`
  ${({ inputSize = 'md' }) => {
    const { height } = BOX_SIZE_SET[inputSize];

    return css`
      ${getSizesAndFontSize(inputSize)}
      min-width: ${toSizeUnit(height)};
    `;
  }}
`;
