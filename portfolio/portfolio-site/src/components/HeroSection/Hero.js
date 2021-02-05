import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  ScrollBtnWrapper,
  ArrowDown,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const HeroSection = (props) => {
let content = {
  English: {
    header: "Hello, I'm Daniel",
    paragraph: "Web developer | Programmer | Designer",
    button: "view more",
  },
  Czech: {
    header: "Ahoj, jsem Daniel",
    paragraph: "Web developer | Programátor | Designer",
    button: "více info",
  },
};
  props.language === "English"
    ? (content = content.English)
    : (content = content.Czech);

  return (
    <>
      <HeroBg />
      <HeroContainer>
        <HeroContent>
        <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" delay="50">
          <HeroH1>{content.header}</HeroH1>
          <HeroP>{content.paragraph}</HeroP>          
          <ScrollBtnWrapper>
            <Button
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {content.button}
              <ArrowDown />
            </Button>
          </ScrollBtnWrapper>
          </ScrollAnimation>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
