import { CLASS_NAME_HOT_KEY } from './../config.js';

export const hide = () => {

    let allKeys = document.getElementsByClassName( CLASS_NAME_HOT_KEY );

    for( let i = 0; i < allKeys.length; i++ ){
        allKeys[i].style.opacity = 0;
    };

};