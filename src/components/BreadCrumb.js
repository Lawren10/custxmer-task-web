import React from "react";
import {
  BreadCrumbCont,
  BreadCrumbItem,
  BreadCrumbInnerCont,
} from "../styles/breadCrumbstyle";

import {useLocation} from "react-router-dom";

function BreadCrumb() {
  let {pathname} = useLocation();

  let getPathname = () => {
    if (pathname === "/") {
      return "Home";
    }
    return pathname.split("/")[1];
  };

  return (
    <>
      <BreadCrumbCont>
        <BreadCrumbInnerCont>
          <BreadCrumbItem>{getPathname()}/</BreadCrumbItem>
        </BreadCrumbInnerCont>
      </BreadCrumbCont>
    </>
  );
}

export default BreadCrumb;
