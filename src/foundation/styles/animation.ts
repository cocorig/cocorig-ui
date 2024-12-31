import { keyframes } from '@emotion/react';

export const slide = (direction: 'in' | 'out', distance: string = '-0.5rem') => {
  const translateStart = direction === 'in' ? distance : '0';
  const translateEnd = direction === 'out' ? distance : '0';

  return keyframes`
    0% {
      transform: translate(0, ${translateStart});
    }
    100% {
      transform: translate(0, ${translateEnd});
    }
  `;
};

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
