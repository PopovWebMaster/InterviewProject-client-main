import { ID_MENU_LOGO, CLASS_NAMES }    from './../config.js';

import { event_handler_iconMenu }       from './handlers/event_handler_iconMenu.js';
import { event_handler_arrowLeft }      from './handlers/event_handler_arrowLeft.js';
import { event_handler_body }           from './handlers/event_handler_body.js';
import { event_handler_itemMenu }       from './handlers/event_handler_itemMenu.js';
import { event_handler_startTraining }  from './handlers/event_handler_startTraining.js';
import { event_handler_authButton }     from './handlers/event_handler_authButton.js';

import { isset } from './../../../functions/isset.js';

export const addEvent = {
    
    iconMenu(){
        let iconMenu = document.getElementById( ID_MENU_LOGO );
        iconMenu.addEventListener( 'click', event_handler_iconMenu );
    },
    
    arrowLeft(){
        let arrowLeft = document.getElementsByClassName( CLASS_NAMES.CLOSE_BUTTON )[0];
        arrowLeft.addEventListener( 'click', event_handler_arrowLeft );
    },

    body(){
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener( 'click', event_handler_body );
    },

    itemMenu(){
        let items = document.getElementsByClassName( CLASS_NAMES.ITEM_MENU );
        for( let i = 0; i < items.length; i++ ){
            items[i].addEventListener( 'click', event_handler_itemMenu );
        };
    },

    startTraining(){
        let startTrainingButton = document.getElementsByClassName( CLASS_NAMES.MENU_START_BUTTON )[0];
        startTrainingButton.addEventListener( 'click', event_handler_startTraining );

    },

    authButton(){
        let authButton = document.getElementsByClassName( CLASS_NAMES.MENU_AUTH_BUTTON )[0];
        if( isset(authButton) ){
            authButton.addEventListener( 'click', event_handler_authButton );
        };
    },



};