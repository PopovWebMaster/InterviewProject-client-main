import {    CLASS_NAME_TRENING_BUTTON, 
            CLASS_NAME_TRENING_BUTTON_CHILD  } from './../config.js';

export const set_active_style_from_button = {

    keyDown( index ){
        let trening_button = document.getElementsByClassName( CLASS_NAME_TRENING_BUTTON_CHILD )[index];
        trening_button.classList.add('hover');
    },

    keyUp( index ){
        let trening_button = document.getElementsByClassName( CLASS_NAME_TRENING_BUTTON_CHILD )[index];
        trening_button.classList.remove('hover');
    },

};

