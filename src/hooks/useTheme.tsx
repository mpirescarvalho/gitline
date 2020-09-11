import React, { createContext, useContext } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import usePersistedState from './usePersistedState';

import dark from '../styles/themes/dark';

type Response<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const ThemeContext = createContext<Response<DefaultTheme>>(
  {} as Response<DefaultTheme>
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
