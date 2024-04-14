import React, { forwardRef, InputHTMLAttributes, ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SerializedType, spacing } from '../../foundation/spacing';
import { SizeKeyType, SIZE_SET } from '../../foundation/styles/size';
import {
  BorderKeyType,
  BORDER_RADIUS_SET,
} from '../../foundation/styles/border';
import {
  ColorSetType,
  COLOR_SET,
  neutralDark,
  neutral,
} from '../../foundation/styles/palette';

type InputVariantType = keyof ColorSetType;
type InputSizeKeyType = Pick<typeof SIZE_SET, 'sm' | 'md' | 'lg'>;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariantType;
  helperText?: string;
  inputSize?: keyof InputSizeKeyType;
  radius?: BorderKeyType;
  iconSize?: number;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}
interface InputStyleType {
  borderColor: string;
  radius: BorderKeyType;
  textSize: SizeKeyType;
  heightSize: string;
  paddingLeft: string | SerializedType;
  paddingRight: string | SerializedType;
}
const INPUT_SIZE_SET: {
  [key in keyof InputSizeKeyType]: {
    paddingLeft: string | SerializedType;
    paddingRight: string | SerializedType;
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
};

const HEIGHT_SIZE_SET: { [key in keyof InputSizeKeyType]: string } = {
  sm: '2rem',
  md: '3rem',
  lg: '4rem',
} as const;
const getColorStyle = (variant?: InputVariantType): string => {
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
  const sizeStyle = INPUT_SIZE_SET[inputSize];
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
          <IconContainer className="leftIcon" iconSize={iconSize}>
            {leftIcon}
          </IconContainer>
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
          <IconContainer className="rightIcon" iconSize={iconSize}>
            {rightIcon}
          </IconContainer>
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

const BaseInput = styled.input<InputStyleType>`
  width: 100%;
  height: ${({ heightSize }) => heightSize};
  color: black;
  box-sizing: border-box;
  border: 1px solid ${({ borderColor }) => borderColor || neutralDark};
  border-radius: ${({ radius }) =>
    BORDER_RADIUS_SET[radius] || BORDER_RADIUS_SET['default']};
  font-size: ${({ textSize }) => SIZE_SET[textSize]};
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

const IconContainer = styled.div<{ iconSize?: number }>`
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
  textSize: SizeKeyType;
  heightSize: string;
}>`
  position: absolute;
  width: 100%;
  bottom: -50%;
  font-size: ${({ textSize }) => `calc(${SIZE_SET[textSize]} - 0.1rem)`};
  color: ${({ color }) => color || neutralDark};
`;

export default forwardRef(Input);
