// ResetPassword
import React from 'react';
//import ReactDOM from 'react-dom';
// import { Component } from 'react';

import './../authForm.scss';
import './ResetPassword.scss';


import { CLASS_NAME, INPUT_NAME } from './../config.js';

import MainAuthComponent from './../components/MainAuthComponent/MainAuthComponent.js';
import Input from './../components/Input/Input.js';
import ButtonSubmit from './../components/ButtonSubmit/ButtonSubmit.js';

import { sets_the_focus_on_the_first_input_with_an_error } from './../function/sets_the_focus_on_the_first_input_with_an_error.js';


export default class ResetPassword extends MainAuthComponent{

    constructor(props){
        super(props);
        this.state = {

            [ INPUT_NAME.EMAIL ]: {
                value:          this.props.massage[ INPUT_NAME.EMAIL ].value,
                isError:        this.props.massage[ INPUT_NAME.EMAIL ].isError,
                errorMassage:   this.props.massage[ INPUT_NAME.EMAIL ].errorMassage,
                valueIsShecked:       false,
            },

            [ INPUT_NAME.SECRET_CODE ]: { 
                value:          this.props.massage[ INPUT_NAME.SECRET_CODE ].value,
                isError:        this.props.massage[ INPUT_NAME.SECRET_CODE ].isError,
                errorMassage:   this.props.massage[ INPUT_NAME.SECRET_CODE ].errorMassage,
                valueIsShecked: false,
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

            stage_reset: 1, // 1 2 3

        };

        this.handler_submit_success = this.handler_submit_success.bind(this);       // обязательно должен быть
        this.handler_submit_unsuccess = this.handler_submit_unsuccess.bind(this);   // обязательно должен быть

        this.get_task_for_the_user = this.get_task_for_the_user.bind(this);
        this.getInput =  this.getInput.bind(this);

        

    }




    handler_submit_success( data ){     // обязательно должен быть 

        let nextStage = data.nextStage;
        if( nextStage < 4 ){
            this.setState({
                stage_reset: nextStage,
            });
            // this.reset_input_values();
            
        }else{
            window.location.href = data.href;

        };
        


        // window.location.href = data.href;
        console.dir('handler_submit_success');
        console.dir(data);
        

    }

    handler_submit_unsuccess( data ){   // обязательно должен быть 

        this.setInputResponseFromServer( data.inputResponse );
        sets_the_focus_on_the_first_input_with_an_error();


        
        console.dir('handler_submit_unsuccess');
        console.dir(data);

    }

    get_task_for_the_user( stage_reset ){ 

        let result = '';

        switch( stage_reset ){
            case 1:
                result = 'Введите e-mail';
                break;
            case 2:
                result = 'На вашу почту был выслан секретный код, введите его вполе ниже';
                break;
            case 3:
                result = 'Секретный код был успешно принят, теперь придумайте новый пароль';
                break;
            default:
                break;
        };

        return result;

    }

    getInput( stage_reset ){
        
        let result = '';

        switch( stage_reset ){
            case 1:
                result = (
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
                );
                break;
            case 2:
                result = (
                    <Input
                        label =         'Секретный код'
                        inputName =     { INPUT_NAME.SECRET_CODE }
                        type =          'text'
                        setValue =      { this.setValue }
                        resetTheError = { this.resetTheError }
                        checkTheValue = { this.checkTheValue }
                        autocomplete =  'off'
                        max =           { this.getMaxLength( INPUT_NAME.SECRET_CODE ) }

                        value =         { this.state[ INPUT_NAME.SECRET_CODE ].value }
                        isError =       { this.state[ INPUT_NAME.SECRET_CODE ].isError }
                        errorMassage =  { this.state[ INPUT_NAME.SECRET_CODE ].errorMassage }
                        showSpin =      { this.state[ INPUT_NAME.SECRET_CODE ].valueIsShecked }
                    />
                );
                break;
            case 3:
                result = (<React.Fragment>
                    
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

                    
                </React.Fragment>);
                break;
            default:
                break;
        };

        return result;
    }


    render(){
		return (
            <div className = { CLASS_NAME.AUTH_FORM }>

                <div className = { CLASS_NAME.FORM_NAME }>Сброс пароля</div>

                <div className = { CLASS_NAME.AUTH_MASSAGE }>
                    <p>{ this.get_task_for_the_user( this.state.stage_reset ) }</p>
                </div>

                <form role = 'form'>

                    { this.getInput( this.state.stage_reset ) }

                    <ButtonSubmit 
                        submit =       { this.submit }
                    />

                </form>
            </div>
        )
    }

};