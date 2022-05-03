import { createListResults } from './List/createListResults.js';

export const renderVisualResult = () => {

    let main = document.getElementsByTagName('main')[0];

    let div = document.createElement('div');
    div.id = 'test';
    div.style.cssText = `
        width: 100%;
        height: 200px;  
    `;

    main.appendChild( div );

    createListResults();
 
};
