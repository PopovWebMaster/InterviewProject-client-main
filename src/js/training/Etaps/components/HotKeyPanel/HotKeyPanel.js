import React from 'react';
import { Component } from 'react';
import './HotKeyPanel.scss';

import { is_the_device_a_computer } from './../../../../functions/is_the_device_a_computer.js';

import { hotKeyController } from './../HotKey/HotKey.js';

export default class HotKeyPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };

        this.clickValue = this.clickValue.bind(this);
        this.getDisplayStyle = this.getDisplayStyle.bind(this);

    }

    clickValue(){
        if( this.props.training_in_process ){
            this.setState({
                isOpen: !this.state.isOpen
            });
            hotKeyController.switch();
        };
    }

    getDisplayStyle( training_in_process ){

        let style = {
            display: '',
            opacity: '',
        };

        if( is_the_device_a_computer() ){
            if( training_in_process ){
                style.display = 'flex';

            }else{
                style.display = 'none';
            };
            
        }else{
            style.display = 'none';
        };

        return style;
    }


    render(){
		return (
            <div 
                id = 'hotkeyPanel'
                style = { this.getDisplayStyle( this.props.training_in_process ) }  
            >
                <div>
                    <span className = 'hotKeyTitle'>Горячие клавиши: </span> 
                    <span 
                        className = 'hotKeyValue'
                        onClick = { this.clickValue }
                    >
                        { this.state.isOpen ? 'скрыть': 'показать' }
                    </span>
                </div>
            </div> 
        )
    }

};