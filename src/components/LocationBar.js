import React from "react";
import styled from "styled-components";
import { StyledSeparatorComponent } from "../common/components/styledComponents";

import {
  locationBarBackgroundColor,
  locationBarColor,
  separatorColor
} from "../common/colors";

const StyledLocationBar = styled.div`
  align-self: center;
  background-color: ${locationBarBackgroundColor};
  box-sizing: border-box;
  border-radius: 6px;
  color: ${locationBarColor};
  display: flex;
  font-size: 25px;
  height: 60px;
  margin: 12px;
  padding: 8px;
  width: 300px;
`;
StyledLocationBar.displayName = "StyledLocationBar";

const StyledText = styled.div`
  align-items: center;
  border-right: ${props => (props.border ? `1px solid ${separatorColor}` : 0)};
  display: flex;
  justify-content: center;
  width: ${props => (props.border ? "58px" : "100%")};
`;

const LocationBar = ({ letter, name, ...rest}) => (
  <StyledLocationBar {...rest} data-qa="location-bar">
    <StyledText border>{letter}</StyledText>
    <StyledText>{name}</StyledText>
  </StyledLocationBar>
);

export default LocationBar;
