/* global google */
import MapStyle from './mapStyle';
import React, { Component } from 'react';
import Map from './Map';


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.refs)
  }

  render() {

    
    
    return (
      <div className="App">
        <div ref={(map) => {this.googleMapDiv = map}}>
          <Map 
            googleMap={this.googleMapDiv}
          />
        </div>    
      </div>
    );
  }
}

export default App;
