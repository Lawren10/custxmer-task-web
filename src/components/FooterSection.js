import React from "react";
import {
  NavCont,
  NavInnerCont,
  NavItemSocial,
  NavItemCont,
  FooterTextCont,
  NavItem,
  FooterDescText,
  NavItemSocialcont,
  MobileHamMenu,
} from "../styles/navStyles";
import {useLocation} from "react-router-dom";

function FooterSection() {
  let {pathname} = useLocation();

  let getPathname = () => {
    if (pathname === "/") {
      return "Home";
    }
    return pathname.split("/")[1];
  };
  return (
    <>
      <NavCont>
        <NavInnerCont footer={true}>
          <NavItemSocialcont>
            <MobileHamMenu>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </MobileHamMenu>
            <NavItemSocial
              href="https://mobile.twitter.com/custxmerapp"
              target={"_blank"}
              footer="true"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </NavItemSocial>
            <NavItemSocial
              href="https://www.linkedin.com/company/custxmer/"
              target={"_blank"}
              footer="true"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </NavItemSocial>
          </NavItemSocialcont>

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

          <FooterTextCont>
            <p>+1 xxx xxxx xxxx</p>
            <p>custxmer@myemail.world </p>
          </FooterTextCont>
        </NavInnerCont>
      </NavCont>
      <FooterDescText>
        <p>Lorem ipsum dolor sit met</p>
        <p>Lorem ipsum dolor sit met</p>
        <p>Lorem ipsum dolor sit met</p>
        <p>Lorem ipsum dolor sit met</p>
        <p>Lorem ipsum dolor sit met</p>
      </FooterDescText>
    </>
  );
}

export default FooterSection;
