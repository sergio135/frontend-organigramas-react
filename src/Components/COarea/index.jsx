import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxArea from '../BoxGroup/BoxArea';
import { coAjax } from '../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return { 
        data: state.COReducer.data,
        user: state.COReducer.user,
        users: state.COReducer.users
    };
}

class COarea extends Component {

    componentDidMount() {
        fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( coAjax(rest) );
        });
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className="co-area">
                <BoxArea 
                    spaceAlign="top" 
                    size="medium"
                    isHaveChild={true}
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

COarea.defaultProps = {
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

export default connect(mapStateToProps)(COarea);