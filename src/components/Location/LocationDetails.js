import React from "react";
import styled from "styled-components";

import Header from './Header';
import Details from './Details';
import { detailsLabel } from '../../common/strings';
import MapPoint from "../MapPoints/MapPoint";
import { detailsPoints } from "../MapPoints/detailsPoints";

import small from "../../assets/map-view-001-city-blocks-north-up-side-day.png";
import medium from "../../assets/map-view-001-city-blocks-north-up-side-day@2x.png";
import large from "../../assets/map-view-001-city-blocks-north-up-side-day@3x.png";
import ZoomDestinationButton from "./ZoomDestinationButton";

const StyledDetailsWrapper = styled.div`
  background-image: image-set(
    url(${small}) 1x,
    url(${medium}) 2x,
    url(${large}) 3x
  );
  background-size: contain;
  background-repeat: no-reapeat;
  display: flex;
  flex-direction: column;
  height: 640px;
  position: relative;
  overflow: hidden;
`;
StyledDetailsWrapper.displayName = "StyledDetailsWrapper";

const StyledZoomDestinationButton = styled(ZoomDestinationButton)`
  position: absolute;
  bottom: 12px;
  left: 482px;
`;

const LocationDetails = ({ backCb, clickCb, item }) => (
  <StyledDetailsWrapper data-qa="details-wrapper">
    <Header
      backCb={backCb}
      withBackIcon
      name={detailsLabel}
      withClose
    />
    <Details clickCb={clickCb} item={item} />
    {detailsPoints.map(point => (
      <MapPoint key={point.id} {...point} />
    ))}
    <StyledZoomDestinationButton/>
  </StyledDetailsWrapper>
);

export default LocationDetails;
