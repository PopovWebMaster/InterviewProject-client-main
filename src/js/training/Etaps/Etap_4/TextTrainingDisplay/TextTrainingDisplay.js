import React from 'react';
import { Component } from 'react';
import './TextTrainingDisplay.scss';

import { CLASS_NAME } from './config.js';

import { adds_a_li_in_list_with_animation } from './function/adds_a_li_in_list_with_animation.js';
import { set_initial_list_styles } from './function/set_initial_list_styles.js';

export default class TextTrainingDisplay extends Component{

    constructor(props){
        super(props);
        this.listResult = [];
    }

    componentDidMount(){
        set_initial_list_styles();
    }

    componentDidUpdate(){
        adds_a_li_in_list_with_animation( this.props.enW );
    }

    render(){
		return (
            
            <div className = { CLASS_NAME.TEXT_TRAINING_DISPLAY }>

                <div className = { CLASS_NAME.REQUESTED_WORD }>
                    <span>{ this.props.ruW }</span>
                </div>

                <div className = { CLASS_NAME.RESULT_LIST }>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
            
        )
    }

};