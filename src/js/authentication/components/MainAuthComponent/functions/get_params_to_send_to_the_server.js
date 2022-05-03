import { isset } from './../../../../functions/isset.js';
import { get_all_input_names } from './get_all_input_names.js';

export const get_params_to_send_to_the_server = ( params ) => {
    /*
        возвращает объект предназначенный для отправки на сервер
        данный объект содержит значения всех инпутов формы
        {
            confirm_password: "",
            email: "qq@mai.ru",
            name: "",
            password: "",
        }
    */

    let state = params.state;

    let allInputNames = get_all_input_names();

    let result = {};
    for( let inputName in state ){

        if( isset( allInputNames[inputName] ) ){
            result[ inputName ] = state[inputName].value;
        };

    };

    return result;

};

