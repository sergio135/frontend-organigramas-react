import React, { Component } from 'react';
import { connect } from 'react-redux';
import CDarea from '../Components/CDarea';
import CMDarea from '../Components/CMDarea';
import CMIarea from '../Components/CMIarea';
import COarea from '../Components/COarea';
import CNarea from '../Components/CNarea';
import { cdAjax } from '../redux/actions';
import './style.css';

function mapStateToProps(state, props) {
    return {data: state};
}

class HomePage extends Component {

    componentDidMount() {

        fetch('https://orga.cupagroup.com:1337/division?padre=65')
        .then( rest => {
            return rest.json();
        })
        .then( rest => {
            this.props.dispatch( cdAjax(rest) );

        });
        
    }

    render () {
        /* jshint ignore:start */
        return(
            <div className="home-component">
            {this.props.data}
                <CDarea/>
                <div className="flex-area">
                    <CMDarea/>
                    <CMIarea/>
                </div>
                <div className="flex-area">
                    <COarea/>
                    <CNarea/>
                </div>
            </div>
        );
        /* jshint ignore:end */
    }
}

export default connect()(HomePage);