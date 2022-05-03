import React from 'react';
//import ReactDOM from 'react-dom';
// import { Component } from 'react';

import './../authForm.scss';

import './Authorization.scss';

import { CLASS_NAME, INPUT_NAME } from './../config.js';

import MainAuthComponent from './../components/MainAuthComponent/MainAuthComponent.js';
import Input from './../components/Input/Input.js';
import ButtonSubmit from './../components/ButtonSubmit/ButtonSubmit.js';

import { sets_the_focus_on_the_first_input_with_an_error } from './../function/sets_the_focus_on_the_first_input_with_an_error.js';
import { isset } from './../../functions/isset.js';

import { send_to_server } from './../../functions/send_to_server.js';

export default class Authorization extends MainAuthComponent{

    constructor(props){
        super(props);

        this.state = {

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

            is_email_confirmed: this.props.massage.is_email_confirmed, 

        };

        this.handler_submit_success = this.handler_submit_success.bind(this);       // обязательно должен быть
        this.handler_submit_unsuccess = this.handler_submit_unsuccess.bind(this);   // обязательно должен быть

        this.send_email_again = this.send_email_again.bind(this);

    }

    handler_submit_success( data ){     // обязательно должен быть 

        window.location.href = data.href;


    }

    handler_submit_unsuccess( data ){   // обязательно должен быть 


        if( isset( data.is_email_confirmed ) ){

            let is_email_confirmed = undefined;

            if(  typeof data.is_email_confirmed === 'boolean' ){
                is_email_confirmed = data.is_email_confirmed;
            }else{
                if( data.is_email_confirmed === 'true' ){
                    is_email_confirmed = true;
                }else if( data.is_email_confirmed === 'false' ){
                    is_email_confirmed = false;
                };
            };

            if( is_email_confirmed !== undefined ){
                this.setState({
                    is_email_confirmed,
                });
            };

        };

        this.setInputResponseFromServer( data.inputResponse );

        sets_the_focus_on_the_first_input_with_an_error();

    }

    send_email_again(){

        let href =      this.props.massage.href_for_post;
        let action =    this.props.massage.action.confirmEmailAgain;
        let data =      {
            inputName:  'email',
            value:      this.state[ INPUT_NAME.EMAIL ].value
        };

        let successCallback = ( data ) => {

            // console.dir( data );

            if( data.ok ){
                window.location.href = data.href;

            }else{
                console.error( data.errorMassage );
            };

        };

        let errorCallback = () => {
            console.log('Ошибка, что-то при отправке на сервер не сработало');
        };

        send_to_server({
            href,
            action,
            data,
            successCallback,
            errorCallback,
        });
    }


    render(){
		return (
            <div className = { CLASS_NAME.AUTH_FORM }>

                <div className = { CLASS_NAME.FORM_NAME }>Вход на сайт</div>

                { this.state.is_email_confirmed? '': (
                    <div className = { CLASS_NAME.AUTH_MASSAGE }>
                        <p>Данный e-mail адрес не был подтверждён. <br/>
                            <span
                                onClick = { this.send_email_again }
                            
                            >Отправить письмо подтверждения повторно?</span>
                        </p>
                    </div>
                )}

                <form role = 'form'>

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

                    <ButtonSubmit 
                        submit =       { this.submit }
                    />

                    <div className = { CLASS_NAME.LINK }>
                        <a href = { this.props.massage.href_to_register }>Регистрация</a>
                        { 
                            this.props.massage.href_to_reset_password === ''? '': (
                                <a href = { this.props.massage.href_to_reset_password }>
                                    Забыли пароль?
                                </a>) 
                        }
                        
                    </div>

                </form>
            </div>
        )
    }

};