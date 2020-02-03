import React from "react";

import { StyledSquareButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-button-action-bar-end.png";
import medium from "./../../assets/ico-button-action-bar-end@2x.png";
import large from "./../../assets/ico-button-action-bar-end@3x.png";

const CloseIconButton = ({ onClickCb }) => (
  <StyledSquareButtonComponent
    onClick={onClickCb}
    data-qa="close-icon-button"
    small={small}
    medium={medium}
    large={large}
  />
);

export default CloseIconButton;
