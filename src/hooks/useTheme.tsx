import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../styles/theme/colors';

type Response<T> = [T, () => void];

const ThemeContext = createContext<Response<string>>({} as Response<string>);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, rawSetTheme] = useState<string>(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetTheme(initialColorValue);
  }, []);

  const contextValue = React.useMemo<Response<string>>(() => {
    function toggleTheme() {
      const root = window.document.documentElement;

      const newTheme = theme === 'light' ? 'dark' : 'light';

      localStorage.setItem(COLOR_MODE_KEY, newTheme);

      Object.entries(COLORS).forEach(([name, value]) => {
        const cssVarName = `--${name}`;

        const color = typeof value === 'object' ? value[newTheme] : value;

        root.style.setProperty(cssVarName, color);
      });

      rawSetTheme(newTheme);
    }

    return [theme, toggleTheme];
  }, [theme, rawSetTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
