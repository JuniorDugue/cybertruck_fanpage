import styled from "styled-components";
import homeBG from "../../images/homeSectionBG.jpg";

export const HomeSec = styled.div`
  /* padding: 160px 0; */
  background: ${({ lightBg }) => (lightBg ? "#fff" : "101522")};
`;

export const HomeBg = styled.div`
  background: url(${homeBG}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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

export const HomeContent = styled.div`
  padding: 168px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media screen and (min-width: 400px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 40px 0;
  color: #fff;

  @media screen and (max-width: 800px) {
    padding: 0 0 65px 0;
  }

  h2 {
    font-size: 4em;
    text-align: center;
  }
`;

export const CTAbutton = styled.button`
  color: #0fd2d8;
  background: none;
  padding: 10px 30px;
  border: 5px solid #fff;
  border-radius: 160px;
  font-size: 4em;
  cursor: pointer;

  &:hover {
    background: #0fd2d8;
    color: #fff;
    border: 5px solid #0fd2d8;
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 400px) {
    width: 100%;
    padding: 10px 20px;
}
`;
