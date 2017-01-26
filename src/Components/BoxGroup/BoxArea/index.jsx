import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '../Box';
import BoxSub from '../BoxSub';
import { coAjaxChild } from '../../../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return {
        child: state.COReducer.child,
    };
}

class BoxArea extends Component {

    componentDidUpdate(prevProps,prevState) {
        if (this.props.isHaveChild) {
            console.log('tiene hijos');
            if (prevProps.id !== this.props.id) {
                console.log('cambio id');
                fetch(`https://orga.cupagroup.com:1337/division?padre=${this.props.id}`)
                .then( rest => {
                    return rest.json();
                })
                .then( rest => {
                    this.props.dispatch( coAjaxChild(rest) );
                });
            }
        }
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className={`box-area ${this.props.spaceAlign}`}>
                {this.props.isHaveChild ? (
                    <BoxSub 
                        size={this.props.size}
                        puesto={this.props.puesto} 
                        user={this.props.user}
                        userName={this.props.userName}
                        id={this.props.id}
                        page={this.props.page}
                        child={this.props.child}
                        
                    />
                ) : (
                    <Box 
                        size={this.props.size}
                        puesto={this.props.puesto} 
                        user={this.props.user}
                        userName={this.props.userName}
                        id={this.props.id}
                        page={this.props.page}
                        users={this.props.users}
                    />
                )}
                
                <div className="space-box-area">
                    <div className="fase1"></div>
                    <div className="fase2"></div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

BoxArea.defaultProps = {
    isHaveChild: false
};

export default connect(mapStateToProps)(BoxArea);