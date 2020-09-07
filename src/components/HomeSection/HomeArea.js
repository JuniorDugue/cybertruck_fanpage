import React from "react";
import { HomeBg, HomeSec, HomeRow, HomeColumn, TextWrapper, HomeContent, CTAbutton } from "./HomeArea.elements";
import { Container } from "../../globalStyles";

const HomeArea = (lightBg, imgStart) => {
  return (
    <>
      <HomeSec lightBg={lightBg}>
        <HomeBg>
          <Container>
            <HomeRow imgStart={imgStart}>
              <HomeColumn>
                <HomeContent>
                  <TextWrapper>
                    <h2>Better Utility than a truck with more performance then a sports car</h2>
                  </TextWrapper>
                  <CTAbutton>Learn More</CTAbutton>
                </HomeContent>
              </HomeColumn>
            </HomeRow>
          </Container>{" "}
        </HomeBg>
      </HomeSec>
    </>
  );
};

export default HomeArea;
