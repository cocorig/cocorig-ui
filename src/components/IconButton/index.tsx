import { Ref, forwardRef } from 'react';

import styled from '@emotion/styled';

import { Button } from '../Button';
import { ButtonProps } from '../Button/type';

export const IconButton = forwardRef(
  ({ children, label, ...props }: ButtonProps & { label: string }, ref: Ref<HTMLButtonElement>) => {
    return (
      <IButton {...props} ref={ref} aria-label={label}>
        {children}
      </IButton>
    );
  },
);

export const IButton = styled(Button)`
  padding: unset;
`;
