import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxArea from '../BoxGroup/BoxArea';
import { cmiAjax } from '../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return { 
        data: state.CMIReducer.data,
        user: state.CMIReducer.user,
        users: state.CMIReducer.users
    };
}

class CMIarea extends Component {

    componentDidMount() {
        fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( cmiAjax(rest) );
        });
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className="cmi-area">
                <BoxArea 
                    spaceAlign="left" 
                    size="medium"
                    puesto={this.props.data.puesto} 
                    user={this.props.user.user}
                    userName={this.props.user.userName}
                />
            </div>
        );
        /* jshint ignore:end */
    }
}

CMIarea.defaultProps = {
    data: { 
        id: null,
        padre: null,
        page: false,
        puesto: 'Cargando...'
    },
    user: {
        user: null,
        userName: 'Cargando...'
    },
    users: []
};

export default connect(mapStateToProps)(CMIarea);