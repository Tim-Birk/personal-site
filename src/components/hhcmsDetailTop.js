import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import hhcmsLogo from "../images/hhcmsLogo.svg"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 1.5rem 1.5rem 2rem;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 2rem 1.5rem 6rem;
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
    width: 150px;
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

const ButtonContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    margin: 1rem auto;

    @media ${theme.device.mobileL} {     
    
    }
    @media ${theme.device.tablet} {     
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media ${theme.device.laptop} { 
    
    }
 `}
`

const Button = styled.button`
  ${({ theme }) => `
    margin: 0.75rem auto 0;
    background: transparent;
    color: ${theme["brand-color"]};
    padding: 0 1.2rem;
    border-color: ${theme["brand-color"]};
    border-width: 2px;
    border-radius: 290486px;
    outline: none;
    cursor: pointer;
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

const CredentialsDescription = styled.h3`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0 auto;
    padding: 1rem 1rem 0.5rem;
    @media ${theme.device.mobileL} {     
      padding: 1rem 2rem 0.5rem;
    }
    @media ${theme.device.tablet} {     
      
      font-size: 1rem;
    }
    @media ${theme.device.laptop} { 
      max-width: 1350px;
    }
 `}
`

const CredentialsText = styled.h3`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0 auto;
    padding: 0 1rem 0;
    @media ${theme.device.mobileL} {     
      padding: 0 2rem 0;
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
          src={hhcmsLogo}
          alt="Logo for Home Health Care Management System"
        />
        <SectionTitle>Home Health Care Management System</SectionTitle>

        <SectionSubtitle>
          Home Health Care Management System (HHCMS) is a fullstack web
          application I developed in React and Next.js. The application is
          essentially a redesigned prototype of the{" "}
          <Link to="/kisit">KISIT</Link> platform I work on in my fulltime job
          for{" "}
          <a href="https://www.kisit.io/">
            Keeping It Simple Information Technology
          </a>
          . This project served as a way for me to display my skills in
          designing fully functional, responsive and cross-browser compatible
          user interfaces using enterprise-class React components from{" "}
          <a href="https://ant.design/">Ant Design</a>.
        </SectionSubtitle>

        <CredentialsDescription>
          Credentials for a populated demo of the application:
        </CredentialsDescription>
        <CredentialsText>username: hiretimbirkmire@yahoo.com</CredentialsText>
        <CredentialsText>pw: Strongpassword123#</CredentialsText>
        <ButtonContainer>
          <Button>
            <a
              href="https://home-health-care-management-system.vercel.app/"
              target="blank"
            >
              View Application
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/Tim-Birk/Home-Health-Care-Management-System"
              target="blank"
            >
              View GitHub
            </a>
          </Button>
        </ButtonContainer>
      </TitleLogoContainer>
    </SectionContainer>
  )
}

export default KisitDetail
