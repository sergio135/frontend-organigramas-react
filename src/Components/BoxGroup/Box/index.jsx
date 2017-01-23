import React, { Component } from 'react';

import './style.css';

class Box extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className={`box ${this.props.size}`}>
                <div className="photo-area">
                    <span style={this.props.photo}/>
                </div>
                <div className="info-area">
                    <p className="name">{this.props.name}</p>
                    <p className="cargo">{this.props.cargo}</p>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

Box.defaultProps = {
    photo: { backgroundImage: `url(https://intranet.cupagroup.com/cupire-padesa/directory/images/retratos/javier-fernandez.jpg)` },
    name: 'Nombre hola',
    cargo: 'Tecnico de algo'
};

export default Box;