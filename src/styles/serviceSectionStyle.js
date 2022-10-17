import styled from "styled-components";

export const ServiceContFlex = styled.div`
  width: 100%;
  padding: 1rem 0 4rem 0;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0.5rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const SectionItem = styled.div`
  position: relative;
  text-align: center;
  width: 15%;
  background-color: white;
  padding: 1rem 0.5rem 3rem 0.5rem;
  @media screen and (max-width: 450px) {
    width: 70%;
    padding: 1rem 1.2rem 3rem 1.2rem;
  }
`;

export const SectionBtn = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: -0.6rem;
  left: 50%;
  color: white;
  background-color: teal;
  transform: translateX(-50%);
`;

export const SectionIcon = styled.img`
  width: 3rem;
`;
export const Sectionheader = styled.h4`
  color: teal;
  margin: 0.8rem 0;
`;

export const SectionbodyText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;
