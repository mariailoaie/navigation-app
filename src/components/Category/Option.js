import React from "react";
import styled from "styled-components";
import { primaryColor, optionBorder } from "./../../common/colors";

const StyledOption = styled.div`
  border: ${props =>
    props.active ? `1px solid ${optionBorder}` : "1px solid transparent"};
  box-sizing: border-box;
  background-image: ${props => `image-set( url(${props.small}) 1x,
  url(${props.medium}) 2x, url(${props.large}) 3x)`};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 22px;
  cursor: pointer;
  min-width: 243px;
  height: 240px;
`;
StyledOption.displayName = "StyledOption";

const StyledLabel = styled.div`
  margin-top: 134px;
  color: ${primaryColor};
  display: flex;
  font-size: 25px;
  justify-content: center;
  padding: 0 6px 8px 6px;
`;
StyledLabel.displayName = "StyledLabel";

const Option = ({ label, clickCb, ...rest }) => (
  <StyledOption {...rest} onClick={clickCb} data-qa="option">
    <StyledLabel>{label}</StyledLabel>
  </StyledOption>
);

export default Option;
