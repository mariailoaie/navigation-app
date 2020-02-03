import React from "react";

import { StyledIconButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-recents.png";
import medium from "./../../assets/ico-recents@2x.png";
import large from "./../../assets/ico-recents@3x.png";

const RecentIconButton = () => (
  <StyledIconButtonComponent
    border
    small={small}
    medium={medium}
    large={large}
  />
);

export default RecentIconButton;
