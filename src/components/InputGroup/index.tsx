import { Ref, forwardRef, HTMLAttributes, useState, useRef, useEffect, ReactElement } from 'react';

import styled from '@emotion/styled';

import { centerContent, fontStyle } from '../../css';
import { COLOR_SET, WEIGHT_SET } from '../../foundation';

type InputGroupProps = HTMLAttributes<HTMLDivElement> & CommonProps;

type CommonProps = {
  leftElement?: ReactElement | string;
  rightElement?: ReactElement | string;
};
export type InputGroupStyleProps = {
  paddingStart?: number;
  paddingEnd?: number;
} & CommonProps;

export const InputGroup = forwardRef(
  ({ children, leftElement, rightElement, ...props }: InputGroupProps, ref: Ref<HTMLDivElement>) => {
    const [padding, setPadding] = useState({
      start: 0,
      end: 0,
    });
    const startRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const startWidth = startRef.current ? startRef.current.offsetWidth : 0;
      const endWidth = endRef.current ? endRef.current.offsetWidth : 0;

      setPadding({
        start: startWidth,
        end: endWidth,
      });
    }, [leftElement, rightElement]);

    return (
      <InputWrapper
        rightElement={rightElement}
        leftElement={leftElement}
        paddingStart={padding.start}
        paddingEnd={padding.end}
        ref={ref}
        {...props}
      >
        {leftElement && (
          <ElementWrapper ref={startRef} position="left">
            {leftElement}
          </ElementWrapper>
        )}
        {children}
        {rightElement && (
          <ElementWrapper ref={endRef} position="right">
            {rightElement}
          </ElementWrapper>
        )}
      </InputWrapper>
    );
  },
);

const InputWrapper = styled.div<InputGroupStyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  input {
    ${({ leftElement, rightElement, paddingStart, paddingEnd }) => {
      let styles = '';

      if (leftElement) {
        styles += `padding-inline-start: ${paddingStart}px;`;
      }

      if (rightElement) {
        styles += `padding-inline-end: ${paddingEnd}px;`;
      }

      return styles;
    }}
  }
`;

const ElementWrapper = styled.div<{
  position: 'left' | 'right';
}>`
  position: absolute;
  height: 100%;
  z-index: 10;
  padding-inline: 0.75rem;
  color: ${COLOR_SET.gray[600]};
  font-weight: ${WEIGHT_SET.bold};

  ${fontStyle('md')};
  ${centerContent('flex')};

  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
`;
