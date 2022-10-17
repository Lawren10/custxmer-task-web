import React, {useState} from "react";
import {
  CarouselCont,
  CarouselMainCont,
  CarouselFlexCont,
  CarouselItem,
  CarouselContRightNav,
  CarouselContLeftNav,
  CarouselPosIndicatorCont,
  CarouselPosIndicatoritem,
  CarouselItemHeader,
  CarouselItembodyText,
  CarouselItembtn,
  CarouselImg,
} from "../styles/carouselStyles";

function CarouselSection() {
  let [itemPos, setItemPos] = useState(1);

  let incrementPos = () => {
    setItemPos((prevState) => (prevState === 3 ? 1 : prevState + 1));
  };

  let decrementPos = () => {
    setItemPos((prevState) => (prevState === 1 ? 3 : prevState - 1));
  };

  return (
    <>
      <CarouselCont>
        <CarouselContLeftNav onClick={decrementPos}>{"<"}</CarouselContLeftNav>
        <CarouselContRightNav onClick={incrementPos}>
          {">"}
        </CarouselContRightNav>
        <CarouselMainCont>
          <CarouselFlexCont
            bgcolor="teal"
            pos={itemPos === 1 ? "true" : "false"}
          >
            <CarouselItem>
              <CarouselItemHeader>Main Heading Example</CarouselItemHeader>
              <CarouselItembodyText>
                lorem ipsum dolor set met lorem ipsum dolor set met lorem ipsum
                dolor set met lorem ipsum dolor set met lorem ipsum dolor set
                met lorem ipsum dolor set met lorem ipsum dolor set met lorem
                ipsum dolor set met lorem ipsum dolor set met
              </CarouselItembodyText>
              <CarouselItembtn>Read More</CarouselItembtn>
            </CarouselItem>
            <CarouselItem>
              <CarouselImg src="/1pic.png" />
            </CarouselItem>
          </CarouselFlexCont>

          <CarouselFlexCont
            bgcolor="orange"
            pos={itemPos === 2 ? "true" : "false"}
          >
            <CarouselItem>
              <CarouselItemHeader>Main Heading Example</CarouselItemHeader>
              <CarouselItembodyText>
                lorem ipsum dolor set met lorem ipsum dolor set met lorem ipsum
                dolor set met lorem ipsum dolor set met lorem ipsum dolor set
                met lorem ipsum dolor set met lorem ipsum dolor set met lorem
                ipsum dolor set met lorem ipsum dolor set met
              </CarouselItembodyText>
              <CarouselItembtn>Read More</CarouselItembtn>
            </CarouselItem>
            <CarouselItem>
              <CarouselImg src="/2pic.png" />
            </CarouselItem>
          </CarouselFlexCont>

          <CarouselFlexCont
            bgcolor="lightgreen"
            pos={itemPos === 3 ? "true" : "false"}
          >
            <CarouselItem>
              <CarouselItemHeader>Main Heading Example</CarouselItemHeader>
              <CarouselItembodyText>
                lorem ipsum dolor set met lorem ipsum dolor set met lorem ipsum
                dolor set met lorem ipsum dolor set met lorem ipsum dolor set
                met lorem ipsum dolor set met lorem ipsum dolor set met lorem
                ipsum dolor set met lorem ipsum dolor set met
              </CarouselItembodyText>
              <CarouselItembtn>Read More</CarouselItembtn>
            </CarouselItem>
            <CarouselItem>
              <CarouselImg src="/3pic.png" />
            </CarouselItem>
          </CarouselFlexCont>
        </CarouselMainCont>

        <CarouselPosIndicatorCont>
          <CarouselPosIndicatoritem pos={itemPos === 1 ? "true" : "false"} />
          <CarouselPosIndicatoritem pos={itemPos === 2 ? "true" : "false"} />
          <CarouselPosIndicatoritem pos={itemPos === 3 ? "true" : "false"} />
        </CarouselPosIndicatorCont>
      </CarouselCont>
    </>
  );
}

export default CarouselSection;
