import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const MobileNavCont = styled.nav`
  width: 100%;
  padding: 2rem;
  background-color: white;
  display: ${({showNav}) => (showNav ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: absolute;
  top: 0;
  transition: all 2 ease-in;
`;

export const MobileNavItem = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: blue;
  cursor: pointer;
  border-bottom: ${({active}) => (active === "true" ? "2px solid blue" : "")};
`;

export const MobileCloseBtn = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: 400;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 1rem;
  right: 2rem;
`;
