import { CLASS_NAME_HOT_KEY } from './../config.js';

export const isOpen = () => {
    let hotKey = document.getElementsByClassName( CLASS_NAME_HOT_KEY )[0];

    let opacity =  getComputedStyle(hotKey).opacity;

    if( Number( opacity ) ){
        return true;
    }else{
        return false;
    };
    
};