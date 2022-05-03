import React from 'react';
import ReactDOM from 'react-dom';

import { MASSAGE } from './../../../false_massages';

// import { store } from './main.js';
// import { store } from './../../../../main.js';

// const MASSAGE = store.getState().massageFromServer;

export const renderActualComponent = ( App ) => {
    ReactDOM.render(
        <App massage = { MASSAGE } />,
        document.getElementById( MASSAGE.section_id_name )
    );
};