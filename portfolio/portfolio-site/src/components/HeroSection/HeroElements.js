import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

/* background-color: #D0FFF; */
export const HeroContainer = styled.div`
background: rgb(241,241,241);
background: linear-gradient(173deg, rgba(241,241,241,1) 0%, rgba(236,242,249,1) 50%, rgba(241,241,241,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  font-family: "Poppins", sans-serif;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  height: 450px;
`;

export const HeroBg = styled.div`
  background: #1b202c;
  height: 100%;
`;

export const HeroH1 = styled.h1`
  color: #0d142f;
  font-size: 64px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.p`
  margin-top: 0px;
  color: #0d142f;
  font-size: 28px;
  text-align: center;
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ScrollBtnWrapper = styled(LinkS)`
  margin-top: 50px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 16px;
`;
