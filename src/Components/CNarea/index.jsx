import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import BoxArea from '../BoxGroup/BoxArea';
import { cnAjax } from '../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return {
        data: state.CNReducer,
    };
}

class CNarea extends Component {

    componentDidMount() {
        fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( cnAjax(rest) );
        });
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className="cn-area">
            {this.props.data.map(rest => {
                return(
                    <BoxArea 
                    spaceAlign="left" 
                    size="medium"
                    puesto={rest.data.puesto} 
                    user={rest.user.user}
                    userName={rest.user.userName}
                    key={uuid.v4()}
                    />
                );
            })}
            </div>
        );
        /* jshint ignore:end */
    }
}

export default connect(mapStateToProps)(CNarea);