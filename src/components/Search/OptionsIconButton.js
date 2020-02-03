import React from "react";

import { StyledSquareButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-options.png";
import medium from "./../../assets/ico-options@2x.png";
import large from "./../../assets/ico-options@3x.png";

const OptionsIconButton = ({ onClickCb, ...rest}) => (
  <StyledSquareButtonComponent
    {...rest}
    onClick={onClickCb}
    data-qa="options-icon-button"
    small={small}
    medium={medium}
    large={large}
  />
);

export default OptionsIconButton;
