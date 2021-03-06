import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  max-width: 100%;
}

html{
  font-size: 62.5%;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 800px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#0fd2d8" : "#121014")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#121014" : "#0fd2d8")};
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export default GlobalStyle;
