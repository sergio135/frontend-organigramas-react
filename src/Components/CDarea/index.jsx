import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxArea from '../BoxGroup/BoxArea';
import { cdAjax } from '../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return { 
        data: state.CDReducer.data,
        user: state.CDReducer.user,
        users: state.CDReducer.users
    };
}

class CDarea extends Component {

    componentDidMount() {
        fetch(`https://orga.cupagroup.com:1337/division?id=${this.props.id}`)
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( cdAjax(rest) );
        });
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps.id !== this.props.id) {
            console.log('cambio la ruta CD');
            fetch(`https://orga.cupagroup.com:1337/division?id=${this.props.id}`)
            .then( rest => {
                return rest.json();
            })
            .then( rest => {
                this.props.dispatch( cdAjax(rest) );
            });
        }
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className="cd-area">
                <BoxArea 
                    spaceAlign="down" 
                    size="big"
                    puesto={this.props.data.puesto} 
                    user={this.props.user.user}
                    userName={this.props.user.userName}
                    id={this.props.data.id}
                    page={false}
                />
            </div>
        );
        /* jshint ignore:end */
    }
}

CDarea.defaultProps = {
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

export default connect(mapStateToProps)(CDarea);