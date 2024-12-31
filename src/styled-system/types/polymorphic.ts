import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

import { WithAsProp } from './asProp';

export type RefForElement<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

export type PolymorphicProps<T extends ElementType, Props> = WithAsProp<T> &
  ComponentPropsWithoutRef<T> &
  Props & {
    ref?: RefForElement<T>;
  };
