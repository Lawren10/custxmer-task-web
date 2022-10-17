import styled from "styled-components";

export const BreadCrumbCont = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  background-color: lightgray;
`;
export const BreadCrumbItem = styled.div`
  color: blue;
  font-size: 0.8rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-top-color: lightgray;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
`;

export const BreadCrumbInnerCont = styled.div`
  width: 70%;
  margin: auto;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const PageText = styled.h4`
  padding: 1.5rem;
  text-align: center;
  font-weight: 800;
`;
