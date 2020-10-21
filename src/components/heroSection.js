import React from "react"
import styled from "styled-components"

import myAvatar from "../images/timAvatar.svg"


const SectionContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    @media ${theme.device.tablet} { 
      padding: 3rem 3rem 2.75rem;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const Column = styled.div`
  ${({ theme }) => ` 
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.device.tablet} { 
        padding: 3rem 1.5rem;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    word-break: break-word;
    font-size: 2rem;
    @media ${theme.device.tablet} { 
      font-size: 2.5rem;
        
    }
    @media ${theme.device.laptop} { 
      font-size: 3rem;
    }
 `}
`
const SectionSlogan = styled.p`
  ${({ theme }) => ` 
    text-align: center; 
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 3rem; 
    letter-spacing: 1px; 
    @media ${theme.device.tablet} { 
      font-size: 1.5rem;
      margin-bottom: 1.5rem; 
    }
    @media ${theme.device.laptop} { 

    }
 `}
`
const StyledAvatar = styled.img`
  ${({ theme }) => ` 
    width: 175px;
    padding-top: 0.58em;
    @media ${theme.device.tablet} { 
      width: 235px;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const HeroSection = () => {
  return (
    <SectionContainer>
      <Column>
        <SectionTitle>React Web Developer</SectionTitle>
        <SectionSlogan>
          I build beautiful, responsive websites and user interfaces.
        </SectionSlogan>
        <StyledAvatar src={myAvatar} alt="Animated avatar of Tim Birkmire"/>
      </Column>
    </SectionContainer>
  )
}

export default HeroSection
