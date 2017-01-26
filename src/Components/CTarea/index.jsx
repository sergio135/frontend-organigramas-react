import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import BoxArea from '../BoxGroup/BoxArea';
import { ctAjax } from '../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return {
        data: state.CTReducer,
    };
}

class CTarea extends Component {

    componentDidMount() {
        fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( ctAjax(rest) );
        });
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps.id !== this.props.id) {
            console.log('cambio la ruta CT');
            fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
            .then( rest => {
                return rest.json();
            })
            .then( rest => {
                this.props.dispatch( ctAjax(rest) );
            });
        }
    }
    

    render () {
        /* jshint ignore:start */
        return(
            <div className="ct-area">
            {this.props.data.map(rest => {
                return(
                    <BoxArea 
                    spaceAlign="top" 
                    size="medium"
                    puesto={rest.data.puesto} 
                    user={rest.user.user}
                    userName={rest.user.userName}
                    key={uuid.v4()}
                    id={rest.data.id}
                    page={rest.data.page}
                    users={rest.users}
                    />
                );
            })}
            </div>
        );
        /* jshint ignore:end */
    }
}

export default connect(mapStateToProps)(CTarea);