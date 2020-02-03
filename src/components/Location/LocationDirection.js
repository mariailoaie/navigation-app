import React from "react";
import styled from "styled-components";

import OptionsIconButton from '../Search/OptionsIconButton';
import LocationBar from '../LocationBar';
import PanelBarComponent, {PanelBarWithIconComponent} from './PanelBarComponent';
import TrafficBar from './TrafficBar';
import MapPoint from "../MapPoints/MapPoint";
import { directionPoints } from "../MapPoints/directionPoints";
import {locationBarBackgroundColor, primaryColor} from "../../common/colors";
import {textStyleDigitsNavigation, textStyleStreetNameNavigation} from "../../common/textStyles";
import { StyledImgComponent } from '../../common/components/styledComponents';

import small from "../../assets/map-view-001-city-blocks-3-d-heading-up-side-day.png";
import medium from "../../assets/map-view-001-city-blocks-3-d-heading-up-side-day@2x.png";
import large from "../../assets/map-view-001-city-blocks-3-d-heading-up-side-day@3x.png";
import closeSmall from "../../assets/ico-button-action-bar-end.png";
import closeMedium from "../../assets/ico-button-action-bar-end@2x.png";
import closeLarge from "../../assets/ico-button-action-bar-end@3x.png";
import searchSmall from "../../assets/ico-floating-bar-search.png";
import searchMedium from "../../assets/ico-floating-bar-search@2x.png";
import searchLarge from "../../assets/ico-floating-bar-search@3x.png";
import overviewSmall from "../../assets/ico-overview.png";
import overviewMedium from "../../assets/ico-overview@2x.png";
import overviewLarge from "../../assets/ico-overview@3x.png";
import nextIconSmall from "../../assets/ico-forward.png";
import nextIconMedium from "../../assets/ico-forward@2x.png";
import nextIconLarge from "../../assets/ico-forward@3x.png";
import directionIconSmall from "../../assets/ico-turn-left-dark-bg.png";
import directionIconMedium from "../../assets/ico-turn-left-dark-bg@2x.png";
import directionIconLarge from "../../assets/ico-turn-left-dark-bg@3x.png";
import meniuIconSmall from "../../assets/ico-turn-list.png";
import meniuIconMedium from "../../assets/ico-turn-list@2x.png";
import meniuIconLarge from "../../assets/ico-turn-list@3x.png";

// -------- start mock data ------------

const directionItem = {
  extimatedArrival: {
    value: '13:05',
    label: 'arrival'
  },
  estimatedDuration: {
    time: 14,
    measurement: 'min',
  },
  estimatedSpeed: {
    value: 160,
    measurement: 'km'
  },
  directionChangeInfo: {
    icon: {
      small: directionIconSmall,
      medium: directionIconMedium,
      large: directionIconLarge,
    },
    distance: {
      value: '1.2',
      measurement: 'km'
    },
    address: 'Haddington Dr'
  }
}

const barBottomItems = [
  {
    id: 'itemBarDirection1',
    firstRow: {
      small: closeSmall,
      medium: closeMedium,
      large: closeLarge,
    },
    secondRow: 'End Trip'
  },{
    id: 'itemBarDirection2',
    firstRow: {
      small: searchSmall,
      medium: searchMedium,
      large: searchLarge,
    },
    secondRow: 'Add Stop'
  },{
    id: 'itemBarDirection3',
    firstRow: {
      small: overviewSmall,
      medium: overviewMedium,
      large: overviewLarge,
    },
    secondRow: 'Overview'
  },
];

const barTopItems = [
  {
    id: 'itemBarTopDirection1',
    firstRow: "13:05",
    secondRow: 'arrival'
  },{
    id: 'itemBarTopDirection2',
    firstRow: "14",
    secondRow: 'min'
  },{
    id: 'itemBarTopDirection3',
    firstRow: '160',
    secondRow: 'km'
  },
];

const iconRight = {
  small: nextIconSmall,
  medium: nextIconMedium,
  large: nextIconLarge,
}

// -------- end mock data ------------

const StyledDirectionWrapper = styled.div`
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
`;
StyledDirectionWrapper.displayName = "StyledDirectionWrapper";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  background: ${locationBarBackgroundColor};
  border-radius: 6px;
  justify-content: space-between;
  margin: 12px;
  width: 468px;
  height: 616px;
  overflow: hidden;
}
`;
StyledPanel.displayName = 'StyledPanel';

const StyledPanelContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 436px;
  padding: 27px;
  box-sizing: border-box;
`;
StyledPanelContent.displayName = 'StyledPanelContent';

const StyledOptionsIconButton = styled(OptionsIconButton)`
  position: absolute;
  top: 12px;
  right: 12px;
`;
StyledOptionsIconButton.displayName = 'StyledOptionsIconButton';

const StyledLocationBar = styled(LocationBar)`
  position: absolute;
  bottom: 12px;
  right: 122px;
`;
StyledLocationBar.displayName = 'StyledLocationBar';

const StyledTrafficBar = styled(TrafficBar)`
  position: absolute;
  top: 98px;
  right: 19.5px;
`;
StyledTrafficBar.displayName = 'StyledTrafficBar';
const StyledPanelTopBarComponent = styled(PanelBarComponent)`
  padding: 10px 0 44px 44px;
  box-sizing: border-box;
`;
StyledPanelTopBarComponent.displayName = 'StyledPanelTopBarComponent';

const StyledPanelBottomBarComponent = styled(PanelBarWithIconComponent)`
  color: ${primaryColor};
  background: #fff;
`;
StyledPanelBottomBarComponent.displayName = 'StyledPanelBottomBarComponent';

const StyledPanelSecondRow = styled.div`
  color: ${textStyleDigitsNavigation.color};
  font-size: ${textStyleDigitsNavigation.fontSize};
  font-weight: ${textStyleDigitsNavigation.fontWeight}
`;
StyledPanelSecondRow.displayName = 'StyledPanelSecondRow';

const StyledPanelThirdRow = styled.div`
  color: ${textStyleStreetNameNavigation.color};
  font-size: ${textStyleStreetNameNavigation.fontSize};
  font-weight: ${textStyleStreetNameNavigation.fontWeight}
`;
StyledPanelThirdRow.displayName = 'StyledPanelThirdRow';

const StyledPanelTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
StyledPanelTop.displayName = 'StyledPanelTop';


const getPanelContent = ({ directionChangeInfo}) => (
  <StyledPanelContent data-qa="panel-content">
    <StyledPanelTop data-qa="panel-top">
      <StyledImgComponent {...directionChangeInfo.icon} />
      <StyledPanelSecondRow>
        {directionChangeInfo.distance.value} {directionChangeInfo.distance.measurement}
      </StyledPanelSecondRow>
      <StyledPanelThirdRow>{directionChangeInfo.address}</StyledPanelThirdRow>
    </StyledPanelTop>
    <StyledImgComponent small={meniuIconSmall} medium={meniuIconMedium} large={meniuIconLarge} />
  </StyledPanelContent>
);

const LocationDirection = ({ backCb, clickCb, item=directionItem }) => (
  <StyledDirectionWrapper data-qa="direction-wrapper">
    <StyledPanel data-qa="panel">
      <StyledPanelTopBarComponent items={barTopItems} iconRight={iconRight} />
      {getPanelContent(item)}
      <StyledPanelBottomBarComponent items={barBottomItems} />
    </StyledPanel>
    <StyledOptionsIconButton color="white" />
    <StyledLocationBar letter="S" name="Dundleer Dr" />
    <StyledTrafficBar/>
    {directionPoints.map(point => (
      <MapPoint key={point.id} {...point} />
    ))}
  </StyledDirectionWrapper>
);

export default LocationDirection;
