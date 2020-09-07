import React, { useState, useEffect } from "react";
import { Button } from "../../globalStyles";

import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/ordernow">
                    <Button primary>Order Now</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/ordernow">
                    <Button fontBig primary>
                      Order Now
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
   
    </>
  );
};

export default Navbar;
