import React from "react";
import {
  ServiceContFlex,
  SectionItem,
  SectionBtn,
  SectionIcon,
  Sectionheader,
  SectionbodyText,
} from "../styles/serviceSectionStyle";

function ServiceSection() {
  return (
    <>
      <ServiceContFlex>
        <SectionItem>
          <SectionIcon src="/file-storage.png" />
          <Sectionheader>Title1</Sectionheader>
          <SectionbodyText>
            lorem ipsum dolor Lorem ipsum dolor sit met Lorem ipsum dolor sit
            met Lorem ipsum dolor sit met Lorem ipsum dolor sit met
          </SectionbodyText>
          <SectionBtn>Read more</SectionBtn>
        </SectionItem>

        <SectionItem>
          <SectionIcon src="/location.png" />
          <Sectionheader>Title1</Sectionheader>
          <SectionbodyText>
            lorem ipsum dolor Lorem ipsum dolor sit met Lorem ipsum dolor sit
            met Lorem ipsum dolor sit met Lorem ipsum dolor sit met{" "}
          </SectionbodyText>
          <SectionBtn>Read more</SectionBtn>
        </SectionItem>

        <SectionItem>
          <SectionIcon src="upload.png" />
          <Sectionheader>Title1</Sectionheader>
          <SectionbodyText>
            lorem ipsum dolor Lorem ipsum dolor sit met Lorem ipsum dolor sit
            met Lorem ipsum dolor sit met Lorem ipsum dolor sit met
          </SectionbodyText>
          <SectionBtn>Read more</SectionBtn>
        </SectionItem>

        <SectionItem>
          <SectionIcon src="building.png" />
          <Sectionheader>Title1</Sectionheader>
          <SectionbodyText>
            lorem ipsum dolor Lorem ipsum dolor sit met Lorem ipsum dolor sit
            met Lorem ipsum dolor sit met Lorem ipsum dolor sit met
          </SectionbodyText>
          <SectionBtn>Read more</SectionBtn>
        </SectionItem>
      </ServiceContFlex>
    </>
  );
}

export default ServiceSection;
