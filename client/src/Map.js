// line below shuts up ESLint
/* global google */

import Marker from './Marker';
import React, {Component} from 'react';

class Map extends Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.googleMap = props.googleMap;
  }

  componentDidMount(){
  }

  render() {
    console.log('map render called')
    return(
      <div>
       <Marker
        position ={{ 
            lat: 0, lng: 0
          }}
        googleMap = {this.googleMap}
       />
      </div>
    )
  }

}

export default Map;