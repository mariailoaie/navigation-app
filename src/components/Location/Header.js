import React from "react";
import styled from "styled-components";

import small from "./../../assets/ico-close.png";
import medium from "./../../assets/ico-close@2x.png";
import large from "./../../assets/ico-close@3x.png";
import icoBackSmall from "./../../assets/ico-back.png";
import icoBackMedium from "./../../assets/ico-back@2x.png";
import icoBackLarge from "./../../assets/ico-back@3x.png";

import { primaryColor } from "../../common/colors";
import { StyledIconBtn } from "../../common/components/styledComponents";

const StyledHeader = styled.div`
  background-color: ${primaryColor};
  display: flex;
  height: 70px;
  justify-content: space-between;
  width: 470px;
`;
StyledHeader.displayName = "StyledHeader";
const StyledLeftWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 0;
`;
StyledLeftWrapper.displayName = "StyledLeftWrapper";
const StyledName = styled.div`
  color: white;
  display: flex;
  flex: 2;
  font-size: 25px;
  line-height: 70px;
`;
StyledName.displayName = "StyledName";
const StyledRightWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex: 3;
`;
StyledRightWrapper.displayName = "StyledRightWrapper";

const Header = ({ backCb, name, leftIcons, rightIcons, withBackIcon, withClose }) => {
  const handleBackIconClick = () => {
    backCb && backCb();
  }
  return (
  <StyledHeader data-qa="list-header">
    <StyledLeftWrapper>
      {withBackIcon && <StyledIconBtn onClick={handleBackIconClick} small={icoBackSmall} medium={icoBackMedium} large={icoBackLarge} />}
      {leftIcons &&
        leftIcons.length &&
        leftIcons.map(item => <StyledIconBtn key={item.id} {...item} />)}
    </StyledLeftWrapper>
    <StyledName>{name}</StyledName>
    <StyledRightWrapper>
      {rightIcons &&
        rightIcons.length &&
        rightIcons.map(item => <StyledIconBtn key={item.id} {...item} />)}
      {withClose && (
        <StyledIconBtn small={small} medium={medium} large={large} />
      )}
    </StyledRightWrapper>
  </StyledHeader>
)};

export default Header;
