import React from "react";

import styled from "styled-components";
import List from "./List";
import { points } from "../MapPoints/points";
import MapPoint from "../MapPoints/MapPoint";

import small from "./../../assets/map-view-001-city-blocks-2-d-heading-up-side-day.png";
import medium from "./../../assets/map-view-001-city-blocks-2-d-heading-up-side-day@2x.png";
import large from "./../../assets/map-view-001-city-blocks-2-d-heading-up-side-day@3x.png";

const StyledLocationsWrapper = styled.div`
  background-image: image-set(
    url(${small}) 1x,
    url(${medium}) 2x,
    url(${large}) 3x
  );
  background-size: contain;
  background-repeat: no-reapeat;
  display: flex;
  height: 640px;
  position: relative;
  overflow: hidden;
`;
StyledLocationsWrapper.displayName = "StyledLocationsWrapper";

const LocationResults = ({ backCb, clickCb }) => (
  <StyledLocationsWrapper data-qa="location-list-wrapper">
    <List backCb={backCb} clickCb={clickCb} />
    {points.map(point => (
      <MapPoint key={point.id} {...point} />
    ))}
  </StyledLocationsWrapper>
);

export default LocationResults;
