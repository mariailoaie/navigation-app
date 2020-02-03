import React from "react";
import styled from "styled-components";
import { separatorColor, whiteWithOpacity } from "./../colors";

const StyledImg = styled.img`
  width: inherit;
`;
StyledImg.displayName = "StyledImg";

export const StyledImgComponent = ({ small, medium, large, ...rest }) => (
  <StyledImg
    {...rest}
    src={small}
    srcSet={`${small} 1x, ${medium} 2x, ${large} 3x`}
  />
);

const StyledSquareButton = styled.div`
  align-items: center;
  border-radius: 6px;
  background-image: ${props => `image-set( url(${props.small}) 1x,
  url(${props.medium}) 2x, url(${props.large}) 3x)`};
  background-color: ${props => props.color ? props.color : whiteWithOpacity}};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex: 2;
  justify-content: center;
  width: 70px;
  height: 70px;
  max-width: 70px;
`;
StyledSquareButton.displayName = "StyledSquareButton";

export const StyledSquareButtonComponent = ({
  small,
  medium,
  large,
  color,
  ...rest
}) => (
  <StyledSquareButton {...rest} color={color} small={small} medium={medium} large={large} />
);

export const StyledIconBtn = styled.div`
  background-image: ${props => `image-set( url(${props.small}) 1x,
  url(${props.medium}) 2x, url(${props.large}) 3x)`};
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  max-width: 60px;
`;
StyledIconBtn.displayName = "StyledIconBtn";

export const StyledIconBtnComponent = ({
  clickCb,
  small,
  medium,
  large,
  ...rest
}) => (
  <StyledIconBtn
    {...rest}
    onClick={clickCb}
    small={small}
    medium={medium}
    large={large}
  />
);

const StyledIconButton = styled.div`
  align-items: center;
  border-right: ${props => (props.border ? "1px solid" : 0)};
  border-color: ${separatorColor};
  display: flex;
  justify-content: center;
  margin: 10px 0;
  min-width: 72px;
`;
StyledIconButton.displayName = "StyledIconButton";

export const StyledIconButtonComponent = ({ border, small, medium, large }) => (
  <StyledIconButton border={border}>
    <StyledImgComponent small={small} medium={medium} large={large} />
  </StyledIconButton>
);

const StyledSeparator = styled.div`
  background-color: ${separatorColor};
  width: 1px;
`;

export const StyledSeparatorComponent = () => (
  <StyledSeparator data-qa="separator" />
);
