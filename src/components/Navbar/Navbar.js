import React from "react";
import { Nav, NavContainer, NavLogo, NavIcon } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/"><NavIcon/>CYBERTRUCK FANPAGE </NavLogo>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
