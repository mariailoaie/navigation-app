import React from "react";
import styled from "styled-components";
import { StyledImgComponent } from "../../common/components/styledComponents";

const StyledMapPoint = styled(StyledImgComponent)`
  position: absolute;
  top: ${props => `${props.x}px`};
  left: ${props => `${props.y}px`};
`;

const MapPoint = ({ id, small, medium, large, x, y }) => (
    <StyledMapPoint
      data-qa={id}
      small={small}
      medium={medium}
      large={large}
      x={x}
      y={y}
    />
  );
;

export default MapPoint;
