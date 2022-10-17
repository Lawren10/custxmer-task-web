import React from "react";
import {
  MobileNavCont,
  MobileNavItem,
  MobileCloseBtn,
} from "../styles/mobileNavStyles";

function MobileNav({show, pathName, setShowMobileNav}) {
  return (
    <>
      <MobileNavCont showNav={show}>
        <MobileNavItem to="/" active={pathName === "Home" ? "true" : "false"}>
          HOME
        </MobileNavItem>
        <MobileNavItem
          to={"/About"}
          active={pathName === "About" ? "true" : "false"}
        >
          ABOUT
        </MobileNavItem>
        <MobileNavItem
          to={"/Service"}
          active={pathName === "Service" ? "true" : "false"}
        >
          SERVICES
        </MobileNavItem>
        <MobileNavItem
          to={"/Contact"}
          active={pathName === "Contact" ? "true" : "false"}
        >
          CONTACT
        </MobileNavItem>
        <MobileCloseBtn onClick={setShowMobileNav}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </MobileCloseBtn>
      </MobileNavCont>
    </>
  );
}

export default MobileNav;
