import React from "react";
import styled from "styled-components";
import { listBg1, listBg2 } from "./../../common/colors";
import {
  textStyleLine1Results,
  textStyleDigitsResults,
  textStyleUnitResults,
  textStyleLine2Results
} from "./../../common/textStyles";

export const StyledItem = styled.div`
  height: 117px;
  min-height: 117px;
  width: 470px;
  background: ${props => (props.index % 2 == 0 ? listBg2 : listBg1)};
`;
StyledItem.displayName = "StyledItem";

const StyledIndex = styled.div`
  display: flex;
  flex: 1;
  width: 40px;
  max-width: 40px;
  padding-left: 10px;
`;
StyledIndex.displayName = "StyledIndex";

export const StyledName = styled.div`
  display: flex;
  flex: 2;
`;
StyledName.displayName = "StyledName";

export const StyledFirstRow = styled.div`
  color: ${textStyleLine1Results.color};
  display: flex;
  flex-direction: row;
  font-size: ${textStyleLine1Results.fontSize};
  font-weight: ${textStyleLine1Results.fontWeight};
  justify-content: space-between;
  padding-top: 20px;
`;
StyledFirstRow.displayName = "StyledFirstRow";

export const StyledSecondRow = styled.div`
  color: ${textStyleLine2Results.color};
  display: flex;
  font-size: ${textStyleLine2Results.fontSize};
  font-weight: ${textStyleLine2Results.fontWeight};
  padding-left: 50px;
  padding-top: 2px;
`;
StyledSecondRow.displayName = "StyledSecondRow";

export const StyledDistance = styled.div`
  color: ${props => props.color ? props.color : textStyleDigitsResults.color};
  display: flex;
  font-size: ${textStyleDigitsResults.fontSize};
  font-weight: ${textStyleDigitsResults.fontWeight};
`;
StyledDistance.displayName = "StyledDistance";

export const StyledUnit = styled.div`
  color: ${({color}) => color ? color : textStyleUnitResults.color};
  display: flex;
  font-size: ${({fontSize}) => fontSize ? fontSize : textStyleUnitResults.fontSize};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : textStyleUnitResults.fontWeight};
  padding-left: 8px;
`;
StyledUnit.displayName = "StyledUnit";

export const StyledDistanceWrapper = styled.div`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  line-height: 43px;
  flex: 3;
  justify-content: flex-end;
  max-width: 125px;
  width: 125px;
  padding-right: 20px;
`;
StyledDistanceWrapper.displayName = "StyledDistanceWrapper";

const Item = ({
  index,
  address,
  distance,
  unit = "mi",
  name,
  clickCb = () => {},
  ...rest
}) => {

  const handleOnClick = () => {
    clickCb && clickCb();
  };

  return (
  <StyledItem index={index} {...rest} onClick={handleOnClick} data-qa="item">
    <StyledFirstRow data-qa="first-row">
      <StyledIndex data-qa="index">{index}.</StyledIndex>
      <StyledName data-qa="name">{name}</StyledName>
      <StyledDistanceWrapper>
        <StyledDistance data-qa="distance">{distance}</StyledDistance>
        <StyledUnit data-qa="unit">{unit}</StyledUnit>
      </StyledDistanceWrapper>
    </StyledFirstRow>
    <StyledSecondRow data-qa="address">{address}</StyledSecondRow>
  </StyledItem>
)};

export default Item;
