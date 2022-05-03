import { set_initial_styles } from './functions/set_initial_styles.js';
import { addEvent } from './addEvent/addEvent.js';
import { set_open_status } from './functions/set_open_status.js';
import { isset } from './../../functions/isset.js';
import { scrollTo } from './functions/scrollTo.js';


export const requireLeftMenu = () => {

    set_open_status( false );

    set_initial_styles();

    addEvent.iconMenu();
    addEvent.arrowLeft();
    addEvent.body();
    addEvent.itemMenu();
    addEvent.startTraining();
    addEvent.authButton();

    if( window.location.pathname === '/' ){
        
        let section_id_name = sessionStorage.getItem( 'section_id_name' );
        if( isset( section_id_name ) ){
            scrollTo( section_id_name );
            sessionStorage.removeItem( 'section_id_name' );
        };

    };
    

};