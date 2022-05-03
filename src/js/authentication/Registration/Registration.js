import React from 'react';
//import ReactDOM from 'react-dom';
// import { Component } from 'react';
import './../authForm.scss';
import './Registration.scss';

import { CLASS_NAME, INPUT_NAME } from './../config.js';

import MainAuthComponent from './../components/MainAuthComponent/MainAuthComponent.js';
import Input from './../components/Input/Input.js';
import ButtonSubmit from './../components/ButtonSubmit/ButtonSubmit.js';


// import { send_to_server } from './../../functions/send_to_server.js';

import { isset } from './../../functions/isset.js';
// import { sets_the_focus_on_the_first_input_with_an_error } from './functions/sets_the_focus_on_the_first_input_with_an_error.js';
import { sets_the_focus_on_the_first_input_with_an_error } from './../function/sets_the_focus_on_the_first_input_with_an_error.js';


export default class Registration extends MainAuthComponent{ // 

    constructor(props){
        super(props);
        this.state = {

            [ INPUT_NAME.NAME ]: { 
                value:          this.props.massage[ INPUT_NAME.NAME ].value,
                isError:        this.props.massage[ INPUT_NAME.NAME ].isError,
                errorMassage:   this.props.massage[ INPUT_NAME.NAME ].errorMassage,
                valueIsShecked: false,
            },

            [ INPUT_NAME.EMAIL ]: {
                value:          this.props.massage[ INPUT_NAME.EMAIL ].value,
                isError:        this.props.massage[ INPUT_NAME.EMAIL ].isError,
                errorMassage:   this.props.massage[ INPUT_NAME.EMAIL ].errorMassage,
                valueIsShecked:       false,
            },

            [ INPUT_NAME.PASSWORD ]: {
                value:          this.props.massage[ INPUT_NAME.PASSWORD ].value,
                isError:        this.props.massage[ INPUT_NAME.PASSWORD ].isError,
                errorMassage:   this.props.massage[ INPUT_NAME.PASSWORD ].errorMassage,
                valueIsShecked:       false,
            },

            [ INPUT_NAME.CONFIRM_PASSWORD ]: { 
                value:          this.props.massage[ INPUT_NAME.CONFIRM_PASSWORD ].value,
                isError:        this.props.massage[ INPUT_NAME.CONFIRM_PASSWORD ].isError,
                errorMassage:   this.props.massage[ INPUT_NAME.CONFIRM_PASSWORD ].errorMassage,
                valueIsShecked:       false,
            },

        };

        this.handler_submit_success = this.handler_submit_success.bind(this);       // обязательно должен быть
        this.handler_submit_unsuccess = this.handler_submit_unsuccess.bind(this);   // обязательно должен быть


    }

    handler_submit_success( data ){     // обязательно должен быть 
        window.location.href = data.href;
        

    }

    handler_submit_unsuccess( data ){   // обязательно должен быть 
        this.setInputResponseFromServer( data.inputResponse );

        sets_the_focus_on_the_first_input_with_an_error();

    }




    render(){
		return (
            <div className = { CLASS_NAME.AUTH_FORM }>

                <div className = { CLASS_NAME.FORM_NAME }>Регистрация</div>

                <form role = 'form'>

                    <Input
                        label =         'Имя'
                        inputName =     { INPUT_NAME.NAME }
                        type =          'text'
                        setValue =      { this.setValue }
                        resetTheError = { this.resetTheError }
                        checkTheValue = { this.checkTheValue }
                        autocomplete =  'off'
                        max =           { this.getMaxLength( INPUT_NAME.NAME ) }

                        value =         { this.state[ INPUT_NAME.NAME ].value }
                        isError =       { this.state[ INPUT_NAME.NAME ].isError }
                        errorMassage =  { this.state[ INPUT_NAME.NAME ].errorMassage }
                        showSpin =      { this.state[ INPUT_NAME.NAME ].valueIsShecked }

                    />

                    <Input
                        label =         'E-Mail'
                        inputName =     { INPUT_NAME.EMAIL }
                        type =          'email'
                        setValue =      { this.setValue }
                        resetTheError = { this.resetTheError }
                        checkTheValue = { this.checkTheValue }
                        autocomplete =  'off'
                        max =           { this.getMaxLength( INPUT_NAME.EMAIL ) }

                        value =         { this.state[ INPUT_NAME.EMAIL ].value }
                        isError =       { this.state[ INPUT_NAME.EMAIL ].isError }
                        errorMassage =  { this.state[ INPUT_NAME.EMAIL ].errorMassage }
                        showSpin =      { this.state[ INPUT_NAME.EMAIL ].valueIsShecked }

                    />

                    <Input
                        label =         'Пароль'
                        inputName =     { INPUT_NAME.PASSWORD }
                        type =          'password'
                        setValue =      { this.setValue }
                        resetTheError = { this.resetTheError }
                        checkTheValue = { this.checkTheValue }
                        autocomplete =  'off'
                        max =           { this.getMaxLength( INPUT_NAME.PASSWORD ) }

                        value =         { this.state[ INPUT_NAME.PASSWORD ].value }
                        isError =       { this.state[ INPUT_NAME.PASSWORD ].isError }
                        errorMassage =  { this.state[ INPUT_NAME.PASSWORD ].errorMassage }
                        showSpin =      { this.state[ INPUT_NAME.PASSWORD ].valueIsShecked }

                    />

                    <Input
                        label =         'Повторите пароль'
                        inputName =     { INPUT_NAME.CONFIRM_PASSWORD }
                        type =          'password'
                        setValue =      { this.setValue }
                        resetTheError = { this.resetTheError }
                        checkTheValue = { this.checkTheValue }
                        autocomplete =  'off' 
                        max =           { this.getMaxLength( INPUT_NAME.CONFIRM_PASSWORD ) }

                        value =         { this.state[ INPUT_NAME.CONFIRM_PASSWORD ].value }
                        isError =       { this.state[ INPUT_NAME.CONFIRM_PASSWORD ].isError }
                        errorMassage =  { this.state[ INPUT_NAME.CONFIRM_PASSWORD ].errorMassage }
                        showSpin =      { this.state[ INPUT_NAME.CONFIRM_PASSWORD ].valueIsShecked }

                    />

                    <ButtonSubmit 
                        submit =       { this.submit }
                    />

                    <div className = { CLASS_NAME.LINK }>
                        <a href = { this.props.massage.href_to_login }>Вход</a>
                    </div>

                </form>
            </div>
        )
    }

};
