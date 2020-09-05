import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { SiTesla } from "react-icons/si";

export const Nav = styled.nav`
  background: #121014;
  color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
`;

export const NavIcon = styled(SiTesla)`
  margin-right: 0.5rem;
`;
