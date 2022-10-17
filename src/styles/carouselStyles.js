import styled from "styled-components";

export const CarouselCont = styled.div`
  position: relative;
  width: 70%;
  margin: 2rem auto;
  @media screen and (max-width: 450px) {
    width: 70%;
  }
`;

export const CarouselMainCont = styled.div`
  width: 100%;
  position: relative;
  height: 14rem;
  @media screen and (max-width: 450px) {
    height: 25rem;
  }
`;
export const CarouselFlexCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({bgcolor}) => (bgcolor ? "white" : "black")};
  background-color: ${({bgcolor}) => (bgcolor ? bgcolor : "white")};
  opacity: ${({pos}) => (pos === "true" ? 1 : 0)};
  transform: scale(${({pos}) => (pos === "true" ? 1 : 0)});
  transition: all 0.4s ease;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const CarouselItem = styled.div`
  width: 50%;
  height: 100%;
  padding: 1.5rem;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 50%;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CarouselItemHeader = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0.8rem 0;
`;

export const CarouselItembodyText = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const CarouselItembtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: 0.8rem;
  color: white;
`;

export const CarouselContRightNav = styled.div`
  color: white;
  font-weight: bold;
  background-color: blue;
  padding: 0.5rem 1rem;
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;
export const CarouselContLeftNav = styled.div`
  color: white;
  font-weight: bold;
  background-color: blue;
  padding: 0.5rem 1rem;
  position: absolute;
  left: -2rem;
  transform: translateY(-50%);
  top: 50%;
  cursor: pointer;
  z-index: 10;
`;

export const CarouselPosIndicatorCont = styled.div`
  width: 30%;
  margin: 1rem auto;
  display: flex;
  gap: 0.5rem;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const CarouselPosIndicatoritem = styled.div`
  width: 33%;
  padding: 0.2rem 0;
  background-color: ${({pos}) => (pos === "true" ? "blue" : "lightgray")};
`;
