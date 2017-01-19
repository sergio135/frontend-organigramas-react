import React, { Component } from 'react';

import './style.css';

class Box extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className={`box ${this.props.size}`}>
                <div>
                    <img src=""/>
                </div>
                <div>
                    <p>Javier fernandez</p>
                    <p>Direccion general</p>
                </div>
            Componente Box
            </div>
        );
        /* jshint ignore:end */
    }
}

export default Box;