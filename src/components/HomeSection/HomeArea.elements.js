import styled from "styled-components";

export const HomeSec = styled.div`
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "101522")};
`;

export const HomeRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const HomeColumn = styled.div`
  margin: 0 0 15px 0;
  padding: 0 15px 0 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 60px 0;

  @media screen and (max-width: 800px) {
    padding: 0 0 65px 0;
  }
`;
