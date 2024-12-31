export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;
