import { get_open_status } from './../../functions/get_open_status.js';
import { open_menu } from './../../functions/open_menu.js';
import { close_menu } from './../../functions/close_menu.js';

export const event_handler_iconMenu = () => {

    open_menu();

    // if( get_open_status() ){
    //     close_menu();
    // }else{
    //     open_menu();
    // };

};