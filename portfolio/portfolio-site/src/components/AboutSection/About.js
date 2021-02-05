import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutH1,
  AboutP,
  ContactLink,
  SkillsWrapper,
  Skills,
  SkillsH2,
  SkillsIcons,
  SkillsP,
  Html5Logo,
  Css3Logo,
  JSLogo,
  BSLogo,
  CSLogo,
  Reactlogo,
  GitLogo,
} from "./AboutElements";
import Tooltip from "@material-ui/core/Tooltip";
import ReactHtmlParser from "react-html-parser";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
//import { animateScroll as scroll } from 'react-scroll';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

const About = (props) => {
  let content = {
    English: {
      header1: "About me",
      header2: "Skills",
      paragraphs: `<p>My name is Daniel Čaputa and I am a developer based in Ostrava, Czechia.
            Currently looking for full-time roles that would allow me to contribute to building great projects in a collaborative environment.<p><br>
            <p>I mostly focus on web development, however I'm interested in many different areas including software engineering, UX/UI design, mobile app development and many others.</p>
            <br>
            <p>When I'm not coding or learning you can find me playing the guitar,  drawing, cycling, playing or watching a team sport or doing something else.</p><br>
            If you'd like to work together or have any questions, check out the `,
      contactL: "Contact",
      paragraphEnd: " section below.",
      skills: "I've also done some small projects with:<p>Java, PHP, Python, VB.NET, JQuery, PL/SQL, Entity & Spring frameworks, Selenium & SpecFlow, Sass, Typescript, Node.js, etc.</p>",
    },
    Czech: {
      header1: "O mně",
      header2: "Znalosti",
      paragraphs: `<p>Jmenuji se Daniel Čaputa a jsem vývojář z Ostravy.
            V současné době hledám práci na plný úvazek, kde bych se v týmu mohl podílet na vývoji zajímavých projektů.</p><br>
            <p>Nejvíce se zaměřuji na web development a postupně získávám přehled a zkušenosti jak ve front-end tak i v back-end technologiích. Zajímám se také o vývoj softwaru, UX/UI design, mobile app development a mnoho dalších.</p><br>
            <p>Když se zrovna nevěnuji kódu nebo sebevzdělávání, můžete mě zastihnout například při hře na kytaru, u kresby, při jízdě na kole, při hraní nebo sledování kolektivních sportů a podobně.</p> 
            <br>
            Pokud máte zájem o nějakou formu spolupráce, dejte mi vědět v `,
      contactL: "Kontakt",
      paragraphEnd: " sekci níže.",
      skills: "Pro několik zkušebních projektů jsem používal i: <p>Java, PHP, Python, VB.NET, JQuery, Xamarin, PL/SQL, Entity & Spring frameworks, Selenium & SpecFlow, Sass, Typescript, Node.js, atd.</p>",
    },
  };

  props.language === "English"
  ? (content = content.English)
  : (content = content.Czech);

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutContent>
          <ScrollAnimation animateIn='animate__flipInX' delay="10">
            <AboutH1>{content.header1}</AboutH1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeIn' delay="20">
            <AboutP>
              {ReactHtmlParser(content.paragraphs)}
              <ContactLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {content.contactL}
              </ContactLink>
              {content.paragraphEnd}
            </AboutP>
            </ScrollAnimation>
          </AboutContent>
        </AboutWrapper>
        <ScrollAnimation animateIn='animate__flipInX' delay="10">
        <SkillsH2>{content.header2}</SkillsH2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__fadeIn' delay="20">
        <SkillsWrapper>
          <Skills>
            <SkillsIcons>
              <LightTooltip title="React" placement="top">
                <Reactlogo />
              </LightTooltip>
              <LightTooltip title="Javascript" placement="top">
                <JSLogo />
              </LightTooltip>
              <LightTooltip title="HTML5" placement="top">
                <Html5Logo />
              </LightTooltip>
              <LightTooltip title="CSS3" placement="top">
                <Css3Logo />
              </LightTooltip>
              <LightTooltip title="Bootstrap" placement="top">
                <BSLogo />
              </LightTooltip>
              <LightTooltip title="Csharp" placement="top">
                <CSLogo />
              </LightTooltip>
              <LightTooltip title="Git" placement="top">
                <GitLogo />
              </LightTooltip>
            </SkillsIcons>
          </Skills>         
          <SkillsP>{ReactHtmlParser(content.skills)}</SkillsP>
        </SkillsWrapper>
          </ScrollAnimation>         
      </AboutContainer>
    </>
  );
};

export default About;
