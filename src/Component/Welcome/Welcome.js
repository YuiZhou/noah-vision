import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <a href={this.props.scrollTo}><div className="intro-body">
                    <section><span id="arrow-0"></span></section>
                    <section><span id="arrow-1"></span></section>
                </div>
                </a>
            </div>
        );
    }
}

export default Welcome;