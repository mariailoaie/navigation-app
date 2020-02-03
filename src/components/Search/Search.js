import React from "react";
import styled from "styled-components";
import CloseIconButton from "./CloseIconButton";
import OptionsIconButton from "./OptionsIconButton";
import SearchContainer from "./SearchContainer";

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

export const Search = ({ showSearchCategoryCb, showSearchIcons }) => {
  const handleCloseIconButtonClick = () => {
    showSearchCategoryCb && showSearchCategoryCb();
  };
  return (
    <StyledSearchWrapper data-qa="search-box-wrapper">
      <SearchContainer
        showSearchCategoryCb={showSearchCategoryCb}
        showSearchIcons={showSearchIcons}
      />
      {showSearchIcons ? (
        <OptionsIconButton />
      ) : (
        <CloseIconButton onClickCb={handleCloseIconButtonClick} />
      )}
    </StyledSearchWrapper>
  );
};

export default Search;
