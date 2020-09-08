import React from "react";
import { HomeBg, HomeSec, HomeRow, HomeColumn, TextWrapper, HomeContent, CTAbutton, YoutubePreview, ParentColumn } from "./HomeArea.elements";
import { Container } from "../../globalStyles";
import ReactPlayer from "react-player/youtube";

const HomeArea = (lightBg, imgStart) => {
  return (
    <>
      <HomeSec lightBg={lightBg}>
        <HomeBg>
          <Container>
          
              <HomeRow imgStart={imgStart}>
                <HomeColumn>
                <ParentColumn>
              <YoutubePreview>
                <ReactPlayer url="https://www.youtube.com/watch?v=9P_1_oLGREM" width="100%" height="100%" />
              </YoutubePreview>
                  <HomeContent>
                    <TextWrapper>
                      <h2>Better Utility than a truck with more performance then a sports car</h2>
                    </TextWrapper>
                    <CTAbutton>Learn More</CTAbutton>
                  </HomeContent>
                  </ParentColumn>

                </HomeColumn>
              </HomeRow>
          </Container>{" "}
        </HomeBg>
      </HomeSec>
    </>
  );
};

export default HomeArea;
