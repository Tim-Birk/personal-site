import React from "react"
import styled from "styled-components"

import jsLogo from "../images/techIcons/js.png"
import vbnetLogo from "../images/techIcons/vbnet.png"
import sqlLogo from "../images/techIcons/sql.png"
import sftpLogo from "../images/techIcons/sftp.png"
import hipaaLogo from "../images/techIcons/hipaa.png"
import ediLogo from "../images/techIcons/edi.png"
import restLogo from "../images/techIcons/rest.png"
import phpLogo from "../images/techIcons/php.png"

const SectionContainer = styled.div`
  ${({ theme }) => ` 
    padding: 2rem 1.5rem;
    border-bottom: 1px solid #E6ECF8;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
      padding: 3rem 1.5rem;
    }
 `}
`
const SectionTitle = styled.h1`
  ${({ theme }) => ` 
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.125;
    max-width: 1000px;
    margin: 0 auto;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        font-size: 2rem;
    }
 `}
`

const LogosContainer = styled.div`
  ${({ theme }) => ` 
    padding: 2rem 0 4rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    height: auto;
    
    @media ${theme.device.tablet} {     
      max-width: 1100px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 2rem;
      grid-row-gap: 1.5rem;
    }
    @media ${theme.device.laptop} { 
         
    }
 `}
`
const LogoContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    
    @media ${theme.device.tablet} {     
    
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const Logo = styled.img`
  ${({ theme }) => ` 
    max-width: 100px;
    width: 100%;
    height: 95px;
    border-radius: 12px;
    margin: 0 auto;
    
    @media ${theme.device.tablet} {     
        max-width: 125px;
        height: 110px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const KisitTechnologies = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        Technologies
      </SectionTitle>
      <LogosContainer>
        <LogoContainer>
          <Logo src={jsLogo} alt="Javascript logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={sqlLogo} alt="Microsoft SQL Server logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={vbnetLogo} alt="Visual Basic .NET logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={restLogo} alt="REST API logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={ediLogo} alt="Electronic Data Interchange logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={hipaaLogo} alt="HIPAA logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={sftpLogo} alt="Secure File Transfer Protocol logo" />
        </LogoContainer>
        <LogoContainer>
          <Logo src={phpLogo} alt="PHP logo" />
        </LogoContainer>
      </LogosContainer>
    </SectionContainer>
  )
}

export default KisitTechnologies
