import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryDark: string;

      secondary: string;
      secondaryDark: string;

      border: string;
      background: string;

      box: string;
      boxSecondary: string;
      boxInSecondary: string;

      textPrimary: string;
      textSecondary: string;

      textPrimaryInBackground: string;
      textSecondaryInBackground: string;

      textPrimaryInSecondary: string;
    };
  }
}
