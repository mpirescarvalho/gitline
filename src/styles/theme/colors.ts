export const COLORS = {
  primary: '#9B1768',
  primaryDark: '#931562',

  secondary: '#087392',
  secondaryDark: '#05566e',

  border: { dark: '#2b2b2b', light: '#dfdfdf' },
  background: { dark: '#1B1B1B', light: '#EEE' },

  box: { dark: '#333', light: '#FFF' },
  boxSecondary: { dark: '#525252', light: '#DADADA' },
  boxInSecondary: '#F1F1F1',

  textPrimary: { dark: '#FFF', light: '#4F4F4F' },
  textSecondary: { dark: '#DADADA', light: '#8E8E8E' },

  textPrimaryInSecondary: '#CBCBCB',
} as const;

export const THEME = Object.keys(COLORS).reduce((prev, curr) => {
  prev[curr] = `var(--${curr})`
  return prev
}, {}) as {
  [key in keyof typeof COLORS]: `var(--${key})`
}

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
