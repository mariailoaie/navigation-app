import React from "react";
import styled from "styled-components";
import {
  categorySearchBgColor,
  primaryColor,
  whiteWithOpacity
} from "../../common/colors";
import { textStyleSearchBox } from "../../common/textStyles";
import { searchInputPlaceholder } from "../../common/strings";
import RecentIconButton from "./RecentIconButton";
import SavedIconButton from "./SavedIconButton";

import small from "./../../assets/ico-floating-bar-search.png";
import medium from "./../../assets/ico-floating-bar-search@2x.png";
import large from "./../../assets/ico-floating-bar-search@3x.png";

const StyledSearchWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  margin: 12px;
  position: relative;
  width: inherit;
`;
StyledSearchWrapper.displayName = "StyledSearchWrapper";

const StyledSearchContainer = styled.div`
  border-radius: 6px;
  background-color: ${props =>
    props.showSearchIcons ? whiteWithOpacity : categorySearchBgColor};
  display: flex;
  flex: 1;
  margin-right: 12px;
  width: inherit;
  height: inherit;
`;
StyledSearchContainer.displayName = "StyledSearchContainer";

const StyledSearchInput = styled.input`
  color: ${textStyleSearchBox.color};
  border: none;
  border-radius: 6px;
  background-color: ${props =>
    props.showSearchIcons ? whiteWithOpacity : categorySearchBgColor};
  background-image: image-set(
    url(${small}) 1x,
    url(${medium}) 2x,
    url(${large}) 3x
  );
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 18px;
  padding-left: 72px;
  font-size: ${textStyleSearchBox.fontSize};
  font-weight: ${textStyleSearchBox.fontWeight};
  outline: none;
  width: 100%;
  caret-color: ${primaryColor};
  &::-webkit-input-placeholder {
    color: ${textStyleSearchBox.color};
    font-size: ${textStyleSearchBox.fontSize};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${textStyleSearchBox.color};
    font-size: ${textStyleSearchBox.fontSize};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${textStyleSearchBox.color};
    font-size: ${textStyleSearchBox.fontSize};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${textStyleSearchBox.color};
    font-size: ${textStyleSearchBox.fontSize};
  }
`;
StyledSearchInput.displayName = "StyledSearchInput";

export const SearchContainer = ({ showSearchCategoryCb, showSearchIcons }) => {
  const handleSearchInputClick = () => {
    if (!showSearchIcons) {
      return;
    }
    showSearchCategoryCb && showSearchCategoryCb();
  };
  return (
    <StyledSearchContainer
      showSearchIcons={showSearchIcons}
      data-qa="search-container"
    >
      {showSearchIcons && (
        <>
          <RecentIconButton />
          <SavedIconButton />
        </>
      )}
      <StyledSearchInput
        showSearchIcons={showSearchIcons}
        onClick={handleSearchInputClick}
        placeholder={searchInputPlaceholder}
      />
    </StyledSearchContainer>
  );
};
export default SearchContainer;
