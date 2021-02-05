import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const ContactContainer = styled.div`
  background-color: #F0F0F0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  z-index: 1;

  @media screen and (max-width: 375px) {
    height: 750px;
  }
`;

export const ContactContent = styled.div`
  font-family: 'Poppins', sans-serif;
  
`;

export const ContactH1 = styled.h1`
  display: flex;
  font-size: 30px;
  margin-top: 250px;
  margin-bottom: 50px;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 600px) {
    margin-top: 220px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 90px;
  }

  @media screen and (max-width: 375px) {
    font-size: 24px;
    font-size: 28px;
  }
`;

export const ContactIconsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 350px;
  padding: 5px;
  margin-top: 80px;

  @media screen and (max-width: 600px) {
    margin-top: 60px;
    height: 60px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const LinkedinLink = styled(LinkR)`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.04);
    transition: all 0.3s ease-in-out; 
  }
`;

export const EmailLink = styled(LinkR)`
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover {
  transform: scale(1.04);
  transition: all 0.3s ease-in-out; 
}
`;

export const GithubLink = styled(LinkR)`
cursor: pointer;
transition: all 0.5s ease-in-out;

&:hover {
  transform: scale(1.04);
  transition: all 0.3s ease-in-out; 
}
`;

export const SubmitButton = styled.button`
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  padding: 10px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  /*color: #F1F1F1;*/
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #DDDD;
    transition: all 0.5s ease-in-out; 
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 360px;
  background-color: #f1f1f1;
  overflow: auto;

  @media screen and (max-width: 375px) {
    width: 300px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;
