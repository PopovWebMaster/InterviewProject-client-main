import React from 'react';
import { Component } from 'react';
import './DisplayStep_2.scss';

import { CLASS_NAME } from './../config.js';


export default class DisplayStep_2 extends Component{

    constructor(props){
        super(props);
        
    }

    shouldComponentUpdate( nextProps, nextState ){

        if( nextProps.question !==  this.props.question ){
            return true;

        };

        return false;

    }

    render(){
		return (
            <div className = { CLASS_NAME.DISPLAY_2 }>
                <span>
                    { this.props.step === 2? this.props.question: '' }
                </span>
            </div>

        )
    }

};
