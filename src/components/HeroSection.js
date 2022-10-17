import React from "react";
import {HeroImg, HeroText, Herocont} from "../styles/heroStyles";

function HeroSection() {
  return (
    <>
      <Herocont>
        <HeroText>
          Manage and contact your service providers by simply tapping your
          phone!
        </HeroText>
        <HeroImg src="/heroimg.png" />
      </Herocont>
    </>
  );
}

export default HeroSection;
