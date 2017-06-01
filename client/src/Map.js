// line below shuts up ESLint
/* global google */

import Marker from './Marker';
import React, {Component} from 'react';
import MapDiv from './MapDiv';
import MapStyles from './mapStyles';


class Map extends Component {

  constructor(props) {
    super(props);
    this.getMapDiv = props.getMapDiv;
    this.state = {};
  }

  makeMap(div){
    if (!this.state.map){
      console.log("makeMap called");
      const map = new google.maps.Map(div,{
          center: {lat:30, lng: 0},
          zoom: 3,
          styles: MapStyles
      });
      this.setState({
        map: map,
        div: div
      });
    return div
    }
    else return this.state.div;
  }
  
  render() {
      return (
        <div>
          <MapDiv
            mapDivRef={(div) => {       
              this.makeMap(div)
            }}
          /> 
          <Marker/>
        </div>

      )
    }




}

export default Map;