import React, { useState, useEffect } from "react";
import { ReactComponent as MySvg } from "./logos/logo_dark.svg";
import { FaBars } from "react-icons/fa";
//import {Link} from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
//import LanguageSwitch from "./LanguageSwitch.js";


const Navbar = ({ toggle }) => {

  //NAVBAR Background color change on scroll (after 850px)
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 850) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  //Click on logo to scroll back to top of the page
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  /* <MobileIcon onClick={toggle}> */

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>      
          <NavLogo to="/" onClick={toggleHome}>
            <MySvg />            
          </NavLogo>         
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
              >
                PROJECTS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
