import { forwardRef, Ref } from 'react';

import { StyledTextArea } from './styles';

import type { TextAreaProps } from './types';

export const TextArea = forwardRef(({ ...props }: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
  return <StyledTextArea as="textarea" ref={ref} {...props} />;
});
