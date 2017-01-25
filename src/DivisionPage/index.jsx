import React, { Component } from 'react';

import CDarea from '../Components/CDarea';
import CTarea from '../Components/CTarea';
import './style.css';

class DivisionPage extends Component {
    render () {
        /* jshint ignore:start */
        return(
            <div className="division-component">
                <CDarea id={this.props.params.id}/>
                <CTarea id={this.props.params.id}/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default DivisionPage;