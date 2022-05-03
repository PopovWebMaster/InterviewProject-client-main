import React from 'react';
import { Component } from 'react';
import './InputWithButton.scss';

import { controller } from './controller.js';
import { CLASS_NAME } from './config.js';

import { add_event_keydown_start } from './function/add_event_keydown_start.js';
import { remove_event_keydown_start } from './function/remove_event_keydown_start.js';

export default class InputWithButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            isError: false,
            errorMassage: '',
        };

        this.isKeyEnterUp = true;
        this.isGoodKeyPress = true;

        this.setValue = this.setValue.bind(this);
        this.getButtonValue = this.getButtonValue.bind(this);
        this.action = this.action.bind(this);
        this.openErrorMassage = this.openErrorMassage.bind(this);
        this.closeErrorMassage = this.closeErrorMassage.bind(this);
        this.keydown_enter = this.keydown_enter.bind(this);
        this.keyup_enter = this.keyup_enter.bind(this);
        this.antiBadKeyPress = this.antiBadKeyPress.bind(this);
        
    }

    setValue( e ){

        let str = e.target.value;
        let char = str[ str.length-1 ];

        let isValid = /^[_a-zA-Z0-9 \.\-\?,:;_!()]+$/.test(char);
        let isRuChar = /^[абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]/.test(char);

        if( isValid || char === '' ){
            this.setState({
                value: e.target.value
            });
            this.closeErrorMassage();

        }else{
            if( isRuChar ){
                let massage = 'В данное поле необходимо вводить слова только на английском языке';
                this.openErrorMassage( massage );
            };
        };

    }

    getButtonValue( training_in_process ){
        if( training_in_process ){
            return ( <span className = 'enter'></span> );
        }else{
            return ( <span>Начать тренинг</span> );
        };
    }

    action(){
        this.props.action( this.state.value );

        this.setState({
            value: ''
        });
        controller.setFocus();
    }

    antiBadKeyPress( handler ){
        if( this.isGoodKeyPress ){
            handler();
            this.isGoodKeyPress = false;
            let timer = setTimeout( () => {
                this.isGoodKeyPress = true;
                clearTimeout( timer );
            }, 600 );
        };
    }

    keydown_enter( e ){
        if( e.which === 13 ){
            if( this.isKeyEnterUp ){
                this.antiBadKeyPress( () => {
                    this.action();
                    let button = document.querySelector( `.${CLASS_NAME.BORDER_WRAP} div` );
                    button.classList.add( 'hover' );
                    this.isKeyEnterUp = false;
                });
            };
        };
    }

    keyup_enter( e ){
        if( e.which === 13 ){
            if( !this.isKeyEnterUp ){
                let button = document.querySelector( `.${CLASS_NAME.BORDER_WRAP} div` );
                button.classList.remove( 'hover' );
                this.isKeyEnterUp = true; 
            };
        };
    }

    openErrorMassage( massage ){
        this.setState({
            isError: true,
            errorMassage: massage
        });
    }

    closeErrorMassage(){
        this.setState({
            isError: false
        });
        setTimeout( () => {
            this.setState({
                errorMassage: ''
            });
        }, 500); 
    }

    componentDidMount(){
        controller.setInitialStyle();
        add_event_keydown_start( this.action );
    }

    componentWillUnmount(){
        remove_event_keydown_start();
    }

    render(){
		return (
            
            <div className = { CLASS_NAME.INPUT_BUTTON }>
                <div className = { CLASS_NAME.WRAP }>
                    <div className = { CLASS_NAME.BORDER_WRAP }>
                        <input  
                            type =          "text" 
                            placeholder =   "" 
                            maxLength =     "250"
                            autoComplete =  "off"
                            onChange =      { this.setValue }
                            value =         { this.state.value }
                            onKeyDown =     { this.keydown_enter }
                            onKeyUp =       { this.keyup_enter }
                        />

                        <div
                            onClick = { this.action }
                            data-started = { !this.props.training_in_process }
                        >
                            { this.getButtonValue( this.props.training_in_process ) }
                        </div>

                    </div>  
                    <div className = { CLASS_NAME.ERROR.MASSAGE }>
                        <span className = { this.state.isError? CLASS_NAME.ERROR.OPEN: CLASS_NAME.ERROR.HIDE }>
                            { this.state.errorMassage }
                        </span>
                    </div>
                </div>
            </div>
            
        )
    }

};
