import { ID_NAME } from './../../config.js';
import { get_open_status } from './../get_open_status.js';
import { get_style_open } from './../get_style_open.js';
import { get_style_close } from './../get_style_close.js';

export const set_menu_styles = () => {

    let leftMenu = document.getElementById( ID_NAME );

    let openStatus = get_open_status();

    if( openStatus ){
        leftMenu.style.cssText = get_style_open( false );

    }else{
        leftMenu.style.cssText = get_style_close( false );

    };

};