import { home_false_massage }           from './false_massages/home.js';
import { dictionaries_false_massage }   from './false_massages/dictionaries.js';
import { training_false_massage }       from './false_massages/training.js';
import { registration_false_massage }   from './false_massages/registration.js';
import { authorization_false_massage }  from './false_massages/authorization.js';
import { reset_password_false_massage } from './false_massages/reset_password.js';

// import { isset } from './../functions/isset.js';
import { isset } from './../functions/isset.js';

let massage = {};

if( IS_DEVELOPMENT ){

    switch( ACTIVE_PAGE ) {
        
        case CONSTANTS.PAGES.HOME:      
            massage = home_false_massage;
            break;

        case CONSTANTS.PAGES.DICTIONARIES:      
            massage = dictionaries_false_massage;
            break;

        case CONSTANTS.PAGES.TRAINING:          
            massage = training_false_massage;
            break;

        case CONSTANTS.PAGES.REGISTRATION:  
            massage = registration_false_massage;
            break;

        case CONSTANTS.PAGES.AUTHORIZATION:   
            massage = authorization_false_massage;
            break;

        case CONSTANTS.PAGES.RESET_PASSWORD:  
            massage = reset_password_false_massage;
            break;

        default:
            massage = {'a-a-a!!!': 'что-то пошло не так!!!'};
            break;

    };

}else{

    let massageElem = document.getElementById( 'jsonMassage' );

    if( isset( massageElem ) ){
        massage = JSON.parse( massageElem.textContent );
        // massageElem.remove();

       
    }else{
        massage = {'error': "В html документе не обнаружен div#jsonMassage"};
    };

};


if( !CONSTANTS.IS_READY_FOR_PRODUCTION ){
    console.dir( massage );

    
};

export const MASSAGE = massage;