import React from "react";
import styled from "styled-components";

import Search from "./Search/Search";
import LocationBar from "./LocationBar";
import Category from "./Category/Category";
import MapPoint from "./MapPoints/MapPoint";
import {searchPoints} from "./MapPoints/searchPoints";
import LocationDirection from "./Location/LocationDirection";
import LocationsResults from "./Location/LocationResults";
import LocationDetails from "./Location/LocationDetails";

import small from "./../assets/map-view-001-city-blocks-3-d-heading-up-fullscreen-day.png";
import medium from "./../assets/map-view-001-city-blocks-3-d-heading-up-fullscreen-day@2x.png";
import large from "./../assets/map-view-001-city-blocks-3-d-heading-up-fullscreen-day@3x.png";

const StyledContent = styled.div`
  background-image: ${props =>
    props.backgroundImage &&
    `image-set( url(${small}) 1x,
                             url(${medium}) 2x, url(${large}) 3x)`};
  background-size: contain;
  background-repeat: no-reapeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
StyledContent.displayName = "StyledContent";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchCategoryPage: false,
      showSearchIcons: true,
      mapBackground: true
    };
  }

  showSearchCategoryCb = () => {
    this.setState(currentState => ({
      showSearchCategoryPage: !currentState.showSearchCategoryPage,
      showSearchIcons: !currentState.showSearchIcons,
      mapBackground: !currentState.mapBackground,
    }));
  };

  showLocationListCb = () => {
    this.setState(currentState => ({
      locationsResults: !currentState.locationsResults,
    }));
  };
  
  showLocationDetailsCb = () => {
    this.setState(currentState => ({
      locationDetails: !currentState.locationDetails,
    }));
  };
  
  showLocationDirectionCb = () => {
    this.setState(currentState => ({
      locationDirection: !currentState.locationDirection,
    }));
  };

  render() {
    const SearchView = (
      <>
        {searchPoints.map(point => <MapPoint key={point.id} {...point} />)}
        <LocationBar letter="S" name="Dundleer Dr" />
      </>
    );

    if(this.state.locationDirection) {
      return <LocationDirection backCb={this.showLocationDirectionCb} />;
    }
    
    if(this.state.locationDetails) {
      return <LocationDetails backCb={this.showLocationDetailsCb} clickCb={this.showLocationDirectionCb} />;
    }

    if (this.state.locationsResults) {
      return <LocationsResults backCb={this.showLocationListCb} clickCb={this.showLocationDetailsCb} />;
    }

    return (
      <StyledContent
        data-qa="content-page"
        backgroundImage={this.state.mapBackground}
      >
        <Search
          showSearchCategoryCb={this.showSearchCategoryCb}
          showSearchIcons={this.state.showSearchIcons}
        />
        {this.state.showSearchCategoryPage ? (
          <Category showLocationListCb={this.showLocationListCb} />
        ) : (
          SearchView
        )}
      </StyledContent>
    );
  }
}

export default Content;
