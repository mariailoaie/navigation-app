import React from "react";
import styled from "styled-components";
import { StyledItem, StyledDistance, StyledUnit, StyledName } from "./Item";
import {
  textStyleDigitsDetails,
  textStyleHeaderLine2Details,
  textStyleLine1Details,
  textStyleListButtonDetails
} from "../../common/textStyles";
import { primaryColor, listBg1 } from "../../common/colors";
import { StyledIconBtn } from "../../common/components/styledComponents";
import FavoriteButton from "./FavoriteButton";

import phoneSmall from "../../assets/ico-call.png";
import phoneMedium from "../../assets/ico-call@2x.png";
import phoneLarge from "../../assets/ico-call@3x.png";
import ruteSmall from "../../assets/ico-route-options.png";
import ruteMedium from "../../assets/ico-route-options@2x.png";
import ruteLarge from "../../assets/ico-route-options@3x.png";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  min-width: 470px;
  width: 470px;
  position: relative;
`;
StyledDetails.displayName = "StyledDetails";

const StyledDetailsItem = styled(StyledItem)`
  border-top: 1px solid white;
  background: ${primaryColor};
  display: flex;
  height: 151px;
  flex-direction: row;
  padding: 20px;
  min-width: 430px;
  width: 430px;
`;
StyledDetailsItem.displayName = "StyledDetailsItem";

const StyledFirstRow = styled.div`
  color: ${textStyleLine1Details.color};
  display: flex;
  flex-direction: row;
  font-size: ${textStyleLine1Details.fontSize};
  font-weight: ${textStyleLine1Details.fontWeight};
`;
StyledFirstRow.displayName = "StyledFirstRow";

const StyledSecondRow = styled.div`
  color: ${textStyleHeaderLine2Details.color};
  display: flex;
  flex-direction: row;
  font-size: ${textStyleHeaderLine2Details.fontSize};
  font-weight: ${textStyleHeaderLine2Details.fontWeight};
  min-height: 72px;
  align-items: center;
`;
StyledSecondRow.displayName = "StyledSecondRow";

const StyledLocationInfo = styled.div`
  display: flex;
  height: inherit;
  min-width: 470px;
  width: 470px;
`;
StyledLocationInfo.displayName = "StyledLocationInfo";

const StyledWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 326px;
`;
StyledWrapperLeft.displayName = "StyledWrapperLeft";

const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 104px;
  justify-content: flex-end;
  align-items: baseline;
  line-height: 110px;
`;
StyledRightWrapper.displayName = "StyledRightWrapper";

const StyledDetailsFirstRow = styled(StyledFirstRow)`
  background: none;
  display: flex;
  flex-direction: column;
`;
StyledDetailsFirstRow.displayName = "StyledDetailsFirstRow";

const StyledOptions = styled.div`
  align-items: center;
  background: ${listBg1};
  display: flex;
  flex-direction: column;
  height: 100%;
`;
StyledOptions.displayName = "StyledOptions";

const StyledText = styled.div`
  color: ${({ color }) => (color ? color : textStyleListButtonDetails.color)}};
  font-size: ${textStyleListButtonDetails.fontSize};
  font-weight: ${textStyleListButtonDetails.fontWeight};
`;
StyledText.displayName = "StyledText";

const StyledDetailsOption = styled(StyledItem)`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 80px;
  min-height: 80px;
`;
StyledDetailsOption.displayName = "StyledDetailsOption";

const StyledDetailsButton = styled.div`
  align-items: center;
  background: ${primaryColor};
  display: flex;
  justify-content: space-between;
  height: 70px;
  position: absolute;
  bottom: 70px;
  width: 446px;
  margin: 12px;
  border-radius: 6px;
  padding: 20px;
  box-sizing: border-box;
`;
StyledDetailsButton.displayName = "StyledDetailsButton";

const StyledFavoriteButton = styled(FavoriteButton)`
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.16);
  position: absolute;
  right: 20px;
  top: 125px;
`;
StyledFavoriteButton.displayName = "StyledFavoriteButton";

const locationDetails = {
  id: "details1",
  name: "Roy SteakHouse",
  address: "4321 Bowery Ave, Heaneyton, VT",
  distance: 3,
  unit: "mi"
};

const detailsOptions = [
  {
    id: 'det1',
    icon: {
      small: phoneSmall,
      medium: phoneMedium,
      large: phoneLarge
    },
    text: "(408) 970-0913"
  },
  {
    id: 'det2',
    icon: {
      small: ruteSmall,
      medium: ruteMedium,
      large: ruteLarge
    },
    text: "Route Options"
  }
];

const getRightLineDetailsInfo = (digit, unit, color) => (
  <StyledRightWrapper>
    <StyledDistance color={color}>{digit}</StyledDistance>
    <StyledUnit color={color}>{unit}</StyledUnit>
  </StyledRightWrapper>
);

const getDetailsInfo = ({ name, address, distance, unit }) => (
  <StyledDetailsItem data-qa="details-info">
    <StyledWrapperLeft data-qa="wrapper-left">
      <StyledDetailsFirstRow>
        <StyledName>{name}</StyledName>
      </StyledDetailsFirstRow>
      <StyledSecondRow>{address}</StyledSecondRow>
    </StyledWrapperLeft>
    {getRightLineDetailsInfo(distance, unit, textStyleDigitsDetails.color)}
  </StyledDetailsItem>
);


const getDetailsOptions = (item, clickCb) => {
  const handleOptionClick = () => {
    clickCb && clickCb();
  }
  return (
  <StyledOptions data-qa="details-options">
    {detailsOptions.map((item, index) => (
      <StyledDetailsOption key={item.id} {...item} index={index + 1} onClick={handleOptionClick}>
        <StyledIconBtn
          small={item.icon.small}
          medium={item.icon.medium}
          large={item.icon.large}
        />
        <StyledText>{item.text}</StyledText>
      </StyledDetailsOption>
    ))}
  </StyledOptions>
)};

const getButton = (text, digit, unit) => (
  <StyledDetailsButton data-qa="details-button">
    <StyledText color={textStyleDigitsDetails.color}>{text}</StyledText>
    {getRightLineDetailsInfo(digit, unit, textStyleDigitsDetails.color)}
  </StyledDetailsButton>
);

const Details = ({ clickCb, item = locationDetails }) => (
  <StyledDetails data-qa="details">
    {getDetailsInfo(item)}
    {getDetailsOptions(item, clickCb)}
    {getButton("GO", 6, "min")}
    <StyledFavoriteButton />
  </StyledDetails>
);

export default Details;
