import { close_menu } from './../../functions/close_menu.js';
import { CLASS_NAMES } from './../../config.js';

export const event_handler_authButton = ( e ) => {

    e.preventDefault();

    close_menu( () => {

        let authButton = document.getElementsByClassName( CLASS_NAMES.MENU_AUTH_BUTTON )[0];

        var a = authButton.querySelector( 'a' );
        let href = a.href

        window.location.href = href;

    });


};