import { close_menu } from './../../functions/close_menu.js';
import { CLASS_NAMES } from './../../config.js';

export const event_handler_startTraining = ( e ) => {

    e.preventDefault();

    close_menu( () => {

        let startTrainingButton = document.getElementsByClassName( CLASS_NAMES.MENU_START_BUTTON )[0];

        var a = startTrainingButton.querySelector( 'a' );
        let href = a.href

        window.location.href = href;

    });


};