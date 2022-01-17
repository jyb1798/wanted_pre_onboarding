import { createGlobalStyle } from "styled-component";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
