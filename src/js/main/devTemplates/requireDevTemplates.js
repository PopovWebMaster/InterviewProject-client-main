//import './scss/home.scss';
import React from 'react';
import ReactDOM from 'react-dom';
//import { Component } from 'react';

import HeaderTemplate   from './functions/HeaderTemplate.js';
import NavTemplate      from './functions/NavTemplate.js';
// import MainTemplate     from './functions/MainTemplate.js';
import BodyAuthPanel from './functions/BodyAuthPanel.js';


export const requireDevTemplates = () => {

    if( IS_DEVELOPMENT ){

        ReactDOM.render(
            <HeaderTemplate />,
            document.getElementsByTagName( 'header' )[0]
        );

        ReactDOM.render(
            <NavTemplate />,
            document.getElementById( 'leftMenu' )
        );

        ReactDOM.render(
            <>
                <BodyAuthPanel />
                <section id = { ACTIVE_PAGE }></section>
            </>,
            document.getElementsByTagName( 'main' )[0]
        );

    }else{
        return;
    };
};

