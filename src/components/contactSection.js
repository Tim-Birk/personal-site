import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    background-color: ${theme["brand-color"]};
    color: #fff;
    display: flex;
    padding-bottom: 3rem;
    margin-bottom: -1px;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const ContentContainer = styled.div`
  ${({ theme }) => ` 
    background-color: ${theme["brand-color"]};
    max-width: 1200px;
    width: 80%;
    padding: 1.5rem 1.5rem;
    margin: -5rem auto 0;
    background-color: #141c3a;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
      padding: 3.5rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
        
    }
 `}
`
const ContentItemContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const ContentTitle = styled.h1`
  ${({ theme }) => ` 
    
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const ContentSlogan = styled.p`
  ${({ theme }) => ` 
    text-align: center;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const ContentButton = styled.button`
  ${({ theme }) => `
    margin: 0 auto 0.25rem;
    background: transparent;
    color: #fff;
    padding: 0 1.2rem;
    border-color: ${theme["brand-color"]};
    border-width: 2px;
    border-radius: 290486px;
    outline: none;
    cursor: pointer;
    margin-top: 1rem;

    a {
      text-decoration: none;
      color: inherit;
      line-height: 40px;
      font-size: 1.25rem;
      padding: 1.25em 2em;
    }
  
    &:hover {
      background: ${theme["brand-color"]};
      color: inherit;
      opacity: 90%;
      transition: all 0.35s;
      
    }
   
    @media ${theme.device.tablet} {     
      margin-top: 0;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const ContactSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <ContentItemContainer>
          <ContentTitle>Want to collaborate?</ContentTitle>
        </ContentItemContainer>
        <ContentItemContainer>
          <ContentSlogan>
            Let's chat! I'm always looking for new interesting projects and
            opportunities.
          </ContentSlogan>
        </ContentItemContainer>
        <ContentItemContainer>
          <ContentButton>
            <Link to="/contact">
              <a href="#">Let's talk</a>
            </Link>
          </ContentButton>
        </ContentItemContainer>
      </ContentContainer>
    </SectionContainer>
  )
}

export default ContactSection
