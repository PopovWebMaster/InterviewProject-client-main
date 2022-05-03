import React from 'react';
import ReactDOM from 'react-dom';

import Training from './js/training/Training.js';

import { store } from './main.js';

const MASSAGE = store.getState().massageFromServer;

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.TRAINING  ){
        ReactDOM.render(
            <Training massage = { MASSAGE } />,
            document.getElementById( MASSAGE.section_id_name )
        );
    };
}else{
    /*
        То, что выполняется в данной части попадает в отдельный файл training.js
    */
    ReactDOM.render(
        <Training massage = { MASSAGE } />,
        document.getElementById( MASSAGE.section_id_name )
    );
};
