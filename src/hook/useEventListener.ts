import { useEffect, useRef } from 'react';

/**
 * 이벤트 리스너를 추가하는 커스텀 훅
 * @param eventType 이벤트 종류
 * @param callback 이벤트가 발생했을 때 호출되는 함수
 * @param element 이벤트 리스너가 추가될 요소 (기본값: window)
 */
export default function useEventListener<T extends Event>(
  eventType: string,
  callback: (event: T) => void,
  element: HTMLElement | Window | Document | null = window,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;

    const handler = (event: Event) => callbackRef.current(event as T);

    element.addEventListener(eventType, handler);

    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}
