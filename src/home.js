import React from 'react';
import ReactDOM from 'react-dom';

import HomePageTemplate from './js/main/devTemplates/functions/HomePageTemplate.js'
import './scss/home.scss';

import { store } from './main.js';
const MASSAGE = store.getState().massageFromServer;

if( IS_DEVELOPMENT ){
    if( ACTIVE_PAGE === CONSTANTS.PAGES.HOME  ){
        ReactDOM.render(
            <HomePageTemplate massage = { MASSAGE } />,
            document.getElementById( MASSAGE.section_id_name )
        );
    };
}else{

    /*
            Здесь код для прод версии файла home.js

            Изначально в нём не планировалось ничего, так как весь шаблон статей формируется на сервере 
        и предаётся клиенту в виде html, по этому здесь не используется реакт.
            Но, при необходимости в будущем, дополнительный код для прод версии home-странички писать сюда

    */

};





