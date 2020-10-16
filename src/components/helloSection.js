import React from "react"
import styled from "styled-components"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    background-color: ${theme["brand-color"]};
    color: #fff;
    padding: 9rem 1rem 11rem;
    @media ${theme.device.tablet} {     
      padding-bottom: 18rem;
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => `
    margin-bottom 1.5rem;
    font-size: 1.5rem;
    line-height: 1.125;
     
    @media ${theme.device.tablet} {     
      font-size: 2rem;
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SectionSubtitle = styled.h2`
  ${({ theme }) => ` 
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem;
    margin: 0 auto;
    @media ${theme.device.tablet} {     
      max-width: 700px;
    }
    @media ${theme.device.laptop} { 
      max-width: 850px; 
    }
 `}
`

const HelloSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Hello I'm Tim.  Nice to meet you.</SectionTitle>
      <SectionSubtitle>
        I have been working in the Healthcare industry for over 10 years and
        possess a broad range of experience including web development,
        software development, project management and consulting. About 4 years
        ago, I developed a passion for front-end web development and began
        investing my time into learning web-based technologies. Since then, I
        have been building websites, web applications and other projects-- some
        of which I have incorporated into my professional career and others that
        I hope to share with you here!
      </SectionSubtitle>
    </SectionContainer>
  )
}

export default HelloSection
