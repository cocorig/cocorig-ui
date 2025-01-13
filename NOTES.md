# 1. 프로젝트 설정

## React , ReactDom 설치

```bash
npm install react react-dom
```

🔗 [react](https://www.npmjs.com/package/react) <br>
🔗 [react-dom](https://www.npmjs.com/package/react-dom) <br>

## TypeScript 설치

```bash
npm install --save-dev typescript
```

🔗 [typescript](https://www.npmjs.com/package/typescript)

## 타입 정의 패키지 설치

```bash
npm install --save @types/react @types/react-dom
```

🔗 [@types/react](https://www.npmjs.com/package/@types/react) <br>
🔗 [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) <br>

## ESLint 설치

```bash
npm i -D  eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react-hooks
```

🔗 [eslint Rules](https://eslint.org/docs/latest/rules/)

- [eslint](https://www.npmjs.com/package/eslint) : ECMAScript 코드에서 문법 오류, 불필요한 코드, 버그 가능성 등을 찾아내는 린트 도구 중의 하나이다.
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) : ESLint가 TypeScript 코드를 이해할 수 있도록 돕는 역할 <br>
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) : TypeScript에 특화된 ESLint 규칙을 제공 <br>

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) : Import 순서, 중복 import, 잘못된 경로를 감지하고 관리 <br>

- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) : TypeScript의 paths 및 baseUrl 설정을 ESLint가 이해하도록 지원 <br>

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) : React Hooks 사용 시 올바른 규칙을 적용하고 검사
  <br>

### .eslintrc.json

```js
{
  "root": true, // 루트 파일임을 알려줌
  "plugins": ["import", "@typescript-eslint"], // import/export,TypeScript 전용 규칙 제공
  "extends": [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:import/warnings", // import/export 관련 경고 활성화
    "prettier" //  Prettier와 충돌하는 규칙을 비활성화
  ],
  "ignorePatterns": ["rollup.config.js"], // ESLint가 무시할 파일 또는 디렉터리
  // 적용할 규칙에 대한 설정
  "rules": {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-empty-object-type": "off", // 빈 객체 타입에 대한 경고 비활성화

    // import문 규칙
    "import/order": [
      "error",
      // import 그룹별로 정렬
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],

        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@emotion*",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": [], // builtin 및 external도 pathGroups 규칙에 적용되도록 설정
        "alphabetize": {  // 대소문자 무시
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always" // 그룹 간 줄 바꿈을 항상 추가
      }
    ]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": true,
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "project": ["tsconfig.json"],
    "exclude": ["node_modules"],
    "include": ["**/*.ts", "**/*.tsx"]
  },
  // 동작할 환경 설정
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  // 별도의 규칙 적용
  "overrides": [
    {
      "files": ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      "rules": {
        "storybook/hierarchy-separator": "error",
        "storybook/default-exports": "off"
      }
    }
  ]
}

```

- [import/order 참고](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#pathgroupsexcludedimporttypes)

## Prettier 설치

```bash
npm i --save-dev  prettier  eslint-config-prettier
```

- [prettier](https://www.npmjs.com/package/prettier) : 코드 스타일을 자동으로 포맷하는 도구
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) :Prettier와 충돌할 수 있는 ESLint 규칙을 끄고, Prettier가 관리하는 부분에서는 ESLint가 검사하지 않도록 설정

### .prettierrc

```js
{
  "trailingComma": "all",  // 마지막 항목 뒤에 콤마를 추가
  "tabWidth": 2,  // 탭의 너비를 2칸으로 설정
  "semi": true,  // 구문 끝에 세미콜론을 추가
  "singleQuote": true,  // 작은따옴표 사용
  "endOfLine": "auto",  // OS에 맞게 줄 바꿈 방식을 자동으로 처리
  "printWidth": 120,   // 줄 바꿈할 길이
  "useTabs": false,   // 탭 대신 공백으로 들여쓰기
  "bracketSpacing": true  // 객체 중괄호 사이에 공백 추가
}
```

- eslint & prettier 실행 script 추가

```json
    "scripts": {
      "lint": "eslint '**/*.{js,jsx,ts,tsx}' --cache --debug --fix",
      "format": "prettier --write '**/*.{js,jsx,ts,tsx}'"
  },
```

## tsconfig.json

- 파일 생성

```bash
npx tsc --init
```

## emotion 설치

```bash
 npm i @emotion/styled @emotion/react
```

- [@emotion/babel-plugin](https://emotion.sh/docs/@emotion/babel-plugin) 설치

```bash
npm install --save-dev @emotion/babel-plugin
```

## Storybook 설치

```bash
npx storybook@latest init
```

- 필요한 종속성 설치

## babel 설치

```bash
npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
```

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) : (ES6 이상)를 구버전의 브라우저에서도 호환될 수 있도록 변환
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
  : 최신 React 기능(예: 자동 JSX 런타임)을 지원
- [@babel/preset-typescript](https://www.npmjs.com/package/@babel/preset-typescript) : JavaScript로 변환
- [babel-loader](https://www.npmjs.com/package/babel-loader)
  : Webpack에서 Babel을 사용할 수 있게 해주는 로더
  ,Babel 프리셋과 플러그인을 적용하여 코드를 변환

## rollup 설치

```bash
npm install --save-dev rollup @rollup/plugin-terser @rollup/plugin-node-resolve  @rollup/plugin-commonjs  @rollup/plugin-typescript rollup-plugin-peer-deps-external
```

---

# 2. 스토리북

[default value](https://storybook.js.org/docs/faq#why-are-my-args-no-longer-displaying-the-default-values)

[ArgTypes](https://storybook.js.org/docs/api/arg-types#argtypes)

- argTypes

```ts
{
  [key: string]: {
    control?: ControlType | { type: ControlType; /* See below for more */ } | false;
    description?: string;
    if?: Conditional;
    mapping?: { [key: string]: { [option: string]: any } };
    name?: string;
    options?: string[];
    table?: {
      category?: string;
      defaultValue?: { summary: string; detail?: string };
      disable?: boolean;
      subcategory?: string;
      type?: { summary?: string; detail?: string };
    },
    type?: SBType | SBScalarType['name'];
  }
}
```

<br>

- controlType

```ts
| ControlType
| {
    type: ControlType,
    accept?: string;
    labels?: { [option: string]: string };
    max?: number;
    min?: number;
    presetColors?: string[];
    step?: number;
  }
| false
```

- [table 옵션](https://storybook.js.org/docs/api/arg-types#table) : 인수가 `ArgTypes doc block` , `Controls doc block` 및 `Controls addon panel`에 어떻게 문서화되는지 지정한다.

<br>

### 컴포넌트 타입이 제대로 반영되지 않는 문제

스토리 작성 중 타입 추론이 제대로 되지 않는 문제가 발생했다. 스토리북 공식 문서에서 typescript로 검색 후 찾아보니 바로 방법이 나와있었다.
해결 방법을 정리하면, 스토리북에서는 react-docgen 라이브러리를 사용하여 typescript 파일을 처리하고, 컴포넌트의 타입을 자동으로 추론하여 문서화한다. 하지만 일부 컴포넌트(`forwardRef나 Enum`)과 같은 특정 React 패턴에서는 타입 추론이 제대로 이루어지지 않을 수 있다. 이를 해결하려면 `react-docgen-typescript`를 사용해야 해야 한다.

- [Configure Storybook with TypeScript](https://storybook.js.org/docs/configure/integration/typescript)

다음과 같이 storybook/main.ts 파일에서 react-docgen-typescript를 추가하면 된다.

```ts
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  framework: '@storybook/react',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // react-docgen-typescript 옵션
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // 불필요한 prop을 제외하는 필터 설정
      propFilter: (prop) => (prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true),
    },
  },
};

export default config;
```

### 타입

```ts
export const colorPaletteOptions = [
  'blue',
  'gray',
  'green',
  'orange',
  'pink',
  'red',
  'teal',
  'yellow',
  'indigo',
  'purple',
] as const;

export type ColorPaletteOptions = (typeof colorPaletteOptions)[number];

/**
 * type ColorPaletteOptions = "blue" | "gray" | "green" | "orange" | "pink" | "red" | "teal" | "yellow" | "indigo" | "purple"
 */
```

```ts
const marginOptions = ['m', 'mt', 'mb', 'ml', 'mr', 'my', 'mx'] as const;

export type MarginSpacing = {
  [key in (typeof marginOptions)[number]]?: number;
};

/**
 * type MarginSpacing = {
    m?: number | undefined;
    mt?: number | undefined;
    mb?: number | undefined;
    ml?: number | undefined;
    mr?: number | undefined;
    my?: number | undefined;
    mx?: number | undefined;
}*/
```

<br>

# 3. 컴포넌트 테스트

- testing-library <br>

🔗 [testing-library/jest-dom](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobevisible)
🔗 [testing-library](https://testing-library.com/)
🔗 [about queries](https://testing-library.com/docs/queries/about/)
🔗 [ByRole](https://testing-library.com/docs/queries/byrole/#options)

- jest <br>

🔗 [jest Expect](https://jestjs.io/docs/expect)

- mdn <br>
  🔗 [ARIA: Roles, states, and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)
  🔗 [ARIA: document structural roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## 테스트 시나리오

| #           | 설명/명세                                                 | 조건(실행할 로직)                                                                                       | 검증/확인할 것                                                                                       |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Button      | 클릭 시 onClick 이벤트 발생                               | 사용자가 버튼을 클릭한다.                                                                               | 이벤트가 정상적으로 실행되는지 확인                                                                  |
|             | tab 키로 포커스 상태 전환                                 | 사용자가 tab 키를 눌러 포커스를 이동시킨다.                                                             | 버튼에 포커스가 잘 이동하는지 확인                                                                   |
| Badge       | 컴포넌트가 화면에 나타나는지 확인                         | 화면에 Badge를 렌더링 한다.                                                                             | Badge가 정상적으로 화면에 나타나는지 확인                                                            |
| Blockquote  | 컴포넌트가 화면에 나타나는지 확인                         | 화면에 Blockquote를 렌더링 한다.                                                                        | Blockquote가 정상적으로 화면에 나타나는지 확인                                                       |
| Accordion   | 기본적으로 모든 body 요소가 닫혀있다                      | role이 region인 요소를 찾고, aria-hidden이 모두 true 인지 확인한다.                                     | 모든 body 요소가 닫혀있는지 확인                                                                     |
|             | 첫 번째 헤더 클릭 시 콘텐츠가 열린다                      | 첫 번째 항목을 클릭한다.                                                                                | 첫 번째 항목이 열리고 나머지는 닫혀 있는지 확인                                                      |
|             | 다른 항목 클릭 시 이전 항목이 닫히고 새로운 항목이 열린다 | 두 번째 항목을 클릭한다.                                                                                | 이전 항목이 닫히고, 새로 클릭한 항목이 열리는지 확인                                                 |
|             | allowMultiple 속성이 true 일 때 여러 항목이 열린다        | 두 개 이상의 항목을 클릭한다.                                                                           | 모든 선택된 항목이 동시에 열리는지 확인                                                              |
|             | defaultId 설정 시 해당 항목이 처음부터 열린다             | defaultId를 설정 후 렌더링 한다.                                                                        | 지정된 defaultId 항목이 처음부터 열려있는지 확인                                                     |
|             | 키보드로 포커스 이동 후 항목 열기                         | ArrowDown/ArrowUp 및 Enter 키를 사용한다.                                                               | 포커스가 정상적으로 이동하고, Enter로 해당 항목이 열리는지 확인                                      |
| Input       | 값 입력 시 업데이트                                       | 사용자가 "Input 테스트"라고 입력한다.                                                                   | input의 값이 “Input 테스트"인지 확인                                                                 |
|             | 10자 이상 입력 시 에러 상태로 변환                        | 10자 이상의 값을 입력한다                                                                               | border-color가 에러 색상으로 변경되는지 확인                                                         |
| FormControl | 유효성 검사 실패 시 helperText 표시                       | 유효하지 않은 값 입력                                                                                   | helperText가 DOM에 나타나는지 확인                                                                   |
|             | 유효성 검사 성공 시 helperText 사라짐                     | 유효한 값으로 다시 입력                                                                                 | helperText가 DOM에 서 사라지는지 확인                                                                |
|             | 필수 입력 검사                                            | formControl에서 required 속성을 설정하면 input 필드에 required 속성이 적용되도록 children으로 전달한다. | input 요소가 required 속성을 가지고 있는지 확인                                                      |
| Menu        | 버튼 클릭 시 메뉴가 열린다.                               | 버튼 클릭 후 role=menu인 요소가 화면에 보이는지 확인한다                                                | 버튼을 클릭했을 때 메뉴가 열리는지 확인                                                              |
|             | ArrowDown/ArrowUp 키보드 이벤트                           | 메뉴가 열린 상태에서, ArrowDown/ArrowUp 키를 눌러 메뉴 항목을 탐색한다.                                 | 사용자가 키보드에서 ArrowDown/ArrowUp 키를 사용하여 메뉴 항목을 탐색할 수 있는지 확인                |
|             | Enter 시 값 입력                                          | 메뉴가 열린 상태에서, Enter 키를 눌러 해당 항목이 선택한다                                              | 사용자가 Enter 키를 눌러 메뉴 항목을 선택할 수 있는지 확인                                           |
|             | 외부 요소 클릭 시 메뉴 닫힘                               | 메뉴가 열린 상태에서 외부 요소를 클릭한다                                                               | 메뉴 외부를 클릭할 때 메뉴가 닫히는지 확인                                                           |
| Switch      | 클릭 시 토글                                              | 스위치를 클릭한다                                                                                       | 사용자가 스위치를 클릭할 때 상태가 토글 되는지 확인                                                  |
| Tabs        | 탭을 클릭하면 해당 탭이 활성화된다.                       | role이 tab인 요소를 찾고, 특정 탭을 클릭한다                                                            | 클릭된 탭의 aria-selected 속성이 true 인지 확인한다.                                                 |
|             | 다른 탭을 클릭하면 이전 탭은 비활성화된다.                | 현재 활성화된 탭 이외의 다른 tab 요소를 클릭한다                                                        | 새로 클릭된 탭의 aria-selected 속성이 true로 설정되고, 이전에 활성화된 탭의 속성은 false로 설정된다. |
