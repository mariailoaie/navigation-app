import React from "react";

import { StyledImgComponent } from "./../common/components/styledComponents";

import small from "./../assets/system-bar-bottom-nav.png";
import medium from "./../assets/system-bar-bottom-nav@2x.png";
import large from "./../assets/system-bar-bottom-nav@3x.png";

const Footer = () => (
  <StyledImgComponent
    data-qa="footer"
    small={small}
    medium={medium}
    large={large}
  />
);

export default Footer;
