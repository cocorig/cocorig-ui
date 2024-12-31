import { forwardRef, InputHTMLAttributes, Ref } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getSizesAndFontSize, toSizeUnit } from '../../css';
import { BOX_SIZE_SET, ColorStyleReturnType, MarginSpacing } from '../../foundation';
import { SystemProps } from '../../styled-system';

import { BaseComponent } from './BaseComponent';
import { SizeType } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & CommonInputProps;

export type CommonInputProps = {
  placeholderColor?: string;
} & SystemProps<'input'> &
  MarginSpacing;

export type InputStyleProps = CommonInputProps & ColorStyleReturnType;

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
