import React from "react";
import { HomeSec, HomeRow, HomeColumn, TextWrapper } from "./HomeArea.elements";
import { Container } from "../../globalStyles";

const HomeArea = (lightBg, imgStart) => {
  return (
    <>
      <HomeSec lightBg={lightBg}>
        <Container>
          <HomeRow imgStart={imgStart}>
            <HomeColumn>
              <TextWrapper>
                <h2>Better Utility than a truck with more performance then a sports car</h2>
              </TextWrapper>
            </HomeColumn>
          </HomeRow>
        </Container>{" "}
      </HomeSec>
    </>
  );
};

export default HomeArea;
