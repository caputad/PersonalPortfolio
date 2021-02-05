import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(0,120,196);
  background: linear-gradient(153deg, rgba(0,120,196,1) 0%, rgba(0,81,168,1) 34%, rgba(0,81,168,1) 55%, rgba(0,120,196,1) 100%);


  @media screen and (max-width: 768px) {
        height: 1600px;
    }
  
    @media screen and (max-width: 480px) {
        height: 1680px;
    }

`;

// export const TargetWrapper = styled.div`
//   max-width: 1600px;
//   align-items: center;

// `;

export const ProjectsWrapper = styled.div`
    max-width: 690px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 26px;
    padding: 0 5px;
    /*justify-content: center;*/
    align-items: center;
    z-index: 2;
    width: 100%;
    
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;     
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 345px;
    }
`;

// export const ProjectsCard = styled.div`
//   font-family: 'Poppins', sans-serif;
//   color: #0D142F;
//   background: #F1F1F1;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   /*border-radius: 15px;*/
//   height: 350px;
//   padding: 0px;
//   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.04);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;

export const ProjectsH1 = styled.h1`
  padding: 3px;
  margin-top: 80px;
  padding-bottom: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: #F1F1F1;

  @media screen and (max-width: 1000px) {
    margin-top: 40px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 2rem;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /*margin-top: 20px;*/
  }
`;


