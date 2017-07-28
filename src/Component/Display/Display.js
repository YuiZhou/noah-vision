import React, { Component } from 'react';
import AutoResponsive from 'autoresponsive-react';
import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyWidth: document.body.clientWidth
        }
    }

    getAutoResponsiveProps() {
        const { bodyWidth } = this.state;
        var clientWidth = bodyWidth > 768 ? bodyWidth * 0.9 : bodyWidth - 20;
        return {
            itemMargin: 15,
            containerWidth: clientWidth,
            itemClassName: 'item',
            gridWidth: 10,
            transitionDuration: '.8',
            transitionTimingFunction: 'easeIn'
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                bodyWidth: document.body.clientWidth
            });
        }, false);
    }


    render() {
        const { images } = this.props;
        const fixWidth = 235;
        return (
            <AutoResponsive ref="container" {...this.getAutoResponsiveProps() }>
                {
                    images.map(function (x, i) {
                        var itemStyle = {
                            width: fixWidth,
                            height: fixWidth * x.h / x.w
                        }
                        return <div className="item" style={itemStyle} key={i}><img src={process.env.PUBLIC_URL + '/portfolio/' + x.thumb} alt={x.discribe} /></div>;
                    }, this)
                }
            </AutoResponsive>
        );
    }
}

export default Display;