import React from "react"
import styled from "styled-components"
import ProjectCard from "./projectCard"

import kisitLogo from "../images/kisitCard.png"
import hhcmsCard from "../images/hhcmsCard.png"
import fraCard from "../images/fraCard.png"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 5rem 1.5rem 3rem;
    border-bottom: 1px solid #E6ECF8;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 9rem 1.5rem 6rem;
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

const SectionSubtitle = styled.h2`
  ${({ theme }) => ` 
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5;
    
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const CardsContainer = styled.div`
  ${({ theme }) => ` 
    padding: 2rem 0 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: auto;
    
    
    
    @media ${theme.device.tablet} {     
      padding-top: 4rem;
    }
    @media ${theme.device.laptop} { 
      max-width: 1200px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem; 
    }
 `}
`

const RecentWorkSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>My Recent Work</SectionTitle>
      <SectionSubtitle>
        Here are a few projects I have recently worked on.
      </SectionSubtitle>
      <CardsContainer>
        <ProjectCard
          imgUrl={kisitLogo}
          title="Keeping It Simple Information Technology"
          description="A complete practice management solution for Home Health Care Providers."
          url="https://www.kisit.io/"  
        />
        <ProjectCard
          imgUrl={hhcmsCard}
          title="Home Health Care Management System"
          description="A demo of the KISIT platform recreated using React, Next.js, GraphQL and Ant Design."
          url="https://home-health-care-management-system.vercel.app/"  
        />
        <ProjectCard
          imgUrl={fraCard}
          title="Fantasy Rankings Assistant"
          description="A fantasy football rankings generator based on player versus player comparisons (just for fun)."
          url="https://rankings-assistant.vercel.app/"
        />
      </CardsContainer>
    </SectionContainer>
  )
}

export default RecentWorkSection
