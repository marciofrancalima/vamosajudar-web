import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* COLORS */
    --color-primary-light: #f4eeff;
    --color-primary-dark: #424874;
    --color-secondary: #a6b1e1;
    --color-text: #41414d;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 62.5%; /*1 rem = 10px */
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    box-sizing: border-box;
    background-color: var(--color-primary-light);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
