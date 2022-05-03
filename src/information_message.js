import React from 'react';
import ReactDOM from 'react-dom';

import InformationMassage from './js/information_message/InformationMassage.js';

// import { store } from './main.js';

import './js/information_message/InformationMassage.scss';

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.INFORMATION_MASSAGE  ){
        ReactDOM.render(
            <InformationMassage />,
            document.getElementById( ACTIVE_PAGE )
        );
    };
}else{
    /*
        То, что выполняется в данной части попадает в отдельный файл information_message.js
    */
};
