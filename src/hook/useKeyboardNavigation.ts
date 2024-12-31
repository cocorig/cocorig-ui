import { useCallback } from 'react';

interface UseKeyboardNavigationProps<T> {
  itemRef: React.MutableRefObject<T[]>;
  currentIndex: number;
  onSelect: (value?: string) => void;
  onReset: () => void;
}

export const useKeyboardNavigation = <T extends HTMLElement>({
  currentIndex,
  itemRef,
  onSelect,
  onReset,
}: UseKeyboardNavigationProps<T>) => {
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const totalItems = itemRef.current.length;
      if (!totalItems) return;

      const keyMap: Record<string, () => void> = {
        ArrowDown: () => {
          const nextIndex = (currentIndex + 1) % totalItems;
          itemRef.current[nextIndex]?.focus();
        },
        ArrowUp: () => {
          const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
          itemRef.current[prevIndex]?.focus();
        },
        Enter: () => {
          const selectedValue = itemRef.current[currentIndex]?.dataset?.value;
          if (selectedValue) {
            onSelect(selectedValue);
          } else {
            onSelect();
          }
        },
        Escape: () => {
          onReset();
        },
      };

      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action();
      }
    },
    [itemRef, currentIndex, onSelect, onReset],
  );

  return { onKeyDown };
};
