import { ID_NAME_OF_WORKSPACE } from './../settings.js';
import { SPEED_ANIMATE_OF_SHOW } from './../settings.js';

export const hide_workspace = ( callback ) => {

    let workspace = document.getElementById( ID_NAME_OF_WORKSPACE );
    console.dir('workspace');
    console.dir(workspace);
    workspace.style.cssText = `
        opacity: 0;
        transition: opacity ${SPEED_ANIMATE_OF_SHOW}ms ease 0s;
    `;

    let timer3 = setTimeout( () => {
        if( callback ){
            callback();
        };

        clearTimeout(timer3);

    }, SPEED_ANIMATE_OF_SHOW );

};





