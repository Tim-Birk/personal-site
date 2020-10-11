import React from "react"
import styled from "styled-components"

import twilioLogo from "../images/twilio.png"
import trizettoLogo from "../images/trizetto.png"
import dohLogo from "../images/nysDOH.png"
import paychexLogo from "../images/paychex.png"
import emednyLogo from "../images/emedny.png"
import streamlineLogo from "../images/streamline.png"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 5rem 1.5rem;
    border-bottom: 1px solid #E6ECF8;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 9rem 1.5rem;
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
    display: flex;
    flex-direction: column;
    height: auto;
    
    
    
    @media ${theme.device.tablet} {     
      padding-top: 4rem;
      max-width: 1200px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
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
  max-width: 225px;
    width: 100%;
    height: 115px;
    border-radius: 12px;
    margin: 0 auto;
    
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const CollaborationSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        I have had the privilege of collaborating with some awesome companies and
        organizations:
      </SectionTitle>
      <LogosContainer>
        <LogoContainer>
          <Logo src={twilioLogo} alt="Twilio logo"/>
        </LogoContainer>
        <LogoContainer>
          <Logo src={trizettoLogo} alt="Trizetto Provider Solutions logo"/>
        </LogoContainer>
        <LogoContainer>
          <Logo src={paychexLogo} alt="Paychex logo"/>
        </LogoContainer>
        <LogoContainer>
          <Logo src={dohLogo} alt="New York State Department of Health logo"/>
        </LogoContainer>
        <LogoContainer>
          <Logo src={emednyLogo} alt="eMedNY logo"/>
        </LogoContainer>
        <LogoContainer>
          <Logo src={streamlineLogo} alt="Streamline Verify logo"/>
        </LogoContainer>
      </LogosContainer>
    </SectionContainer>
  )
}

export default CollaborationSection
