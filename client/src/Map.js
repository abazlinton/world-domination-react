// line below shuts up ESLint
/* global google */
import React, {Component} from 'react';

class Map extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.googleMap = new google.maps.Map(this.refs.map, {
      center: {lat: 0, lng: 0},
      zoom: 1
    })
  }

  render() {

    return(
      <div>
       <div
        id="map" ref="map"
       >
       </div>
      </div>
    )
  }

}

export default Map;