import { RefObject } from 'react';

import useEventListener from './useEventListener';
/**
 * 컴포넌트 외부 클릭을 감지하는 훅
 * @param ref 감지할 요소를 참조하는 Ref
 * @param callback 요소 외부 클릭 시 호출되는 함수
 */
export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T | null>, callback: () => void) => {
  useEventListener<MouseEvent>(
    'click',
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    document,
  );
};
