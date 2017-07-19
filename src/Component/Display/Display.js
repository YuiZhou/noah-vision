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
      gridWidth: 100,
      transitionDuration: '.5'
    };
  }

    render() {
        const { images } = this.props;
        return (
            <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                {
                    images.map(function (x, i) {
                        var itemStyle = {
                            width: 200,
                            height: 200 * x.h / x.w
                        }
                        return <div className="item" style={itemStyle} key={i}><p>{i}</p></div>;
                    }, this)
                }
            </AutoResponsive>
        );
    }
}

export default Display;