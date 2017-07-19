import React, { Component } from 'react';
import {AutoAffix} from 'react-overlays';

import Welcome from './Component/Welcome/Welcome.js';
import Banner from './Component/Banner/Banner.js';
import Foot from './Component/Foot/Foot.js';

import './App.css';

import ImageFactory from './Lib/imageFactory.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ImageFactory.tags,
      active: ImageFactory.DEFAULT_INDEX,
      images: ImageFactory.getImages(),
      banner: 'banner'
    }

    this.onSwitchTag = this.onSwitchTag.bind(this);
  }

  onSwitchTag(index) {
    var images = ImageFactory.getImages(index);
    this.setState(function () {
      return { active: index, images: images }
    });
  }

  render() {
    const { tags, active, images, banner } = this.state;
    return (
      <div className="App">
        <Welcome scrollTo={'#' + banner}/>
        <AutoAffix >
          <div id={banner} className="center">
            <Banner tags={tags} active={active} onSwitchTag={this.onSwitchTag} />
          </div>
        </AutoAffix>
        <div className="center">
          {/*<Display images={images} />
          */}
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
