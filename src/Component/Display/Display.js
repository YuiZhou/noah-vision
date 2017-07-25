import React, { Component } from 'react';
import AutoResponsive from 'autoresponsive-react';
import './Display.css';

class Display extends Component {
    getAutoResponsiveProps() {
        var bodyWidth = document.body.clientWidth;
        var clientWidth = bodyWidth > 768 ? bodyWidth * 0.9 : bodyWidth - 20;
    return {
      itemMargin: 10,
      containerWidth: clientWidth,
      itemClassName: 'item',
      gridWidth: 10,
      transitionDuration: '.5'
    };
  }

    render() {
        const { images } = this.props;
        console.log(JSON.stringify(images));
        return (
            <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                {
                    images.map(function (x, i) {
                        var itemStyle = {
                            width: 200,
                            height: 200 * x.h / x.w
                        }
                        return <div className="item" style={itemStyle} key={i}><img src={process.env.PUBLIC_URL + "/portfolio/" + x.thumb}/></div>;
                    }, this)
                }
            </AutoResponsive>
        );
    }
}

export default Display;