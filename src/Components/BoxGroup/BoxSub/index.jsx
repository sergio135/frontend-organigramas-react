import React, { Component } from 'react';
import BoxArea from '../BoxArea';
import './style.css';

class BoxSub extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div>
                <BoxArea spaceAlign="right" size="medium"/>
                <div className="box-sub-area">
                    <BoxArea spaceAlign="left" size="small"/>
                    <BoxArea spaceAlign="left" size="small"/>
                    <BoxArea spaceAlign="left" size="small"/>
                    <BoxArea spaceAlign="left" size="small"/>
                    <BoxArea spaceAlign="left" size="small"/>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default BoxSub;