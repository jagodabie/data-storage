export const blackTheme = {
  colors: {
    background: '#000',
    text: '#fff',
  },
  borders: {
    color: '#fff',
  },
};

export const whiteTheme = {
  colors: {
    background: '#fff',
    text: 'rgba(64, 64, 64, 0.9)',
  },
  borders: {
    color: 'rgba(64, 64, 64, 0.4)',
  },
};

export type Theme = 'light' | 'dark';

export const customTheme: { light: Theme; dark: Theme } = {
  light: 'light',
  dark: 'dark',
};
