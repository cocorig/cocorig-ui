export type BreakpointsToken = 'sm' | 'md' | 'lg';

export const BREAKPOINTS_SET: Record<BreakpointsToken, string> = {
  sm: '@media (max-width: 767px)',
  md: '@media (min-width:768px) and (max-width: 1023px)',
  lg: '@media (min-width: 1024px)',
} as const;
