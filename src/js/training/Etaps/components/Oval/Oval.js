
import React, { Component } from 'react';
import './Oval.scss';

import Dinamic, { dinamicController } from './../Dinamic/Dinamic.js';
import { ovalController as oval_controller } from './functions/ovalController.js';

import HotKey from './../HotKey/HotKey.js';

import {    ID_NAME,
            CLASS_NAME } from './config.js';

oval_controller.dinadicMove = dinamicController.move;

export const ovalController = oval_controller;

    // ovalController содержит такие методы:

    //     ovalController.isOpen()
    //     ovalController.openingSwitch()
    //     ovalController.open()
    //     ovalController.close()
    //     ovalController.dinadicMove()


export default class Oval extends Component {
    
    constructor(props){
        super(props);
        // this.state = {
        // };

        this.click_answer = this.click_answer.bind(this);
        this.focusOut = this.focusOut.bind(this);
    }

    click_answer(){
        ovalController.openingSwitch();
    }

    focusOut(){
        if( this.props.training_in_process ){
            oval_controller.close();
        }else{
            return;
        }
    }

    componentDidMount(){
        ovalController.openStatic();
    }

    render(){
        
        return(<>
            <div 
                id = { ID_NAME }
                onMouseLeave = { this.focusOut }
            >
                <div className = { CLASS_NAME.DINAMIC_LOCATION }>
                    <Dinamic />
                </div>

                <div className = { CLASS_NAME.ANSWER_LOCATION }>
                    <div 
                        className = { CLASS_NAME.ANSWER }
                        onClick = { this.click_answer }
                    >
                        <div className = { CLASS_NAME.ANSWER_RU }>
                            <span>
                                { this.props.ruW }
                            </span>
                        </div>
                        <div className = { CLASS_NAME.ANSWER_TITLE }>
                            <span>Ответ</span>
                        </div>
                    </div>
                </div>

            </div>
            <HotKey 
                keyName = 'W'
            />
            
        </>);
    }


}

