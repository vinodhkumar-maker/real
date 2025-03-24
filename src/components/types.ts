// EnumMAp

export type EnumMap<K extends string | number | symbol, T> = {
  [key in K]: T;
};
