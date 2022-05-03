import { CLASS_NAME } from './../config.js';

export const event_keydown_start = ( e ) => {

    if( e.code === 'Enter'){

        let selector = `.${CLASS_NAME.BORDER_WRAP} div`;
        let button = document.querySelector( selector );
        let isStarted = button.dataset.started;

        if( isStarted  === 'true'){
            event_keydown_start.action();
        }else{
            document.removeEventListener( 'keydown', event_keydown_start );
        };

    };


};
