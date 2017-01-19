import React, { Component } from 'react';
import BoxArea from '../BoxGroup/BoxArea';
import './style.css';

class COarea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="co-area">
                <BoxArea spaceAlign="right" size="medium" isHaveChild={true}/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default COarea;