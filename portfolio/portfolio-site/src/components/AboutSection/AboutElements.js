import styled from 'styled-components';
import {Html5, Css3, Javascript, Bootstrap, ReactLogo, Git} from '@styled-icons/boxicons-logos';
import {Csharp} from '@styled-icons/simple-icons/Csharp';
import { Link as LinkS } from 'react-scroll';


export const AboutContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background: rgb(11,14,33);
    background: linear-gradient(166deg, rgba(11,14,33,1) 0%, rgba(11,14,31,1) 36%, rgba(4,6,17,1) 70%);
    color: #f1f1f1;
    height: 100vh;

    @media screen and (max-width: 768px) {
        padding: 10px 0;
        height: 1080px;
    }

    @media screen and (max-width: 458px) {
        height: 1280px;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    z-index: 1;
    height: 420px;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        /*grid-template-columns: 1fr;*/        
    }   

    @media screen and (max-width: 768px) {
        height: 550px;      
    } 

    @media screen and (max-width: 564px) {
        height: 600px;      
    } 

    @media screen and (max-width: 458px) {
        height: 700px;      
    } 

    @media screen and (max-width: 375px) {
        height: 750px;
    }
`;

export const AboutContent = styled.div`
    padding-top: 50px;
    margin: 0 auto;

    @media screen and (max-width: 375px) {

    }
`;

//ABOUT ME TEXT 
export const AboutH1 = styled.h1`
    font-height: 24px;
    color: #F1F1F1;
    padding-bottom: 3px;
    text-align: center;

`;

export const AboutP = styled.p`
    padding-top: 10px;
    font-height: 14px;
    width: 80%;
    margin: 0 auto;
    color: hsl(222,17%,80%);
`;

export const ContactLink = styled(LinkS)`
    cursor: pointer;
    text-decoration: underline;
`;


//SKILLS SECTION WITH ICONS
export const SkillsH2 = styled.h1`
    display: grid;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    font-height: 24px;
    font-color: #F1F1F1;
    margin-top: 80px;

    @media screen and (max-width: 600px) {
        margin-top: 135px;
    }

    @media screen and (max-width: 465px) {
        margin-top: 170px;
        margin-bottom: 15px;
    }

    @media screen and (max-width: 380px) {
        margin-top: 60px;
    }
`;

export const SkillsWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 180px;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    @media screen and (max-width: 468px) {
        height: 200px;
    }
    @media screen and (max-width: 375px) {
        height: 250px;
    }
`;
//Skills container
export const Skills = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 90%;

    @media screen and (max-width: 468px) {
        height: 60px;
    }

    @media screen and (max-width: 380px) {
        margin-bottom: 20px;
    }
`;


export const SkillsP = styled.p`
    text-align: center;
    font-height: 14px;
    padding: 0px; 
    justify-content: center;
    align-items: center;
    color: hsl(222,17%,80%);
    max-width: 1000px;
    width: 80%;
`;
//Icons container
export const SkillsIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-width: 1000px;
    padding-top: 10px; 
    width: 65%;
    height: 100px;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;
//Invidivual icons
export const Html5Logo = styled(Html5)`
    width: 50px;
    height: 50px;
    color: #E65100;
`;

export const Css3Logo = styled(Css3)`
    width: 50px;
    height: 50px;
    color: #0277BD;
`;

export const JSLogo = styled(Javascript)`
    width: 50px;
    height: 50px;
    color: rgb(255,214,0);
`;

export const BSLogo = styled(Bootstrap)`
    width: 50px;
    height: 50px;
    color: rgb(103,58,183);
`;

export const CSLogo = styled(Csharp)`
    width: 40px;
    height: 40px;
    color: #546E7A;
`;

export const Reactlogo = styled(ReactLogo)`
    width: 50px;
    height: 50px;
    color: #5ED3F3;
`;

export const GitLogo = styled(Git)`
    width: 50px;
    height: 50px;
    color: red;
`;