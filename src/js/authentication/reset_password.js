import React from 'react';
import ReactDOM from 'react-dom';

import ResetPassword from './ResetPassword/ResetPassword.js';
import { store } from './../../main.js';

const MASSAGE = store.getState().massageFromServer;

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.RESET_PASSWORD ){
        ReactDOM.render(
            <ResetPassword massage = { MASSAGE } />,
            document.getElementById( MASSAGE.section_id_name )
        );
    };
}else{
    ReactDOM.render(
        <ResetPassword massage = { MASSAGE } />,
        document.getElementById( MASSAGE.section_id_name )
    );
};