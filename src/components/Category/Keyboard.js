import React from "react";

import { StyledImgComponent } from "../../common/components/styledComponents";
import styled from "styled-components";

import small from "./../../assets/keyboard-us-english-uppercase-day.png";
import medium from "./../../assets/keyboard-us-english-uppercase-day@2x.png";
import large from "./../../assets/keyboard-us-english-uppercase-day@3x.png";

const StyledKeyboard = styled(StyledImgComponent)`
  box-shadow: 0px -6px 18px 0px rgba(0,0,0,0.16)  ;
  position: absolute;
  bottom: 0;
`;

const Keyboard = () => (
  <StyledKeyboard
    data-qa="keyboard"
    small={small}
    medium={medium}
    large={large}
  />
);

export default Keyboard;
