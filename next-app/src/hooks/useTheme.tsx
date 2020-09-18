import React, { createContext, useContext, useCallback, useState } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import usePersistedState from './usePersistedState';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type Response<T> = [T, () => void];

const ThemeContext = createContext<Response<DefaultTheme>>(
  {} as Response<DefaultTheme>
);

export const ThemeProvider: React.FC = ({ children }) => {
  //TODO: usePersistedState in nextjs app
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
