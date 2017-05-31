/* global google */

import React from 'react';

class Marker extends React.Component {
  
  constructor(props) {
    console.log(props)
    super(props);
    this.position = props.position;
    this.googleMapArgs = {
      map: props.googleMap,
      position: this.position 
    };
    this.googleMapMarker = new google.maps.Marker(
      this.googleMapArgs
    );
  }

  render(){
    console.log("render called on marker")
    this.googleMapMarker.setPosition(this.position);
    return (null);
  }

}

export default Marker;