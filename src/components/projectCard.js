import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CardContainerItem = styled.div`
  ${({ theme }) => ` 
    position:relative;
    width: 100%;
    height: 200px;
    max-height: 300px;
    max-width: 475px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    
    &:hover .block__body { 
      position: absolute;
      top: 0;
      background: rgba(20, 28, 58,0.91);
      color: #fff;
      height: 100%;
      transition: top .5s;
    
      h3 { color: #fff; }
    }

    @media ${theme.device.tablet} {     
        height: 225px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const CardLogo = styled.img`
  ${({ theme }) => ` 
    width: 100%;
    height: 200px;
    border-radius: 12px;
    @media ${theme.device.tablet} {     
        height: 225px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const CardBody = styled.div`
  ${({ theme }) => ` 
    height: 200px;
    width: 100%;
    top:100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media ${theme.device.tablet} {     
        height: 225px;
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const CardTitle = styled.h3`
  ${({ theme }) => ` 
    padding: 0 1rem;
    margin-bottom: 0;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`

const CardSubtitle = styled.p`
  ${({ theme }) => ` 
    text-align: center;
    padding: 0 1rem;
    margin: 0.5rem auto;
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const CardButton = styled.button`
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
    line-height: 40px;
    font-size: 1.1rem;
  
    &:hover {
        background: ${theme["brand-color"]};
        opacity: 90%;
        transition: all 0.35s;
    }
   
    @media ${theme.device.tablet} {     
        
    }
    @media ${theme.device.laptop} { 
        
    }
 `}
`
const ProjectCard = ({ imgUrl, title, description, url }) => {
  return (
    <CardContainerItem className="bottom">
      <CardLogo src={imgUrl} />

      <CardBody className="block__body">
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{description}</CardSubtitle>
        <Link to={url}>
          <CardButton>Learn More</CardButton>
        </Link>
      </CardBody>
    </CardContainerItem>
  )
}

export default ProjectCard
