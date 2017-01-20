import React, { Component } from 'react';
import BoxArea from '../BoxGroup/BoxArea';
import './style.css';

class CDarea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="cd-area">
                <BoxArea spaceAlign="down" size="big"/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default CDarea;