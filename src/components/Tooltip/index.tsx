import React, { HTMLAttributes, forwardRef, ForwardedRef } from 'react';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorSetType, COLOR_SET } from '../../foundation/styles/palette';
import { SIZE_SET } from '../../foundation/styles/size';
type TooltipVariantType = keyof ColorSetType;
interface TooltipCommonProps {
  variant?: TooltipVariantType;
  direction: 'top' | 'right' | 'bottom' | 'left';
}

interface TooltipProps
  extends HTMLAttributes<HTMLDivElement>,
    TooltipCommonProps {
  message: string;
}

const Tooltip = (
  { children, message, variant, direction }: TooltipProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Wrapper ref={ref}>
      {children}
      <TooltipContainer
        variant={variant}
        className={`tooltip ${direction}`}
        direction={direction}
      >
        {message}
      </TooltipContainer>
    </Wrapper>
  );
};

const TooltipEffect = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const getTooltipColor = (variant?: TooltipVariantType) =>
  variant ? COLOR_SET[variant] : 'black';

// 공통 tail 스타일
const tailStyles = css`
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    opacity: 1;
    border-width: 0.25rem;
    border-style: solid;
    border-color: transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

const TooltipContainer = styled.div<TooltipCommonProps>`
  max-width: 20rem;
  width: max-content;
  position: absolute;
  z-index: 200;
  display: none;
  background-color: ${(props) => getTooltipColor(props.variant)};
  padding: 0.25rem 0.5rem;
  color: #fff;
  font-size: ${SIZE_SET.sm};
  border-radius: 0.25rem;
  opacity: 0;
  animation: ${TooltipEffect} 0.2s ease forwards;
  ${(props) =>
    props.direction === 'top' &&
    css`
      left: 50%;
      transform: translate(-50%);
      bottom: calc(100% + 0.5rem);
      ${tailStyles};

      /* TOP - Tail */
      &::before {
        border-color: ${getTooltipColor(props.variant)} transparent transparent
          transparent;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    `};
  ${(props) =>
    props.direction === 'bottom' &&
    css`
      left: 50%;
      transform: translateX(-50%);
      top: calc(100% + 0.5rem);
      ${tailStyles};

      /* BOTTOM - Tail */
      &::before {
        border-color: transparent transparent ${getTooltipColor(props.variant)}
          transparent;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    `};
  ${(props) =>
    props.direction === 'right' &&
    css`
      top: 50%;
      left: calc(100% + 0.5rem);
      transform: translateY(-50%);
      ${tailStyles};
      /* RIGHT - Tail */
      &::before {
        border-color: transparent ${getTooltipColor(props.variant)} transparent
          transparent;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
      }
    `};
  ${(props) =>
    props.direction === 'left' &&
    css`
      top: 50%;
      right: calc(100% + 0.5rem);
      transform: translateY(-50%);
      ${tailStyles};
      /* LEFT - Tail */
      &::before {
        border-color: transparent transparent transparent
          ${getTooltipColor(props.variant)};
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      }
    `};
`;
export default forwardRef(Tooltip);
