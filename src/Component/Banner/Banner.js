import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import './Banner.css';

class Banner extends Component {
    render() {
        const {onSwitchTag, active, tags} = this.props;
        return (
            <Nav bsStyle="pills" activeKey={active} onSelect={onSwitchTag}>
                {tags.map(function (x) {
                    return (<NavItem eventKey={x.key} key={x.key}>{x.name}</NavItem>);
                })}
            </Nav>
        );
    }
}

export default Banner;