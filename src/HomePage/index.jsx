import React, { Component } from 'react';
import CDarea from '../Components/CDarea';
import CMDarea from '../Components/CMDarea';
import CMIarea from '../Components/CMIarea';
import COarea from '../Components/COarea';
import CNarea from '../Components/CNarea';
import './style.css';

class HomePage extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="home-component">
            {this.props.data}
                <CDarea id={1}/>
                <div className="flex-area">
                    <CMDarea id={2}/>
                    <CMIarea id={3}/>
                </div>
                <div className="flex-area">
                    <COarea id={76}/>
                    <CNarea id={5}/>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default HomePage;