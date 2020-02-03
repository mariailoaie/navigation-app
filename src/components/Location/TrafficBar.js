import React from "react";

import { StyledImgComponent } from "../../common/components/styledComponents";

import small from "./../../assets/traffic-bar-single-destination-in-progress-day.png";
import medium from "./../../assets/traffic-bar-single-destination-in-progress-day@2x.png";
import large from "./../../assets/traffic-bar-single-destination-in-progress-day@3x.png";

const TrafficBar = ({ onClickCb, ...rest }) => (
  <StyledImgComponent
    {...rest}
    onClick={onClickCb}
    data-qa="traffic-bar"
    small={small}
    medium={medium}
    large={large}
  />
);

export default TrafficBar;
