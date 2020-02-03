import React from "react";
import styled from "styled-components";

import Options from "./Options";
import Keyboard from "./Keyboard";
import SlideButtons from "./SlideButtons";

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
`;
StyledCategory.displayName = "StyledContent";

export const Category = ({ showLocationListCb }) => (
  <StyledCategory data-qa="category-page">
    <Options showLocationListCb={showLocationListCb} />
    <SlideButtons />
    <Keyboard />
  </StyledCategory>
);

export default Category;
