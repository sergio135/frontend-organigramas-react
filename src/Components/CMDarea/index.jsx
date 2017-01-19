import React, { Component } from 'react';
import BoxArea from '../BoxGroup/BoxArea';
import './style.css';

class CMDarea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="cmd-area">
                <BoxArea spaceAlign="right" size="medium"/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default CMDarea;