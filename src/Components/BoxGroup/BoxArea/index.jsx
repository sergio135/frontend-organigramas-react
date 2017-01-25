import React, { Component } from 'react';
import Box from '../Box';
import BoxSub from '../BoxSub';
import './style.css';

class BoxArea extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className={`box-area ${this.props.spaceAlign}`}>
                {this.props.isHaveChild ? (
                    <BoxSub size={this.props.size}/>
                ) : (
                    <Box 
                        size={this.props.size}
                        puesto={this.props.puesto} 
                        user={this.props.user}
                        userName={this.props.userName}
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


export default BoxArea;