import React from "react"
import styled from "styled-components"

import reactLogo from "../images/techIcons/react.png"
import nextjs from "../images/techIcons/nextjs.png"
import reactSpringLogo from "../images/techIcons/reactspring.png"
import nodejsLogo from "../images/techIcons/nodejs.png"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 2rem 1.5rem;
    border-bottom: 1px solid #E6ECF8;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 3rem 1.5rem;
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.125;
    max-width: 1000px;
    margin: 0 auto;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        font-size: 2rem;
    }
 `}
`

const LogosContainer = styled.div`
  ${({ theme }) => ` 
    padding: 2rem 0 4rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    height: auto;
    
    @media ${theme.device.tablet} {     
      max-width: 1100px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 1.5rem;
    }
    @media ${theme.device.laptop} { 
         
    }
 `}
`
const LogoContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    
    @media ${theme.device.tablet} {     
    
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const Logo = styled.img`
  ${({ theme }) => ` 
    max-width: 100px;
    width: 100%;
    height: 95px;
    border-radius: 12px;
    margin: 0 auto;
    
    @media ${theme.device.tablet} {     
        max-width: 125px;
        height: 110px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const FantasyAssistantTechnologies = () => {
  return (
    <SectionContainer>
      <SectionTitle>Technologies</SectionTitle>
      <LogosContainer>
        <LogoContainer>
          <Logo src={reactLogo} alt="React logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={nextjs} alt="Next.js logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={reactSpringLogo} alt="React Spring logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={nodejsLogo} alt="Node.js logo" />
        </LogoContainer>
      </LogosContainer>
    </SectionContainer>
  )
}

export default FantasyAssistantTechnologies
