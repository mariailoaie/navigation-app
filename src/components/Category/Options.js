import React from "react";
import styled from "styled-components";
import {
  recentsLabel,
  savedLabel,
  gasStationsLabel,
  foodLabel
} from "../../common/strings";

import Option from "./Option";

import savedSmall from "./../../assets/ico-search-saved.png";
import savedMedium from "./../../assets/ico-search-saved@2x.png";
import savedLarge from "./../../assets/ico-search-saved@3x.png";
import recentsSmall from "./../../assets/ico-search-recents.png";
import recentsMedium from "./../../assets/ico-search-recents@2x.png";
import recentsLarge from "./../../assets/ico-search-recents@3x.png";
import gasSmall from "./../../assets/ico-search-gas-stations.png";
import gasMedium from "./../../assets/ico-search-gas-stations@2x.png";
import gasLarge from "./../../assets/ico-search-gas-stations@3x.png";
import foodSmall from "./../../assets/ico-search-food.png";
import foodMedium from "./../../assets/ico-search-food@2x.png";
import foodLarge from "./../../assets/ico-search-food@3x.png";

const StyledOptions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  margin-left: 26px;
`;
StyledOptions.displayName = "StyledOptions";
const optionsList = [
  {
    id: 1,
    small: recentsSmall,
    medium: recentsMedium,
    large: recentsLarge,
    label: recentsLabel
  },
  {
    id: 2,
    small: savedSmall,
    medium: savedMedium,
    large: savedLarge,
    label: savedLabel
  },
  {
    id: 3,
    small: gasSmall,
    medium: gasMedium,
    large: gasLarge,
    label: gasStationsLabel
  },
  {
    id: 4,
    small: foodSmall,
    medium: foodMedium,
    large: foodLarge,
    label: foodLabel
  }
];

const Options = ({ showLocationListCb }) => {
  const handleOptionClick = () => {
    showLocationListCb && showLocationListCb();
  };
  return (
    <StyledOptions data-qa="options">
      {optionsList.map(item => (
        <Option key={item.id} {...item} clickCb={handleOptionClick} />
      ))}
    </StyledOptions>
  );
};

export default Options;
