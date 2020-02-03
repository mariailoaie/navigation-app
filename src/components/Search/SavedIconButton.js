import React from "react";

import { StyledIconButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-saved.png";
import medium from "./../../assets/ico-saved@2x.png";
import large from "./../../assets/ico-saved@3x.png";

const RecentIconButton = () => (
  <StyledIconButtonComponent
    border
    small={small}
    medium={medium}
    large={large}
  />
);

export default RecentIconButton;
