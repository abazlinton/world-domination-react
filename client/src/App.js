/* global google */
import MapStyle from './mapStyle';
import React, { Component } from 'react';
import Map from './Map';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {googleMapDiv: null};
    this.getMapDiv = this.getMapDiv.bind(this);
  }

  componentDidMount(){

  }

  

  getMapDiv(){
    return this.state.googleMapDiv;
  }

  render() {
      return ( 
        <Map/
        >
          // getMapDiv={this.getMapDiv}
      )
  }
}

export default App;
