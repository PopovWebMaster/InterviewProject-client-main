import React from 'react';
import ReactDOM from 'react-dom';

import Registration from './Registration/Registration.js';
import { store } from './../../main.js';

const MASSAGE = store.getState().massageFromServer;

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.REGISTRATION ){
        ReactDOM.render(
            <Registration massage = { MASSAGE } />,
            document.getElementById( MASSAGE.section_id_name )
        );
    };
}else{
    ReactDOM.render(
        <Registration massage = { MASSAGE } />,
        document.getElementById( MASSAGE.section_id_name )
    );
    
};
