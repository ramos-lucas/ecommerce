import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-primary);
    color: var(--color-black);
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Montserrat,Arial,sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
  }
  :root {
    --color-primary: #F5F5F5;
    --color-black: #333;
    --color-gray: #777;
    --color-white: #FFF;
    --color-red: #FA5555;
    --color-green: #2ECC71;
    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;
