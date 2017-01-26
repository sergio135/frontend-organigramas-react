import React, { Component } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid';
import BoxArea from '../BoxArea';
import './style.css';

class Box extends Component {
    render () {
        /* jshint ignore:start */
        let photo = {backgroundImage: `url(https://intranet.cupagroup.com/cupire-padesa/users/ShowUserJpegPhoto.do?userLogin=${this.props.user})`}
        let link = null;
        if (this.props.page) {
            link = (
                <div className="info-area">
                    <Link to={`/${this.props.id}`}>
                        <p className="name">{this.props.userName}</p>
                        <p className="cargo">{this.props.puesto}</p>
                    </Link>
                </div>
            );
        } else {
            link = (
                <div className="info-area">
                <p className="name">{this.props.userName}</p>
                <p className="cargo">{this.props.puesto}</p>
            </div>
            );
        }
        return(
            <div>
                <div className={`box ${this.props.size}`}>
                    <div className="photo-area">
                        <span style={photo}/>
                    </div>
                    {link}
                </div>
                <div className="box-users">
                    {this.props.users.map(rest => {
                        return(
                            <BoxArea 
                                spaceAlign="left" 
                                size="small"
                                puesto={this.props.puesto}
                                user={rest.user}
                                userName={rest.userName}
                                key={uuid.v4()}
                            />
                        );
                    })}
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

Box.defaultProps = {
    user: 'test',
    userName: 'Nombre hola',
    puesto: ' ',
    users: []
};

export default Box;