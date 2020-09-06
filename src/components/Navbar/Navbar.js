import React, { useState } from "react";
import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavContainer>
            <NavLogo to="/">
              <NavIcon />
              CYBERTRUCK FANPAGE{" "}
            </NavLogo>

            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/singlemotor">Single Motor RWD</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/dualmotor">Dual Motor AWD</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/trimotor">Tri Motor AWD</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/ordernow">Order Now</NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
