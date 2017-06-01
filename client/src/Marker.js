/* global google */

import React from 'react';

class Marker extends React.Component {
  
  constructor(props) {
    super(props);
    this.state.position = props.position;
    this.state.googleMapArgs = {
      map: props.googleMap,
      position: this.position 
    };
    this.googleMapMarker = new google.maps.Marker(
      this.state.googleMapArgs
    );
  }

  render(){
    this.googleMapMarker.setPosition(this.position);
    return (null);
  }

}

export default Marker;