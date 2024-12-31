export const omit = <T extends object, K extends keyof T>(obj: T, keys: ReadonlyArray<K>): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};
