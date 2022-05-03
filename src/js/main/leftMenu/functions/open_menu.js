import { ID_NAME, SPEED_OF_MOVEMENT } from './../config.js';
import { get_open_status } from './get_open_status.js';
import { get_style_open } from './get_style_open.js';
import { set_open_status } from './set_open_status.js';

export const open_menu = () => {

    let leftMenu = document.getElementById( ID_NAME );
    let openStatus = get_open_status();

    leftMenu.style.display = 'flex';

    if( !openStatus ){ // false
        let timer2 = setTimeout( () => {
            leftMenu.style.cssText = get_style_open( true );
            clearTimeout( timer2 );
        }, SPEED_OF_MOVEMENT/3 );  
    };

    set_open_status( true );

};