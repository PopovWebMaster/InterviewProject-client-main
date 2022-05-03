import React from 'react';
import ReactDOM from 'react-dom';

import Authorization from './Authorization/Authorization.js';
import { store } from './../../main.js';

const MASSAGE = store.getState().massageFromServer;

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.AUTHORIZATION ){
        ReactDOM.render(
            <Authorization massage = { MASSAGE } />,
            document.getElementById( MASSAGE.section_id_name )
        );
    };
}else{
    ReactDOM.render(
        <Authorization massage = { MASSAGE } />,
        document.getElementById( MASSAGE.section_id_name )
    );
};