import React, { Component } from 'react';
import BoxArea from '../BoxGroup/BoxArea';
import './style.css';

class CMIarea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="cmi-area">
                <BoxArea spaceAlign="left" size="medium"/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default CMIarea;