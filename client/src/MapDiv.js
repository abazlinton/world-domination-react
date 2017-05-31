import React from 'react';

function MapDiv(props) {
  return (
    <div>
      <div ref={props.mapDivRef} id="map"/>
    </div>
  );
}

export default MapDiv;