import React, { Component } from 'react';
import './App.css';

import ImageFactory from './Lib/imageFactory.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags : ImageFactory.tags,
      active: ImageFactory.DEFAULT_INDEX,
      images: ImageFactory.getImages()
    }

    this.onSwitchTag = this.onSwitchTag.bind(this);
  }

  onSwitchTag(index) {}

  render() {
    const {tags, active, images} = this.state;
    return (
      <div className="App">
        <Welcome />
        <Banner tags="tags" active="active" onSwitchTag={ onSwitchTag.bind(this, id) }/>
        <Display images={ images }/>
        <Foot />
      </div>
    );
  }
}

export default App;
