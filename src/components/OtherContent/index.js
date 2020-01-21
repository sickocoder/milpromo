import React from "react";

import { Container, PageBanner } from "./styles";
import { AllMusicSection, Music } from "./../Content/style";

import drakeImage from "./../../assets/drake.png";
import davidoImage from "./../../assets/davido.jpg";

export default function OtherContent() {
  return (
    <>
      <PageBanner title="Top Mensal" />
      <Container>
        <div className="sectionTitle">O que mais bate neste mês...</div>
        <AllMusicSection>
          <a href="/music">
            <Music>
              <img src={drakeImage} alt="sddf" />
              <footer>
                <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                <span>ha 2d</span>
              </footer> 
            </Music>
          </a>
          <a href="/music">
            <Music>
              <img src={davidoImage} alt="sddf" />
              <footer>
                <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                <span>ha 2d</span>
              </footer> 
            </Music>
          </a>
        </AllMusicSection>
      </Container>
    </>
  );
}