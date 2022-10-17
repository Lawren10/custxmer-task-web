import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavCont = styled.nav`
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavInnerCont = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: ${({footer}) => (footer ? "1rem" : "0 1.5rem")};
  }
`;

export const NavLogo = styled.img`
  width: 14rem;
  padding: 1rem;
  background-color: white;
  @media screen and (max-width: 450px) {
    width: 9rem;
    padding: 1rem;
  }
`;
export const NavItemCont = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: white;
  cursor: pointer;
  border-bottom: ${({active}) => (active === "true" ? "2px solid white" : "")};
`;
export const NavItemSocial = styled.a`
  padding: 0.5rem;
  color: white;
  text-decoration: none;
  @media screen and (max-width: 450px) {
    display: ${({footer}) => (footer === "true" ? "none" : "initial")};
  }
`;

export const NavItemSocialcont = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const FooterTextCont = styled.div`
  text-align: end;
  color: white;
`;

export const FooterDescText = styled.div`
  padding: 1.5rem 0;
  width: 70%;
  margin: auto;
  display: flex;
  gap: 0.2rem;
  font-size: 0.7rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    font-size: 1rem;
  }
`;

export const MobileHamMenu = styled.div`
  display: none;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    display: block;
  }
`;
