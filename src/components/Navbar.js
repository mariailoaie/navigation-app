import React from "react";
import styled from 'styled-components';

import { StyledImgComponent } from "./../common/components/styledComponents";

import small from "./../assets/system-bar-top.png";
import medium from "./../assets/system-bar-top@2x.png";
import large from "./../assets/system-bar-top@3x.png";

const Navbar = () => (
  <StyledImgComponent
    data-qa="navbar"
    small={small}
    medium={medium}
    large={large}
  />
);

export default Navbar;
