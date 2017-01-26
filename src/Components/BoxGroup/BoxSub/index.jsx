import React, { Component } from 'react';
import uuid from 'uuid';
import BoxArea from '../BoxArea';
import './style.css';

class BoxSub extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div>
                <BoxArea 
                    spaceAlign="right" 
                    size="medium"
                    puesto={this.props.puesto} 
                    user={this.props.user}
                    userName={this.props.userName}
                    id={this.props.id}
                    page={this.props.page}
                />
                <div className="box-sub-area">
                    {this.props.child.map(rest => {
                        return(
                            <BoxArea 
                                spaceAlign="left" 
                                size="small"
                                puesto={rest.data.puesto} 
                                user={rest.user.user}
                                userName={rest.user.userName}
                                key={uuid.v4()}
                                id={rest.data.id}
                                page={rest.data.page}
                            />
                        );
                    })}
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

BoxSub.defaultProps = {
    child: []
};

export default BoxSub;