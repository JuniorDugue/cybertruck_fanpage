import styled, {createGlobalStyle} from "styled-components";

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
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 768px){
    padding: 0 30px;
  }
`

export default GlobalStyle