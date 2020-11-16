import React from "react"
import styled from "styled-components"

import kisitLogo from "../images/kisitLogo.png"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 1.5rem 1.5rem 2rem;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 3rem 1.5rem 6rem;
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.125;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding-top: 1.5rem;
      font-size: 2rem;
    }
 `}
`
const StyledLogo = styled.img`
  ${({ theme }) => ` 
    width: 175px;
    margin: 0 auto;
    @media ${theme.device.tablet} { 
      width: 200px;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const TitleLogoContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;

    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const SectionSubtitle = styled.h2`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0 auto;
    text-align: justify;
    padding: 1rem 1rem 2rem;
    @media ${theme.device.mobileL} {     
      padding: 1rem 2rem 1.25rem;
    }
    @media ${theme.device.tablet} {     
        text-align: center;
    }
    @media ${theme.device.laptop} { 
      max-width: 1350px;
    }
 `}
`

const VisitButton = styled.button`
  ${({ theme }) => `
    margin: 1rem auto 0.25rem;
    background: transparent;
    color: ${theme["brand-color"]};
    padding: 0 1.2rem;
    border-color: ${theme["brand-color"]};
    border-width: 2px;
    border-radius: 290486px;
    outline: none;
    cursor: pointer;
    margin-top: 1rem;
    line-height: 40px;
    font-size: 1.25rem;
    
    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      background: ${theme["brand-color"]};
      color: #fff;
      opacity: 90%;
      transition: all 0.35s;
      border-color: transparent;
      
    }
   
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const WebsiteDescription = styled.h3`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0 auto;
    padding: 1.25rem 1rem 2rem;
    @media ${theme.device.mobileL} {     
      padding: 1.25rem 2rem 2rem;
    }
    @media ${theme.device.tablet} {     
      
      font-size: 1rem;
    }
    @media ${theme.device.laptop} { 
      max-width: 1350px;
    }
 `}
`

const KisitDetail = () => {
  return (
    <SectionContainer>
      <TitleLogoContainer>
        <StyledLogo
          src={kisitLogo}
          alt="Logo for Keeping It Simple Information Technology"
        />
        <SectionTitle>Keeping It Simple Information Technology</SectionTitle>

        <SectionSubtitle>
          Keeping It Simple Information Technology (KISIT) is a platform
          developed specifically for home health care providers that performs
          administrative functions including payroll, staff scheduling,
          compliance, billing and more. This is where I have spent the majority
          of my professional career where I transitioned as a project manager
          into a full time programmer. KISIT is currently being used by 2
          licensed home health care providers in New York that service over 500
          patients and staff over 400 employees. To learn more about about
          KISIT, feel free to check out our website:
        </SectionSubtitle>
        <VisitButton>
          <a href="https://www.kisit.io/" target="blank">
            Visit Company Website
          </a>
        </VisitButton>
        <WebsiteDescription>
          *Company website I built using React, JavaScript, Gatsby, HTML, CSS,
          Styled Components and AntDesign
        </WebsiteDescription>
      </TitleLogoContainer>
    </SectionContainer>
  )
}

export default KisitDetail
