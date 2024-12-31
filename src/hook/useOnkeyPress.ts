import { useEffect } from 'react';
type Key =
  | 'Enter'
  | 'Tab'
  | 'Escape'
  | 'Backspace'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'Meta'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | (string & {});
type UseOnKeyPressProps = {
  callback: () => void;
  targetKey: Key;
};

export const useOnKeyPress = ({ callback, targetKey }: UseOnKeyPressProps) => {
  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === targetKey) {
        callback();
      }
      event.preventDefault();
    };

    window.addEventListener('keypress', keyPressHandler);
    return () => {
      window.removeEventListener('keypress', keyPressHandler);
    };
  }, [callback, targetKey]);
};
