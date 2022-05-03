import { Component } from 'react';
import { CLASS_NAME, INPUT_NAME } from './../../config.js';
import { send_to_server } from './../../../functions/send_to_server.js';
 
import { get_params_to_send_to_the_server } from './functions/get_params_to_send_to_the_server.js';
import { get_all_input_names } from './functions/get_all_input_names.js';
import { isset } from './../../../functions/isset.js';


export default class MainAuthComponent extends Component{

    constructor(props){
        super(props);

        this.setValue = this.setValue.bind(this);
        this.resetTheError = this.resetTheError.bind(this);
        this.checkTheValue = this.checkTheValue.bind(this);
        this.get_params_to_send_to_the_server = this.get_params_to_send_to_the_server.bind(this);
        this.checking_for_errors = this.checking_for_errors.bind(this);

        this.submit = this.submit.bind(this);

        this.getMaxLength = this.getMaxLength.bind(this);

        this.setInputResponseFromServer = this.setInputResponseFromServer.bind(this);
        this.reset_input_values = this.reset_input_values.bind(this);
        

    }


    setInputResponseFromServer( inputResponse = null ){ 

        if( isset( inputResponse ) ){

            for( let inputName in inputResponse ){
                this.setState({
                    [inputName] : {
                        value:          inputResponse[inputName].value,
                        isError:        inputResponse[inputName].isError,
                        errorMassage:   inputResponse[inputName].errorMassage,
                        valueIsShecked: false,
                    },
                    
                });
            };

        }else{
            console.error('Что-то не так с попыткой записать ответ от сервера в state');
        };

    }

    reset_input_values(){ // не используется, оказалось, что не нужна

        for( let key in INPUT_NAME ){

            let inputName = INPUT_NAME[key];

            if( isset( this.state[ inputName ] ) ){
                this.setState({
                    [inputName] : {
                        value:          '',
                        isError:        false,
                        errorMassage:   '',
                        valueIsShecked: false,
                    },
                    
                });
            };

        };

    }

    getMaxLength( inputName ){

        if( isset(this.props.massage.inputMaxLength) ){
            if( isset(this.props.massage.inputMaxLength[ inputName ]) ){
                return Number( this.props.massage.inputMaxLength[ inputName ] );
            }else{
                console.error('Ошибка. Источник: getMaxLength(). Что-то не так с объектом inputMaxLength');
                return 0;
            };
            
        }else{
            console.error('Ошибка. Источник: getMaxLength().Отсутствует объект inputMaxLength');
            return 0;
        };
  
    }

    setValue( params ){
        let inputName = params.inputName;
        let value =     params.value;

        let obj = this.state[ inputName ];
        obj.value = value;

        this.setState({
            [ inputName ]: obj,
        });

    }

    resetTheError( params ){
        let inputName = params.inputName;

        let obj = this.state[ inputName ];
        obj.isError = false;
        obj.errorMassage = '';

        this.setState({
            [ inputName ]: obj,
        });

    }

    checkTheValue( params ){
        let inputName = params.inputName;

        let obj = this.state[inputName];
        obj.valueIsShecked = true;
        this.setState({
            [ inputName ]: obj
        });

        let href =      this.props.massage.href_for_post;
        let action =    this.props.massage.action.checkField;

        let data = {
            inputName:   inputName,
            value:  this.state[ inputName ].value,
        };

        let successCallback = ( data_2 ) => {

            let inputName =     data_2.inputName;
            let value =         data_2.value;
            let isError =       data_2.isError;
            let errorMassage =  data_2.errorMassage;

            this.setState({
                [ inputName ]: {
                    value,
                    isError,
                    errorMassage,
                    valueIsShecked: false,
                },
            });

            if( inputName === INPUT_NAME.CONFIRM_PASSWORD ){ // проверка, верно ли заполнили поле повторить пароль
                if( this.state[ INPUT_NAME.CONFIRM_PASSWORD ].value !== this.state[ INPUT_NAME.PASSWORD ].value ){
                    this.setState({
                        [ inputName ]: {
                            value,
                            isError: true,
                            errorMassage: 'Была допущена ошибка при повторном вводе пароля',
                            valueIsShecked: false,
                        },
                    });
                };
            };


        };

        let errorCallback = () => {
            let obj2 = this.state[inputName];
            obj2.valueIsShecked = false;
            this.setState({
                [ inputName ]: obj2
            });
            console.log('Ошибка, что-то не сработало во время отправки на сервер при проверке инпута');
        };

        send_to_server({
            href,
            action,
            data,
            successCallback,
            errorCallback,
        });

    }

    get_params_to_send_to_the_server(){

        let result = get_params_to_send_to_the_server({
            state: this.state
        });

        return result;

    }


    checking_for_errors(){
        let allInputNames = get_all_input_names();
        let isError = false;

        for( let stateItem in this.state ){
            if( isset( allInputNames[stateItem] ) ){
                if( this.state[stateItem].isError === true ){
                    isError = true;
                    break;
                };
            };
        };

        return isError;
    }




    submit( finishHandler = undefined ){

        let href =      this.props.massage.href_for_post;
        let action =    this.props.massage.action.tryToAccept;
        let data =      this.get_params_to_send_to_the_server();


        let successCallback = ( data ) => {
            
            if( finishHandler !== undefined ){
                finishHandler();
            };

            if( data.ok ){
                this.handler_submit_success( data );

            }else{
                this.handler_submit_unsuccess( data );
            };

        };

        let errorCallback = () => {
            if( finishHandler !== undefined ){
                finishHandler();
            };
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


};