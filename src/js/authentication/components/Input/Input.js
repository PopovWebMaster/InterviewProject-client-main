import React from 'react';
import { Component } from 'react';

import { CLASS_NAME } from './../../config.js';
import './Input.scss';

import { set_the_focus_to_the_next_input } from './functions/set_the_focus_to_the_next_input.js';
import { isset } from '././../../../functions/isset.js';

export default class Input extends Component{ 

    constructor(props){
        super(props);

        // this.state = {
        //     value: this.props.value,
        //     isError: this.props.isError,

        // };

        this.getInputClassName = this.getInputClassName.bind(this);
        this.setValue = this.setValue.bind(this);
        this.resetTheError = this.resetTheError.bind(this);
        this.checkTheValue = this.checkTheValue.bind(this);

        this.keydown_enter = this.keydown_enter.bind(this);

    }

    getInputClassName( isError ){ 
        // let value =   params.value;
        // let isError = params.isError;

        let res;

        if( isError ){
            res = CLASS_NAME.INPUT.INVALID;

        }else{
            res = CLASS_NAME.INPUT.VALID;
        };


        return res;
    }

    setValue( e ){
        this.resetTheError();

        this.props.setValue( {
            inputName:  this.props.inputName,
            value:      e.target.value
        });
    }

    resetTheError(){
        this.props.resetTheError({
            inputName: this.props.inputName
        });
    }

    checkTheValue(){
        this.props.checkTheValue({
            inputName: this.props.inputName
        })
    }


    keydown_enter( e ){
        if( e.which === 13 ){
            set_the_focus_to_the_next_input( e );
            if( isset( this.props.keydown_enter ) ){
                this.props.keydown_enter();
            };
        };
    }



    // componentDidUpdate( prevProps, prevState, snapshot ){

    //     if( prevProps.value !== this.props.value ){
    //         this.setState({
    //             value: this.props.value
    //         });
    //     };

    //     if( prevProps.isError !== this.props.isError ){
    //         this.setState({
    //             isError: this.props.isError
    //         });
    //     };

    // }


    render(){
		return (
            
            <div className = { CLASS_NAME.INPUT_WRAP }>
                <label htmlFor = { this.props.inputName }>
                    { this.props.label + ' ' }
                    { this.props.showSpin? <span className = { CLASS_NAME.SPIN }></span>: '' } 
                </label>
                <div>
                    <input 
                        id =            { this.props.inputName } 
                        className =     { this.getInputClassName( this.props.isError ) }
                        type =          { this.props.type }
                        // name =      { this.props.imputName } 
                        value =         { this.props.value }
                        autoComplete =  { this.props.autocomplete }
                        maxLength =     { this.props.max }

                        onChange =      { this.setValue }
                        // onFocus =       { this.resetTheError }
                        onBlur =        { this.checkTheValue }
                        onKeyDown =     { this.keydown_enter }
                    />
                    <span className = { CLASS_NAME.ERROR_MASSAGE }>
                        <strong>{ this.props.errorMassage }</strong>
                    </span>
                </div>
            </div>

        )
    }

};
