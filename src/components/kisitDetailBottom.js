import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import billingCenter from "../images/kisit-ui/02billingCenter.png"
import schedulingCenter from "../images/kisit-ui/03schedulingCenter.png"
import agingReport from "../images/kisit-ui/04agingReport.png"
import cashCollections from "../images/kisit-ui/05cashCollections.png"

const uiImages = [billingCenter, schedulingCenter, agingReport, cashCollections]

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
const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.125;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      font-size: 2rem;
    }
 `}
`
const StyledLogo = styled.img`
  ${({ theme }) => ` 
    width: 175px;
    padding-top: 0.58em;
    margin: 0 auto;
    @media ${theme.device.tablet} { 
      width: 235px;
        
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
const ProudList = styled.ul`
  ${({ theme }) => ` 
    margin: 0 auto;
    padding-top: 1.5rem;
    
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} {         
        
    }
 `}
`
const ProudListItem = styled.li`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
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

const KisitDetail = ({ nodes }) => {
  return (
    <SectionContainer>
      <TitleLogoContainer>
        <SectionTitle>
          Some of my contributions I am most proud of include:
        </SectionTitle>
        <ProudList>
          <ProudListItem>
            Building a medical billing system that sends and receives a variety
            of HIPAA compliant 5010 transactions
          </ProudListItem>
          <ProudListItem>
            Fully integrating our payroll component with Paychex
          </ProudListItem>
          <ProudListItem>
            Developing an Electronic Visit Verification (EVV) solution that
            tracks health care workers time and tasks performed offsite
          </ProudListItem>
        </ProudList>
        <SectionSubtitle>
          While the codebase is proprietary and cannot be shared on github,
          please have a look at some screen shots below. If you would like more
          information on this project:
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

export default KisitDetail
