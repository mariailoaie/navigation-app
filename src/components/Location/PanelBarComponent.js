import React from "react";
import styled from "styled-components";

import { StyledImgComponent } from "../../common/components/styledComponents";
import {
  textStyleActionBarButtonNavigation,
  textStyleDigitsHeaderNavigation,
  textStyleUnitsHeaderNavigation
} from "../../common/textStyles";

const StyledPanelBar = styled.div`
  background: #202224;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  width: inherit;
  height: 90px;
`;
StyledPanelBar.displayName = "StyledPanelBar";

const StyledPanelWithIconBar = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${textStyleActionBarButtonNavigation.color};
  width: inherit;
  height: 89px;
  img {
    width: 40px;
  }
`;
StyledPanelWithIconBar.displayName = "StyledPanelWithIconBar";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  max-width: 126px;
`;
StyledItem.displayName = "StyledItem";

const StyledWithIconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${textStyleActionBarButtonNavigation.color};
  display: flex;
  font-size: ${textStyleActionBarButtonNavigation.fontSize};
  font-weight: ${textStyleActionBarButtonNavigation.fontWeight};
  flex-direction: column;
  justify-content: center;
  height: 89px;
  width: 154px;
`;
StyledWithIconItem.displayName = "StyledWithIconItem";

const StyledFirstRow = styled.div`
  color: ${textStyleDigitsHeaderNavigation.color};
  display: flex;
  font-size: ${textStyleDigitsHeaderNavigation.fontSize};
  font-weight: ${textStyleDigitsHeaderNavigation.fontWeight};
`;
StyledFirstRow.displayName = "StyledFirstRow";

const StyledSecondRow = styled.div`
  color: ${textStyleUnitsHeaderNavigation.color};
  display: flex;
  font-size: ${textStyleUnitsHeaderNavigation.fontSize};
  font-weight: ${textStyleUnitsHeaderNavigation.fontWeight};
`;
StyledSecondRow.displayName = "StyledSecondRow";

const StyledFirstWithIconRow = styled.div`
  display: flex;
`;
StyledFirstWithIconRow.displayName = "StyledFirstWithIconRow";

const StyledSecondWithIconRow = styled.div`
  display: flex;
`;
StyledSecondWithIconRow.displayName = "StyledSecondWithIconRow";

const StyledBarIcon = styled(StyledImgComponent)`
  display: flex;
  height: 50px;
  padding-top: 10px;
  width: 50px;
`;
StyledBarIcon.displayName = "StyledBarIcon";

const StyledItemComponent = ({ firstRow, secondRow, ...rest }) => {
  return (
    <StyledItem {...rest}>
      {typeof firstRow === "string" && (
        <StyledFirstRow>{firstRow}</StyledFirstRow>
      )}
      {typeof firstRow === "object" && <StyledImgComponent {...firstRow} />}
      <StyledSecondRow>{secondRow}</StyledSecondRow>
    </StyledItem>
  );
};

const StyledItemWithIconComponent = ({ firstRow, secondRow, ...rest }) => {
  return (
    <StyledWithIconItem {...rest}>
      {typeof firstRow === "string" && (
        <StyledFirstWithIconRow>{firstRow}</StyledFirstWithIconRow>
      )}
      {typeof firstRow === "object" && <StyledImgComponent {...firstRow} />}
      <StyledSecondWithIconRow>{secondRow}</StyledSecondWithIconRow>
    </StyledWithIconItem>
  );
};

export const StyledPanelBarComponent = ({
  items = [],
  iconLeft,
  iconRight,
  ...rest
}) => (
  <StyledPanelBar {...rest} data-qa="panel-bar">
    {iconLeft && <StyledBarIcon {...iconLeft} />}
    {items &&
      items.length &&
      items.map(item => <StyledItemComponent key={item.id} {...item} />)}
    {iconRight && <StyledBarIcon {...iconRight} />}
  </StyledPanelBar>
);

export const PanelBarWithIconComponent = ({ items = [], ...rest }) => (
  <StyledPanelWithIconBar {...rest} data-qa="panel-bar-with-icon">
    {items &&
      items.length &&
      items.map(item => (
        <StyledItemWithIconComponent key={item.id} {...item} />
      ))}
  </StyledPanelWithIconBar>
);

export default StyledPanelBarComponent;
