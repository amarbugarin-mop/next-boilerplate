import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
  }
`;
export default GlobalStyle;
