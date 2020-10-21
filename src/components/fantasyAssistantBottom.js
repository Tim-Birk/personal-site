import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import players from "../images/fa-ui/01players.png"
import playersMobile from "../images/fa-ui/02playersMobile.png"
import cheatSheet from "../images/fa-ui/03cheatSheet.png"
import cheatSheetMobile from "../images/fa-ui/04cheatSheetMobile.png"

const uiImages = [players, playersMobile, cheatSheet, cheatSheetMobile]

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 1.5rem 1.5rem 5rem;
    border-bottom: 1px solid #E6ECF8;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 5rem 1.5rem 8rem;
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
    padding: 2rem 1rem;
    max-width: 1015px;

    @media ${theme.device.mobileL} {     
      padding: 2rem 2rem;
    }
    @media ${theme.device.tablet} {     
      text-align: center;
    }
    @media ${theme.device.laptop} { 
      
    }
 `}
`

const EmailButton = styled.button`
  ${({ theme }) => `
    margin: 0 auto 5rem;
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

const UIImagesContainer = styled.div`
  ${({ theme }) => ` 
    padding: 0 2rem;
    display: grid;
    grid-row-gap: 10px;
    @media ${theme.device.tablet} {     
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      grid-template-rows: 1fr 1fr;
    }
    @media ${theme.device.laptop} {         
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 10px;
      grid-template-rows: 1fr;
    }
 `}
`

const ImageContainer = styled.a`
  ${({ theme }) => ` 
    margin-bottom: 1rem;
    border-radius: 15px;

    .gatsby-image-wrapper {
      border-radius: 5px;
    }
    @media ${theme.device.tablet} {     
      margin-bottom: 0;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const FantasyAssistantBottom = ({ nodes }) => {
  return (
    <SectionContainer>
      <TitleLogoContainer>
        <SectionSubtitle>
          If you would like to learn more about this project:
        </SectionSubtitle>
        <EmailButton>
          <a href="mailto:timbirkmire@yahoo.com" target="blank">
            Email Me
          </a>
        </EmailButton>
      </TitleLogoContainer>
      <UIImagesContainer>
        {nodes.map((node, i) => (
          <ImageContainer href={uiImages[i]}>
            <Img fluid={node.fluid} />
          </ImageContainer>
        ))}
      </UIImagesContainer>
    </SectionContainer>
  )
}

export default FantasyAssistantBottom
