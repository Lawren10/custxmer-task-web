import React, {useState} from "react";
import {
  NavCont,
  NavInnerCont,
  NavLogo,
  NavItemCont,
  NavItem,
  NavItemSocial,
  NavItemSocialcont,
  MobileHamMenu,
} from "../styles/navStyles";
import {useLocation} from "react-router-dom";
import MobileNav from "./MobileNav";
function Navigation() {
  let [showMobileNav, setShowMobileNav] = useState(false);

  let {pathname} = useLocation();

  let getPathname = () => {
    if (pathname === "/") {
      return "Home";
    }
    return pathname.split("/")[1];
  };

  let handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <>
      <NavCont>
        <NavInnerCont>
          <NavLogo src="/Custxmer_logo.webp" />
          <NavItemCont>
            <NavItem
              to={"/"}
              active={getPathname() === "Home" ? "true" : "false"}
            >
              HOME
            </NavItem>
            <NavItem
              to={"/About"}
              active={getPathname() === "About" ? "true" : "false"}
            >
              ABOUT
            </NavItem>
            <NavItem
              to={"/Service"}
              active={getPathname() === "Service" ? "true" : "false"}
            >
              SERVICES
            </NavItem>
            <NavItem
              to={"/Contact"}
              active={getPathname() === "Contact" ? "true" : "false"}
            >
              CONTACT
            </NavItem>
          </NavItemCont>

          <NavItemSocialcont>
            <NavItemSocial
              href="https://mobile.twitter.com/custxmerapp"
              target={"_blank"}
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </NavItemSocial>
            <NavItemSocial
              href="https://www.linkedin.com/company/custxmer/"
              target={"_blank"}
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </NavItemSocial>
            <MobileHamMenu onClick={handleShowMobileNav}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </MobileHamMenu>
          </NavItemSocialcont>
        </NavInnerCont>
      </NavCont>
      <MobileNav
        show={showMobileNav}
        pathName={getPathname()}
        setShowMobileNav={handleShowMobileNav}
      />
    </>
  );
}

export default Navigation;
