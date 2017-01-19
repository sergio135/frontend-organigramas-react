import React, { Component } from 'react';

import Box from '../Box';

import './style.css';

class BoxArea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className={`box-area ${this.props.spaceAlign}`}>
                <Box size="medium"/>
                <div className="space-box-area">
                    <div className="fase1"></div>
                    <div className="fase2"></div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default BoxArea;