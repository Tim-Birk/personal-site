import React, { useState } from "react"
import styled from "styled-components"
import $ from "jquery"
import { Link } from "gatsby"

import "./navbar.scss"
import logo from "../images/tb_logo3.png"
import resume from "../images/resume.pdf"

const StyledLogo = styled.img`
  ${({ theme }) => ` 
    width: 48px;
    padding-top: 0.58em;
    @media ${theme.device.tablet} { 
        width: 72px;
        
    }
    @media ${theme.device.laptop} { 
       
    }
 `}
`

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    $("#mainListDiv").toggleClass("nav__wrapper--visible")
    $("#mainListDiv").fadeIn()
  }
  return (
    <div style={{ height: `${active ? "100vh" : "65px"}` }}>
      <nav className="nav">
        <div className="nav__contents">
          <Link to="/">
            <div className="nav__logo">
              <StyledLogo src={logo} />
            </div>
          </Link>
          <div id="mainListDiv" className={`main_list nav__wrapper`}>
            <ul className="navlinks nav__wrapper__list">
              <li className="nav__wrapper__list__item">
                <a href={resume} target="blank">
                  Resume
                </a>
              </li>
              <li
                className="nav__wrapper__list__item"
                style={{ display: `${active ? "block" : "none"}` }}
              >
                <Link to="/contact" className="gatsby__link">
                  <a href="#">Contact</a>
                </Link>
              </li>
              <Link to="/contact" className="gatsby__link__button">
                <button
                  className="nav__button"
                  style={{ display: `${active ? "none" : "block"}` }}
                >
                  <a href="#">Say Hello</a>
                </button>
              </Link>
            </ul>
          </div>
          <span
            className={`navTrigger nav__toggle-btn${active ? " active" : ""}`}
            onClick={handleClick}
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
