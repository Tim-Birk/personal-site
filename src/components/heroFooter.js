import React from "react"
import styled from "styled-components"

import heroSvg from "../images/computer2.svg"

const MainContainer = styled.div`
  ${({ theme }) => ` 
    padding: 0rem 1.5rem;
    flex-grow: 0;
    flex-shrink: 0;
    @media ${theme.device.tablet} { 
        
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    flex-grow: 1;
    margin: 0 auto;
    width: auto;
    position: relative;
    text-align: center;
    @media ${theme.device.tablet} { 
        
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const StyledSvg = styled.img`
  ${({ theme }) => ` 
    margin-bottom: -1.2rem;
    max-width: 675px;
    width: 100%;
    height: auto;
    @media ${theme.device.tablet} { 
        
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const HeroFooter = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <StyledSvg src={heroSvg} alt="Wire illustration of a desk and monitors"/>
      </SectionContainer>
    </MainContainer>
  )
}

export default HeroFooter
