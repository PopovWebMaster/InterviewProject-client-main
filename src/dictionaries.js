import React from 'react';
import ReactDOM from 'react-dom';
import Dictionaries from './js/dictionaries/Dictionaries/Dictionaries.js';

import {store} from './main.js';

const MASSAGE = store.getState().massageFromServer;

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.DICTIONARIES ){
        ReactDOM.render(
            <Dictionaries massage = { MASSAGE } />,
            document.getElementById( MASSAGE.section_id_name )
        );
    };
}else{
    /*
        То, что выполняется в данной части попадает в отдельный файл dictionaries.js
    */
    ReactDOM.render(
        <Dictionaries massage = { MASSAGE } />,
        document.getElementById( MASSAGE.section_id_name )
    );
};





