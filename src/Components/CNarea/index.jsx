import React, { Component } from 'react';
import BoxArea from '../BoxGroup/BoxArea';
import './style.css';

class CNarea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="cn-area">
                <BoxArea spaceAlign="left" size="medium"/>
                <BoxArea spaceAlign="left" size="medium"/>
                <BoxArea spaceAlign="left" size="medium"/>
                <BoxArea spaceAlign="left" size="medium"/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default CNarea;