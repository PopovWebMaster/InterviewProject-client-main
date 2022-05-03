import { ID_NAME, SPEED_OF_MOVEMENT } from './../config.js';
import { isset } from './../../../functions/isset.js';

import { get_open_status } from './get_open_status.js';
import { get_style_close } from './get_style_close.js';
import { set_open_status } from './set_open_status.js';

export const close_menu = ( callback = null ) => {

    let leftMenu = document.getElementById( ID_NAME );
    let openStatus = get_open_status();

    if( openStatus ){ // true
        leftMenu.style.cssText = get_style_close( true );
    };

    set_open_status( false );

    let timer = setTimeout( () => {

        leftMenu.style.display = 'none';
        
        if( isset( callback ) ){
            if ( typeof callback === 'function' ) {
                callback();
            };
        };
        
        clearTimeout( timer );

    }, SPEED_OF_MOVEMENT );

};