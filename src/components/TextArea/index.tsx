import { CSSProperties, forwardRef, Ref, TextareaHTMLAttributes } from 'react';

import { CommonInputProps } from '../Input';
import { SizeType } from '../Input/styles';

import { StyledTextArea } from './styles';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & CommonInputProps & TextAreaStyle;

export type TextAreaStyle = {
  resize?: CSSProperties['resize'] & (string & {});
  minH?: number | string;
} & SizeType;

export const TextArea = forwardRef(({ ...props }: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
  return <StyledTextArea as="textarea" ref={ref} {...props} />;
});
