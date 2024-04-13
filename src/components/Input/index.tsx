import React, { forwardRef, InputHTMLAttributes, ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SpacingStyles, spacing } from '../../foundation/spacing';
import { ColorSet, COLOR_SET } from '../../foundation/styles/palette';
import { neutralDark, neutral } from '../../foundation/styles/palette';
import {
  ComponentBorderKey,
  BORDER_RADIUS_SET,
} from '../../foundation/styles/border';

type InputVariant = keyof ColorSet;
type Size = 'lg' | 'md' | 'sm'; // TODO: 공통 사이즈 타입 지정
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  variant?: InputVariant;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  inputSize?: Size;
  radius?: ComponentBorderKey;
  iconSize?: number;
}

const SIZE_SET: {
  [key in Size]: {
    paddingLeft: string | SpacingStyles;
    paddingRight: string | SpacingStyles;
  };
} = {
  sm: {
    paddingLeft: spacing.pl(3),
    paddingRight: spacing.pr(3),
  },
  md: {
    paddingLeft: spacing.pl(4),
    paddingRight: spacing.pr(4),
  },
  lg: {
    paddingLeft: spacing.pl(6),
    paddingRight: spacing.pr(6),
  },
} as const;

const HEIGHT_SIZE_SET: { [key in Size]: string } = {
  sm: '2rem',
  md: '3rem',
  lg: '4rem',
} as const;

const FONT_SIZE_SET: { [key in Size]: string } = {
  sm: '.875rem',
  md: '1rem',
  lg: '1.125rem',
} as const;

const getColorStyle = (variant?: InputVariant): string => {
  return variant && COLOR_SET[variant] ? COLOR_SET[variant] : neutralDark;
};

const Input = (
  {
    type = 'text',
    leftIcon,
    rightIcon,
    variant,
    helperText,
    inputSize = 'md',
    radius = 'default',
    iconSize,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const borderColor = getColorStyle(variant);
  const helperTextColor = getColorStyle(variant);
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;
  const sizeStyle = SIZE_SET[inputSize];
  let paddingLeft = sizeStyle.paddingLeft;
  let paddingRight = sizeStyle.paddingRight;

  if (hasLeftIcon) {
    paddingLeft = css`
      padding-left: calc(32px + ${iconSize ? `${iconSize}px` : '30px'});
    `;
  }

  if (hasRightIcon) {
    paddingRight = css`
      padding-right: calc(32px + ${iconSize ? `${iconSize}px` : '30px'});
    `;
  }

  return (
    <Wrapper>
      <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
        {leftIcon && (
          <IconBox className="leftIcon" iconSize={iconSize}>
            {leftIcon}
          </IconBox>
        )}
        <BaseInput
          type={type}
          ref={ref}
          borderColor={borderColor}
          radius={radius}
          textSize={inputSize}
          heightSize={HEIGHT_SIZE_SET[inputSize]}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          {...props}
        />
        {rightIcon && (
          <IconBox className="rightIcon" iconSize={iconSize}>
            {rightIcon}
          </IconBox>
        )}
      </div>
      {helperText && (
        <HelperText
          color={helperTextColor}
          textSize={inputSize}
          heightSize={HEIGHT_SIZE_SET[inputSize]}
        >
          {helperText}
        </HelperText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const BaseInput = styled.input<{
  borderColor: string;
  radius: ComponentBorderKey;
  textSize: Size;
  heightSize: string;
  paddingLeft: string | SpacingStyles; // TODO
  paddingRight: string | SpacingStyles;
}>`
  width: 100%;
  height: ${({ heightSize }) => heightSize};
  color: black;
  box-sizing: border-box;
  border: 1px solid ${({ borderColor }) => borderColor || neutralDark};
  border-radius: ${({ radius }) =>
    BORDER_RADIUS_SET[radius] || BORDER_RADIUS_SET['default']};
  font-size: ${({ textSize }) => FONT_SIZE_SET[textSize]};
  ${({ paddingLeft }) => paddingLeft};
  ${({ paddingRight }) => paddingRight};

  ::placeholder {
    color: ${neutralDark};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${neutralDark};
    border-color: ${neutralDark};
    background-color: ${neutral};
  }
`;

const IconBox = styled.div<{ iconSize?: number }>`
  width: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '30px')};
  height: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '30px')};
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &.leftIcon {
    left: 1rem;
  }
  &.rightIcon {
    right: 1rem;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
const HelperText = styled.span<{
  color: string;
  textSize: Size;
  heightSize: string;
}>`
  position: absolute;
  width: 100%;
  bottom: -50%;
  /* font-size: 14px; */
  font-size: ${({ textSize }) => `calc(${FONT_SIZE_SET[textSize]} - 0.1rem)`};
  color: ${({ color }) => color || neutralDark};
`;

export default forwardRef(Input);
