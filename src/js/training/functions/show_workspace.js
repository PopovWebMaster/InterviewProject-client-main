import { ID_NAME_OF_WORKSPACE } from './../settings.js';
import { SPEED_ANIMATE_OF_SHOW } from './../settings.js';

export const show_workspace = () => {

    let workspace = document.getElementById( ID_NAME_OF_WORKSPACE );
    workspace.style.cssText = `
        opacity: 1;
        transition: opacity ${SPEED_ANIMATE_OF_SHOW}ms ease 0s;
    `;

};