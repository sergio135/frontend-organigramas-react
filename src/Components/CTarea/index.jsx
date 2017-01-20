import React, { Component } from 'react';
import BoxArea from '../BoxGroup/BoxArea';
import './style.css';

class CTarea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="ct-area">
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium" isHaveChild={true}/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
                <BoxArea spaceAlign="top" size="medium"/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default CTarea;