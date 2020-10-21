import React from "react"
import styled from "styled-components"

import databaseIcon from "../images/database.svg"
import codeIcon from "../images/coding.svg"
import healthcareIcon from "../images/healthcare.svg"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    margin-top: -12rem;
    padding: 5rem 1.5rem 1rem;
    @media ${theme.device.tablet} {     
      margin-top: -14rem;
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillColumnsContainer = styled.div`
  ${({ theme }) => `
    margin: 0 auto;
    padding-bottom: 1rem;
    background-color: #fff;
    width: auto;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1200px;
    border-radius: 12px;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
    color: #141c3a;
    

    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
      grid-template-columns: 1fr 1fr 1fr;
    }
 `}
`

const SkillColumn = styled.div`
  ${({ theme }) => ` 
    padding: 50px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.middle {
      border-top: 1px solid #E6ECF8;
      border-bottom: 1px solid #E6ECF8;
    }
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
      padding: 60px 35px;
      &.middle {
        border-top: none;
        border-bottom: none;
        border-left: 1px solid #E6ECF8;
        border-right: 1px solid #E6ECF8;

      }
    }
 `}
`

const SkillIcon = styled.img`
  ${({ theme }) => ` 
    height: 64px;
    width: auto;
    margin-bottom: 1em;

    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
      height: 75px;
    }
 `}
`

const SkillTitleContainer = styled.div`
  ${({ theme }) => ` 
    margin-bottom: 1em;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillTitle = styled.h1`
  ${({ theme }) => ` 
    font-size: 1.5rem;
    
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const SkillTitleDescription = styled.p`
  ${({ theme }) => ` 
    font-size: 18px;
    text-align: center;
    vertical-align: baseline;
    font-weight: 300;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle1Container = styled.div`
  ${({ theme }) => ` 
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle1 = styled.p`
  ${({ theme }) => `
    font-size: 18px;
    color: ${theme["brand-color"]};
    text-align: center;
    font-weight: 500;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle1Description = styled.p`
  ${({ theme }) => ` 
    font-size: 18px;
    text-align: center;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle2Container = styled.div`
  ${({ theme }) => ` 
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle2 = styled.p`
  ${({ theme }) => ` 
    font-size: 18px;
    color: ${theme["brand-color"]};
    text-align: center;
    font-weight: 500;
    margin-bottom: 0.5em;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle2List = styled.ul`
  ${({ theme }) => ` 
    list-style: none;
    text-align: center;
    padding: 0;
    margin-top: 0.5em;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillSubtitle2ListItem = styled.li`
  ${({ theme }) => ` 
    margin-top: 0.25em;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SkillsSection = () => {
  return (
    <SectionContainer>
      <SkillColumnsContainer>
        <SkillColumn>
          <SkillIcon src={codeIcon} alt="Code symbol icon" />
          <SkillTitleContainer>
            <SkillTitle>Front-end Developer</SkillTitle>
            <SkillTitleDescription>
              I enjoy building things from scratch and bringing ideas and
              designs to life in the browser.
            </SkillTitleDescription>
          </SkillTitleContainer>
          <SkillSubtitle1Container>
            <SkillSubtitle1>Technologies I like to use:</SkillSubtitle1>
            <SkillSubtitle1Description>
              React, JavaScript, HTML, CSS, Sass
            </SkillSubtitle1Description>
          </SkillSubtitle1Container>
          <SkillSubtitle2Container>
            <SkillSubtitle2>Dev Tools:</SkillSubtitle2>
            <SkillSubtitle2List>
              <SkillSubtitle2ListItem>Gatsby</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Next.js</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Styled Components</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Ant Design</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Material UI</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Bootstrap</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Graphql</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Github</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Serverless Lambda</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Terminal</SkillSubtitle2ListItem>
            </SkillSubtitle2List>
          </SkillSubtitle2Container>
        </SkillColumn>
        <SkillColumn className="middle">
          <SkillIcon src={databaseIcon} alt="Database symbol icon" />
          <SkillTitleContainer>
            <SkillTitle>Database Admin</SkillTitle>
            <SkillTitleDescription>
              Despite having a passion for front-end, I have worked with both
              relational and non-relational databases.
            </SkillTitleDescription>
          </SkillTitleContainer>
          <SkillSubtitle1Container>
            <SkillSubtitle1>Databases I work with:</SkillSubtitle1>
            <SkillSubtitle1Description>
              MongoDB, MySQL, SQL Server, CMS
            </SkillSubtitle1Description>
          </SkillSubtitle1Container>
          <SkillSubtitle2Container>
            <SkillSubtitle2>Database Tools:</SkillSubtitle2>
            <SkillSubtitle2List>
              <SkillSubtitle2ListItem>MongoDB Atlas</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Apollo</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Graphql</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>Azure</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>phpMyAdmin</SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>
                SQL Server Management Studio
              </SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>GraphCMS</SkillSubtitle2ListItem>
            </SkillSubtitle2List>
          </SkillSubtitle2Container>
        </SkillColumn>
        <SkillColumn>
          <SkillIcon src={healthcareIcon} alt="Healthcare symbol icon" />
          <SkillTitleContainer>
            <SkillTitle>Healthcare EDI</SkillTitle>
            <SkillTitleDescription>
              I create solutions that connect healthcare providers and payers by
              automating HIPAA compliant data transfer.
            </SkillTitleDescription>
          </SkillTitleContainer>
          <SkillSubtitle1Container>
            <SkillSubtitle1>Data transfer methods:</SkillSubtitle1>
            <SkillSubtitle1Description>
              REST, SOAP, SFTP/FTP
            </SkillSubtitle1Description>
          </SkillSubtitle1Container>
          <SkillSubtitle2Container>
            <SkillSubtitle2>Transaction Sets:</SkillSubtitle2>
            <SkillSubtitle2List>
              <SkillSubtitle2ListItem>
                837 Health Care Claim
              </SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>
                835 Health Care Claim Payment/Advice
              </SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>
                277 Health Care Information Status
              </SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>
                270 Eligibility/Coverage/Benefit Inquiry
              </SkillSubtitle2ListItem>
              <SkillSubtitle2ListItem>
                271 Eligibility/Coverage/Benefit Info
              </SkillSubtitle2ListItem>

              <SkillSubtitle2ListItem>
                Electronic Visit Verification Submission
              </SkillSubtitle2ListItem>
            </SkillSubtitle2List>
          </SkillSubtitle2Container>
        </SkillColumn>
      </SkillColumnsContainer>
    </SectionContainer>
  )
}

export default SkillsSection
