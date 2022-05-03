import React, { Component } from 'react';
import './Dinamic.scss';

import { dinamicController as controller } from './functions/dinamicController.js';
import { CLASS_NAME } from './config.js';
import { ID_NAME } from './config.js';
import { CLASS_NAME_DINAMIC_SPANS } from './config.js';
import { CLASS_NAME_DINAMIC_CIRCLES } from './config.js';

export const dinamicController = controller;

export default class Dinamic extends Component {
    
    constructor(props){
        super(props);
        // this.state = {
        // };
    }

    componentDidMount(){
        dinamicController.performs_initial_settings();
    }

    render(){
        
        return(
            <div id = { ID_NAME }>
                <div className = { CLASS_NAME_DINAMIC_SPANS }>
                    <span className = { CLASS_NAME.SPAN_VOLUME_UP }></span>
                    <span className = { CLASS_NAME.SPAN_VOLUME_DOWN }></span>
                    <span className = { CLASS_NAME.SPAN_VOLUME_OFF }></span>
                </div> 
                <div className = { CLASS_NAME_DINAMIC_CIRCLES }></div>
            </div>
        );
    }


}

