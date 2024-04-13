# 📦🎨 cocorig-ui

## 📓 기록

> 재사용 가능한 UI 컴포넌트를 배포하는 과정을 기록합니다.

<details><summary>
1 일차
</summary>

### setting , npm 배포 테스트

</details>

<details><summary>
2 일차
</summary>

### 역할에 맞는 color 색상 지정

- const 단언으로 상수 관리

  Color객체를 정의할 때 TypeScript의 as const를 사용하여 모든 필드를 리터럴 타입으로 선언하면, 읽기 전용으로 타입이 추론되어 지정된 값 외의 값을 할당할 수 없다. 따라서 의도하지 않은 값 변경을 방지할 수 있다.

</details>

<details><summary>
3 일차
</summary>

### spacing 스타일

 <br>
  spacing은 @emotion의 SerializedStyles를 return 하는 함수로 아래 코드와 같이 사용할 수 있지만 Emotion css props 에러가 발생했다. 이 에러는 Emotion의 css 함수를 사용하여 생성된 스타일 객체를 문자열로 변환하려고 시도했기 때문에 발생한 현상이다.

```tsx
<button css={[spacing.mx(3), spacing.my(4)]}>버튼</button>
```

- 에러 메세지

> You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).,You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).

```tsx
<button css={spacing.my(4)}>버튼</button>
```

- 에러 메세지

> css="You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."

따라서 각 페이지마다 `/** @jsxImportSource @emotion/react */` 주석을 달아주는 방법이 있고, `craco 설치` 및 설정해 주는 방법이 있는데 아래와 같이 `styled 컴포넌트`를 생성해서 적용하는 방법도 있다.

```tsx
import { spacing } from "./spacing";
import styled from "@emotion/styled";

const Button = styled.button`
  ${[spacing.mx(2), spacing.my(6)]}
`;
const Box = styled.div`
  ${spacing.m(2)}
`;
export const Test = () => {
  return (
    <>
      <Button>button</Button>
      <Box>box</Box>
    </>
  );
```

</details>

<details><summary>
4 일차
</summary>

### typography 컴포넌트

</details>

<details><summary>
5 일차
</summary>

### spacing 스타일

</details>

<details><summary>
6 일차
</summary>

### button 컴포넌트

</details>

<details><summary>
7 일차
</summary>

### input 컴포넌트

input 컴포넌트를 구현하던 중 버튼 컴포넌트처럼 사이즈를 prop으로 받아와서 스타일을 동적으로 변경하는 게 좋을 거 같다 생각해서 ` width: 100%, height: auto`로 하고 padding 값으로만 사이즈를 조절하게 끔 구현하였다.

처음엔 아래와 같이 icon이 있는 input과 없는 Input의 padding-left, padding-right을 다르게 줘야 하게 때문에 hasIcon, default로 나누고, 해당하는 size 값을 반환해 스타일을 지정해 줬었다. 사이즈는 받아서 스타일을 주는 게 좋을지, height 값을 prop으로 받아서 스타일을 유동적으로 변경하는 게 좋을지 고민이다. height으로 높이만 지정하고, padding은 비례하게 하면 될까? <br>

일단 size에 따라 다르게 height와 padding이 지정되도록 해서 아이콘 유무에 따라 padding 값을 더 주는 식으로 코드를 변경했다. 똑같은 비율로 변경하려고 하다가 하드 코딩한 거 같다..🥲

주요 코드만 보면 다음과 같다.

```tsx
///...
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
///...

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

//...

const BaseInput = styled.input<{
  borderColor: string;
  radius: ComponentBorderKey;
  textSize: Size;
  heightSize: string;
  paddingLeft: string | SpacingStyles;
  paddingRight: string | SpacingStyles;
}>`
  height: ${({ heightSize }) => heightSize};
  font-size: ${({ textSize }) => FONT_SIZE_SET[textSize]};
  ${({ paddingLeft }) => paddingLeft};
  ${({ paddingRight }) => paddingRight};
`;

export default forwardRef(Input);
```

</details>
