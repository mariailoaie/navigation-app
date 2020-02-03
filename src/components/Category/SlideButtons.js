import React from "react";
import styled from "styled-components";
import { StyledImgComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-options.png";
import medium from "./../../assets/ico-options@2x.png";
import large from "./../../assets/ico-options@3x.png";

const StyledSlideButtons = styled(StyledImgComponent)`
  margin: 0 auto;
`;
const StyledSlideButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SlideButtons = () => (
  <StyledSlideButtonsWrapper>
    <StyledSlideButtons
      data-qa="slide-buttons"
      small={small}
      medium={medium}
      large={large}
    />
  </StyledSlideButtonsWrapper>
);

export default SlideButtons;
