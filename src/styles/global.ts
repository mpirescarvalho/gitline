import { createGlobalStyle } from 'styled-components';
import { THEME } from './theme/colors'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  body {
    -webkit-font-smoothing: antialiased;

    transition: background-color 0.4s;
    background: ${THEME.background};
    min-height: 100vh;
    overflow-x: hidden;

    left: 0;
    right: 0;
  }

  #nprogress .bar {
    background: ${THEME.primary} !important;
    height: 3px !important;
  }

`;
