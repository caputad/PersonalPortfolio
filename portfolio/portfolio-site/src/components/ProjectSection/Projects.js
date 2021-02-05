import React from 'react';
import PortfolioCard from './PortfolioCard.js';
import SecondCard from './SecondCard.js';
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsImg, ProjectsH2 } from './ProjectElements';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Projects = (props) => {
  let content = {
  English: {
    header: "Projects",
    project1: "Personal portfolio",
  },
  Czech: {
    header: "Projekty",
    project1: "Osobní portfolio",
  },
};

props.language === "English"
? (content = content.English)
: (content = content.Czech);

  return (
    <ProjectsContainer id="projects">
      <ScrollAnimation animateIn="animate__flipInX" animateOut="animate__fadeOut" delay="20">               
      <ProjectsH1>{content.header}</ProjectsH1>
      </ScrollAnimation>
      <ProjectsWrapper>
        <PortfolioCard />
        <SecondCard />
      </ProjectsWrapper>      
    </ProjectsContainer>
  );
};

export default Projects;
