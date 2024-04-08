# 📦🎨 cocorig-ui

## 📓 기록

> 재사용 가능한 UI 컴포넌트를 배포하는 과정을 기록합니다.

<details><summary>
1 일차
</summary>

setting , npm 배포 테스트

</details>

<details><summary>
2 일차
</summary>

- const 단언으로 상수 관리

  Color객체를 정의할 때 TypeScript의 as const를 사용하여 모든 필드를 리터럴 타입으로 선언하면, 읽기 전용으로 타입이 추론되어 지정된 값 외의 값을 할당할 수 없다. 따라서 의도하지 않은 값 변경을 방지할 수 있다.

</details>

<details><summary>
3 일차
</summary>

- spacing
  spacing은 @emotion의 SerializedStyles를 return 하는 함수로 아래와 같이 사용할 수 있지만 아래와 같은 에러가 발생했다. 이 에러는 Emotion의 css 함수를 사용하여 생성된 스타일 객체를 문자열로 변환하려고 시도했기 때문에 발생한 현상이다.

```tsx

 <button css={[spacing.mx(3), spacing.my(4)]}>버튼</button>;
/*
You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).,You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).

```

```tsx
<button css={spacing.my(4)}>버튼</button>
/*
css="You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."
 */
```

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
