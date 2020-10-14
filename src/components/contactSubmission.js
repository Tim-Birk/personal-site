import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import myAvatar from "../images/myAvatar2.svg"

const SectionContainer = styled.div`
  ${({ theme }) => `
    border-top: 1px solid #E6ECF8;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.device.tablet} {     
        margin-top: 2em;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const StyledAvatar = styled.img`
  ${({ theme }) => ` 
    width: 75px;
    margin-top: -3em;
    @media ${theme.device.tablet} { 
      width: 95px;
      margin-top: -3.25em;
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => `
    line-height: 1.125;
    font-size: 1.85rem;
    font-weight: 300;
    max-width: 965px;
    margin: 1.5em 1.5em 0.75em;
    @media ${theme.device.tablet} {     
        font-size: 2.85rem;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const SectionSubtitle = styled.h1`
  ${({ theme }) => `
    line-height: 1.125;
    font-size: 1rem;
    font-weight: 300;
    max-width: 965px;
    margin: 0 1.5em 3em;
    @media ${theme.device.tablet} {     
        font-size: 2rem;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const StyledButton = styled.button`
  ${({ theme }) => `
    margin: 0 auto 0.25rem;
    background: transparent;
    color: ${theme["brand-color"]};
    padding: 0 1.2rem;
    border-color: ${theme["brand-color"]};
    border-width: 2px;
    border-radius: 290486px;
    outline: none;
    cursor: pointer;
    margin-bottom: 8rem;
    line-height: 40px;
    font-size: 1.25rem;
    
    &:hover {
      background: ${theme["brand-color"]};
      color: #fff;
      opacity: 90%;
      transition: all 0.35s;
      
    }
   
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const ContactSubmission = () => {
  return (
    <SectionContainer>
      <StyledAvatar src={myAvatar} />
      <SectionTitle>Thank you!</SectionTitle>
      <SectionSubtitle>
        I will do my best to get back to you within the next 48 hours.
      </SectionSubtitle>
      <Link to="/">
        <StyledButton>Go Back</StyledButton>
      </Link>
    </SectionContainer>
  )
}

export default ContactSubmission
