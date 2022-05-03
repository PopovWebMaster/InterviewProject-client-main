import { close_menu } from './../../functions/close_menu.js';
import { scrollTo } from './../../functions/scrollTo.js';

export const event_handler_itemMenu = ( e ) => {
    
    close_menu( () => {
        let id_item = e.target.id;

        if( window.location.pathname === '/' ){
            scrollTo( id_item );

        }else{
            sessionStorage.setItem('section_id_name', id_item );
            let origin = window.location.origin;
            window.location.href = origin;

        };

    });
};