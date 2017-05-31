// line below shuts up ESLint
/* global google */

import Marker from './Marker';
import React, {Component} from 'react';
import MapDiv from './MapDiv';

class Map extends Component {

  constructor(props) {
    super(props);
    this.getMapDiv = props.getMapDiv;
    this.state = {};

  }

  makeMap(div){
    var testMap = new google.maps.Map(div,{
        center: {lat:0, lng: 0},
        zoom: 1
    })
    console.log(testMap);


  }
  

  render() {
    // this.setStateIfFalse();
    console.log(this.mapDiv)
    // if (this.getMapDiv()){
    //   console.log("hi")
    //   var testMap = new google.maps.Map(this.getMapDiv(),{
    //     center: {lat:0, lng: 0},
    //     zoom: 1
    //   })
    //   console.log(testMap);
    // }
    console.log("called!");
    // console.log(this.getMapDiv())
    return(
      <MapDiv
        mapDivRef={(div) => {
          
          this.makeMap(div)
        }}
      />   
    )
  }

}

export default Map;