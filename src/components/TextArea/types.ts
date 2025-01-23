import { CSSProperties, TextareaHTMLAttributes } from 'react';

import { SizeType } from '../Input/styles';

import type { CommonInputProps } from '../Input/types';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & CommonInputProps & TextAreaStyle;

export type TextAreaStyle = {
  resize?: CSSProperties['resize'] & (string & {});
  minH?: number | string;
} & SizeType;
