import React from "react";
import styled from "styled-components";
import Item from "./Item";
import Header from "./Header";
import { foodLabel } from "../../common/strings";

import icoSortSmall from "./../../assets/ico-sort.png";
import icoSortMedium from "./../../assets/ico-sort@2x.png";
import icoSortLarge from "./../../assets/ico-sort@3x.png";

const StyledList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: inherit;
  min-width: 470px;
  width: 470px;
`;
StyledList.displayName = "StyledList";

const rightNavbarItems = [
  {
    id: "icoSort1",
    small: icoSortSmall,
    medium: icoSortMedium,
    large: icoSortLarge
  }
];

const items = [
  {
    id: 1,
    name: "Roy SteakHouse",
    address: "4321 Bowery Ave, Heaneyton, VT",
    distance: 3
  },
  {
    id: 2,
    name: "Geat Mall",
    address: "Great Mall Blvd. Heaneyton, VT",
    distance: 6
  },
  {
    id: 3,
    name: "Denny's",
    address: "22 Road, Heanyton, VT",
    distance: 12
  },
  {
    id: 4,
    name: "MacDonalds",
    address: "Main Steet, Heaneyton, VT",
    distance: 20
  },
  {
    id: 5,
    name: "Denny's",
    address: "12 Long Road, Heaneyton, VT",
    distance: 22
  }
];

const List = ({ backCb, clickCb }) => (
  <StyledList data-qa="list">
    <Header
      backCb={backCb}
      withBackIcon
      name={foodLabel}
      rightIcons={rightNavbarItems}
      withClose
    />
    {items.map((item, index) => (
      <Item key={item.id} {...item} index={index + 1} clickCb={clickCb} />
    ))}
  </StyledList>
);

export default List;
