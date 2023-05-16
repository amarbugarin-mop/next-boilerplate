import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};

    font-family: 'Source Sans 3', sans-serif;

}
`;
export default GlobalStyle;
