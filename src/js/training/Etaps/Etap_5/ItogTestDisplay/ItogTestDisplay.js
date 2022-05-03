import React from 'react';
import { Component } from 'react';
import './ItogTestDisplay.scss';

import DisplayStep_1 from './DisplayStep_1/DisplayStep_1.js';
import DisplayStep_2 from './DisplayStep_2/DisplayStep_2.js';

import { controller } from './controller.js';
import { CLASS_NAME } from './config.js';


export default class ItogTestDisplay extends Component{

    constructor(props){
        super(props);

    }

    shouldComponentUpdate( nextProps, nextState ){

        if( nextProps.step !==  this.props.step ){
            if( nextProps.step === 1 ){
                controller.openStep_1();

            }else if( nextProps.step === 2 ){
                controller.openStep_2();

            };
        };


        if( nextProps.question !==  this.props.question ){
            return true;

        };

        return false;

    }

    componentDidMount(){
        controller.setInitialStyles( this.props.step );
    }

    render(){
		return (
            <div className = { CLASS_NAME.ITOG_TEST_DISPLAY }>
                <DisplayStep_1 
                    actionRepeat = { this.props.actionRepeat }
                    step = { this.props.step }
                />
                <DisplayStep_2 
                    question = { this.props.question }
                    step = { this.props.step }
                />
            </div>

        )
    }

};
