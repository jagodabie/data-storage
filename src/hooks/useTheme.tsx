import { useState, useEffect } from 'react';
import { blackTheme, customTheme, whiteTheme } from '../const';

type UseTheme = {
  theme: Theme;
  toggleTheme: () => void;
  themesStyles: (theme: Theme) => void;
};
export type Theme = 'light' | 'dark';

const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Theme>(customTheme.light);
  const themesStyles = (theme: Theme) => (theme === customTheme.light ? whiteTheme : blackTheme);

  const toggleTheme = () => {
    if (theme === customTheme.light) {
      window.localStorage.setItem('theme', customTheme.dark);
      setTheme(customTheme.dark);
    } else {
      window.localStorage.setItem('theme', customTheme.light);
      setTheme(customTheme.light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    themesStyles(theme);
  }, [theme]);

  return { theme, toggleTheme, themesStyles };
};

export default useTheme;
