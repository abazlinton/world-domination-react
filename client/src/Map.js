/* global google */
import React, {Component} from 'react';

class Map extends Component {

  constructor(props) {
    super(props);
  }

  onComponentDidMount(){
    this.googleMap = new google.maps.Map(this.refs.map, {
      center: {lat: 0, lng: 0}
    })
  }

  render() {
    return(
      <div 
        ref="map"
      >

      </div>
    )
  }

}

export default Map;