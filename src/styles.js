import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: poppins;
        -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #e0e0e0;
  }

  code {
    font-family: poppins;
  }
`;

export const Container = styled.div`
  text-align: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px; /* Altura do footer */
`;
