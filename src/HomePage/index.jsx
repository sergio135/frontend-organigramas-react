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
            <div>
                <h1>Componente Home</h1>
                <CDarea/>
                <div className="flex-area">
                    <CMDarea/>
                    <CMIarea/>
                </div>
                <div className="flex-area">
                    <COarea/>
                    <CNarea/>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default HomePage;