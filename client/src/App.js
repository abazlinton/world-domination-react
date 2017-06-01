/* global google */
import React, { Component } from 'react';
import Map from './Map';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {googleMapDiv: null};
    this.getMapDiv = this.getMapDiv.bind(this);
  }

  getMapDiv(){
    return this.state.googleMapDiv;
  }

  render() {
    return ( 
      <Map/
      >
    )
  }
}

export default App;
