import { black } from './black';
import { blue } from './blue';
import { gray } from './gray';
import { green } from './green';
import { indigo } from './indigo';
import { orange } from './orange';
import { pink } from './pink';
import { purple } from './purple';
import { red } from './red';
import { teal } from './teal';
import { transparent } from './transparent';
import { white } from './white';
import { yellow } from './yellow';

// 객체의 키를 뽑아 유니온 타입으로 만들고 싶을 때
export type ColorsToken = keyof typeof COLOR_SET;

export const COLOR_SET = {
  black,
  white,
  blue,
  green,
  red,
  orange,
  gray,
  yellow,
  pink,
  indigo,
  teal,
  purple,
  transparent,
};
export * from './black';
export * from './white';
export * from './blue';
export * from './green';
export * from './red';
export * from './orange';
export * from './gray';
export * from './yellow';
export * from './pink';
export * from './indigo';
export * from './teal';
export * from './purple';
export * from './transparent';
