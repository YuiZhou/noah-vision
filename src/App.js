import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getTags, getImages } from './Lib/imageFactory.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tags : getTags(),
      active: 0,
      images: getImages()
    }
  }

  render() {
    const {tags, active, images} = this.state;
    return (
      <div className="App">
        <Welcome />
        <Banner tags="tags" active="active" onSwitchTag="onSwitchTag.bind(this, id)"/>
        <Display />
      </div>
    );
  }
}

export default App;
