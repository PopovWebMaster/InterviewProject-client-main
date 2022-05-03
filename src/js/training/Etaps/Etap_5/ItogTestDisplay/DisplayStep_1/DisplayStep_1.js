import React from 'react';
import { Component } from 'react';
import './DisplayStep_1.scss';

import Dinamic from './../../../components/Dinamic/Dinamic.js';
import { dinamicController } from './../../../components/Dinamic/Dinamic.js';
import { CLASS_NAME } from './../config.js';

export const controller_DisplayStep_1 = {
    move: dinamicController.move
};


export default class DisplayStep_1 extends Component{

    constructor(props){
        super(props);
        // this.state = {};

        this.actionRepeat = this.actionRepeat.bind(this);

    }

    actionRepeat(){
        // if( this.props.step === 1 ){
        //     dinamicController.move();
        // };
        this.props.actionRepeat(); 
    }

    render(){
		return (
            <div className = { CLASS_NAME.DISPLAY_1 }>

                <div className = 'testDinamicLocation'>
                    <Dinamic />
                </div>

                <div 
                    className = 'testRepeat'
                    onClick = { this.actionRepeat }
                >
                    <span className = 'icon-arrows-ccw'></span>
                </div>

            </div>

        )
    }

};



