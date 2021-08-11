import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-size: 62.5%;
      scroll-behavior: smooth;
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
    }
    section {
      font-size: 1.2rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  `}
`;
