import React from "react";

import { StyledSquareButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-zoom-into-destination.png";
import medium from "./../../assets/ico-zoom-into-destination@2x.png";
import large from "./../../assets/ico-zoom-into-destination@3x.png";

const ZoomDestinationButton = ({ onClickCb, ...rest }) => (
  <StyledSquareButtonComponent
    {...rest}
    onClick={onClickCb}
    data-qa="map-location-button"
    color="white"
    small={small}
    medium={medium}
    large={large}
  />
);

export default ZoomDestinationButton;
