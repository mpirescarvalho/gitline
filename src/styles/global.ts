import { createGlobalStyle } from 'styled-components';

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
    background: var(--background);
    min-height: 100vh;
    overflow-x: hidden;

    left: 0;
    right: 0;
  }

  #nprogress .bar {
    background: var(--primary) !important;
    height: 3px !important;
  }

`;
