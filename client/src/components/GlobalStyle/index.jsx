import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
:root {
  box-sizing: border-box;
  
}
*,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: 'Caveat', cursive;
  }

`;
export default GlobalStyle;