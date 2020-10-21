import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import faLogo from "../images/faLogo.svg"

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
    width: 95px;
    margin: 0 auto;
    @media ${theme.device.tablet} { 
      width: 140px;
        
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
    padding: 1rem 1rem;
    @media ${theme.device.mobileL} {     
      padding: 1rem 2rem;
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
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0 auto;
    padding: 1rem 1rem 0.5rem;
    @media ${theme.device.mobileL} {     
      padding: 1rem 2rem 0.5rem;
    }
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      max-width: 1350px;
    }
 `}
`

const CredentialsText = styled.h3`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 1rem;
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
        <StyledLogo src={faLogo} alt="Logo for Fantasy Rankings Assistant" />
        <SectionTitle>Fantasy Rankings Assistant</SectionTitle>

        <SectionSubtitle>
          The Fantasy Rankings Assistant is a React web application that helps
          fantasy football fans build out their own player rankings cheat sheet
          based on side by side player comparisons. The idea here is that it is
          easier to rank one player over another player in a side by side
          comparison as opposed to trying to rank a larger list of players all
          at once. It helps you to block out the "noise" of other players and
          forces you to focus on the actual comparison in front you. The best
          part is that you don't actually have to manually go through every
          possible 2-player comparison that exists, there is a recursive
          algorithm that makes implied choices as you keep making your picks.
        </SectionSubtitle>

        <CredentialsDescription>For Example:</CredentialsDescription>
        <CredentialsText>If you pick Player A over Player B...</CredentialsText>
        <CredentialsText>
          the players currently ranked <i>ahead</i> of Player A are also ranked
          over Player B and all of the players ranked <i>behind</i> Player B{" "}
        </CredentialsText>
        <ButtonContainer>
          <Button>
            <a href="https://rankings-assistant.vercel.app/" target="blank">
              View Application
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/Tim-Birk/rankings-assistant"
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
