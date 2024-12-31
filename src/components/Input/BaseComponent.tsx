import { forwardRef, useMemo } from 'react';

import { marginProps, getColorStyles } from '../../foundation';
import { PolymorphicProps, RefForElement } from '../../styled-system';

import { StyledComponent } from './styles';

import { CommonInputProps } from '.';

type BaseComponentProps<T extends React.ElementType> = PolymorphicProps<T, CommonInputProps>;

export const BaseComponent = forwardRef(
  <T extends React.ElementType>(
    { colorScheme = 'gray', as, ...props }: BaseComponentProps<T>,
    ref: RefForElement<T>,
  ) => {
    const COLOR = useMemo(() => getColorStyles(colorScheme), [colorScheme]);

    return <StyledComponent as={as} ref={ref} {...COLOR} {...marginProps(props)} {...props} />;
  },
);
