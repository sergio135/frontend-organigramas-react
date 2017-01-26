import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxArea from '../BoxGroup/BoxArea';
import { cmdAjax } from '../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return {
        data: state.CMDReducer.data,
        user: state.CMDReducer.user,
        users: state.CMDReducer.users
    };
}

class CMDarea extends Component {

    componentDidMount() {
        fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( cmdAjax(rest) );
        });
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className="cmd-area">
                <BoxArea 
                    spaceAlign="right" 
                    size="medium"
                    puesto={this.props.data.puesto} 
                    user={this.props.user.user}
                    userName={this.props.user.userName}
                    id={this.props.data.id}
                    page={this.props.data.page}
                />
            </div>
        );
        /* jshint ignore:end */
    }
}

CMDarea.defaultProps = {
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

export default connect(mapStateToProps)(CMDarea);