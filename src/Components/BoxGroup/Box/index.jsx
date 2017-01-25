import React, { Component } from 'react';

import './style.css';

class Box extends Component {
    render () {
        /* jshint ignore:start */
        let photo = {backgroundImage: `url(https://intranet.cupagroup.com/cupire-padesa/users/ShowUserJpegPhoto.do?userLogin=${this.props.user})`}
        return(
            <div className={`box ${this.props.size}`}>
                <div className="photo-area">
                    <span style={photo}/>
                </div>
                <div className="info-area">
                    <p className="name">{this.props.userName}</p>
                    <p className="cargo">{this.props.puesto}</p>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

Box.defaultProps = {
    user: 'test',
    userName: 'Nombre hola',
    puesto: 'Tecnico de algo'
};

export default Box;