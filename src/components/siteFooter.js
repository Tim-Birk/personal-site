import React from "react"
import styled from "styled-components"

import logo from "../images/tb_logo3_white.png"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import email from "../images/email.svg"

const Footer = styled.footer`
  ${({ theme }) => ` 
    background: ${theme["brand-color"]};
    padding: 1.5rem 0 4rem;
    width: 100%;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const SectionContainer = styled.div`
  ${({ theme }) => ` 
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const LogoContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    width: 72px;
    height: 60px;
    @media ${theme.device.tablet} {     
    
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const StyledLogo = styled.img`
  ${({ theme }) => ` 
    width: 100%;
    padding-top: 0.58em;
    
    @media ${theme.device.tablet} { 
        
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const FooterSlogan = styled.h1`
  ${({ theme }) => ` 
    color: #fff;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 2rem auto;
    max-width: 300px;
    opacity: 0.7;
    @media ${theme.device.tablet} {     
      
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const SocialLinksContainer = styled.div`
  ${({ theme }) => ` 
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 185px;
    margin: 1rem auto 3rem;
    @media ${theme.device.tablet} { 
        
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const SocialLink = styled.a`
  ${({ theme }) => ` 
    
    @media ${theme.device.tablet} { 
        
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const SocialIcon = styled.img`
  ${({ theme }) => ` 
    width: 24px;
    padding-top: 0.58em;
    
    &:hover {
        transition: all 0.3s ease 0s;
        transform: scale(1.25) translateZ(0);
    }
    @media ${theme.device.tablet} { 
        width: 28px;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const Copyright = styled.p`
  ${({ theme }) => ` 
    font-weight: 300;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 2em;
    @media ${theme.device.tablet} { 
        margin-bottom: 0;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`
const SiteFooter = () => {
  return (
    <Footer>
      <SectionContainer>
        <LogoContainer>
          <StyledLogo src={logo} />
        </LogoContainer>

        <FooterSlogan>Let's build something together.</FooterSlogan>
        <SocialLinksContainer>
          <SocialLink
            href="https://www.linkedin.com/in/timothy-birkmire-765252115/"
            target="blank"
          >
            <SocialIcon src={linkedin} />
          </SocialLink>
          <SocialLink href="https://github.com/Tim-Birk" target="blank">
            <SocialIcon src={github} />
          </SocialLink>
          <SocialLink href="mailto:timbirkmire@yahoo.com" target="blank">
            <SocialIcon src={email} />
          </SocialLink>
        </SocialLinksContainer>
        <Copyright>Tim Birkmire ©2020</Copyright>
      </SectionContainer>
    </Footer>
  )
}

export default SiteFooter
