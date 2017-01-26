import React, { Component } from 'react';

import CDarea from '../Components/CDarea';
import CTarea from '../Components/CTarea';
import './style.css';

class DivisionPage extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(e) {
        e.preventDefault();
        history.back();
    }

    render() {
        /* jshint ignore:start */
        return(
            <div className="division-component">
                <div><button onClick={this.goBack}>Atras</button></div>
                <CDarea id={this.props.params.id}/>
                <CTarea id={this.props.params.id}/>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default DivisionPage;