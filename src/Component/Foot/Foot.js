import React, { Component } from 'react';

import './Foot.css';

class Foot extends Component {
    render() {
        return (
            <div className="center foot">
                <hr />
                <div className="contact">
                    <p>noah_luoya@163.com<br/>+86 185-0287-3361</p>
                </div>
                <p className="copyright">Copyright &copy; 2014 | Noah Photography ICP备14022517号</p>
            </div>
        );
    }
}

export default Foot;