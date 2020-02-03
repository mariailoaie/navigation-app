import React from "react";

import { StyledSquareButtonComponent } from "../../common/components/styledComponents";

import small from "./../../assets/ico-list-item-details-saved.png";
import medium from "./../../assets/ico-list-item-details-saved@2x.png";
import large from "./../../assets/ico-list-item-details-saved@3x.png";

const FavoriteButton = ({ onClickCb, ...rest }) => (
  <StyledSquareButtonComponent
    {...rest}
    onClick={onClickCb}
    data-qa="favorite-button"
    color="white"
    small={small}
    medium={medium}
    large={large}
  />
);

export default FavoriteButton;
