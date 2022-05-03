import React from 'react';
import { Component } from 'react';
import './Step.scss';

import { controller } from './controller.js';
import { CLASS_NAME } from './config.js';

export default class Step extends Component{

    constructor(props){
        super(props);
    }

    shouldComponentUpdate( nextProps, nextState){

        if( this.props.test_in_process !== nextProps.test_in_process ){
            if( nextProps.test_in_process ){
                controller.open();
            }else{
                controller.close();
            };
        };

        if( this.props.step !== nextProps.step ){

            if( nextProps.step === 1 ){
                controller.showStep1();
                
            }else if( nextProps.step === 2 ){
                controller.showStep2();
            };
            return true;
        };

        return false;
    }

    render(){
		return (
            <div className = { CLASS_NAME.STEPS }>
                <div className = { CLASS_NAME.STEP_TEXT }>
                    <div className = { CLASS_NAME.STEP_1 }>
                        <span>Шаг 1</span>
                    </div>
                    <div className = { CLASS_NAME.STEP_2 }>
                        <span>Шаг 2</span>
                    </div>
                </div>
                <div className = { CLASS_NAME.STEP_BG }></div>
            </div>
        )
    }

};