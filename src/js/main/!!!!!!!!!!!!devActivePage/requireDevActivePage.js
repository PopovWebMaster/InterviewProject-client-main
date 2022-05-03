
import { renderActualComponent } from './function/renderActualComponent.js';

import HomePageTemplate from './../devTemplates/functions/HomePageTemplate.js';

export const requireDevActivePage = () => {


    if( IS_DEVELOPMENT ){

        switch ( ACTIVE_PAGE ) {
            case 'home':
                // renderActualComponent( HomePageTemplate );
                break;
            // case 4:
            //     alert( 'В точку!' );
            //     break;
            // case 5:
            //     alert( 'Перебор' );
            //     break;
            default:
                //alert( "Нет таких значений" );
                return;
        }






        // if( ACTIVE_PAGE === 'home' ){
        //     ReactDOM.render(
        //         <HomePageTemplate massage = { MASSAGE } />,
        //         document.getElementById( MASSAGE.section_id_name )
        //     );
        // };
        
    };






};