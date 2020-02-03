import React from "react";

import { StyledIconButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-floating-bar-search.png";
import medium from "./../../assets/ico-floating-bar-search@2x.png";
import large from "./../../assets/ico-floating-bar-search@3x.png";

const SearchIconButton = () => (
  <StyledIconButtonComponent
    active
    small={small}
    medium={medium}
    large={large}
  />
);

export default SearchIconButton;
