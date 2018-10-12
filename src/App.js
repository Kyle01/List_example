import React, { Component } from 'react';
import List from './list';
import Map from './map';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
