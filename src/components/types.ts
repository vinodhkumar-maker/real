// EnumMAp

export type EnumMap<K extends string | number | symbol, T> = {
  [key in K]: T;
};

// Theme Colors

export type Them = 'dark' | 'light';

export type ThemeColorsType = {
  backgroundColor?: string;
  border: string;
  text: string;
};

export const ThemeColors: Record<Them, ThemeColorsType> = {
  light: {
    backgroundColor: 'bg-garay-50',
    border: 'border-gray-300',
    text: 'text-black hover:text-blue-500',
  },
  dark: {
    backgroundColor: ' bg-gray-800',
    border: 'border-gray-700',
    text: 'text-white',
  },
};
