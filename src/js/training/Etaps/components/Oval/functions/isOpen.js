import {    ID_NAME, 
            CLASS_NAME,
            width_answer_open } from './../config.js';

export const isOpen = () => {
    let answer = document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER}` );
    
    if( answer.style.width === width_answer_open ){
        return true;
    }else{
        return false;
    };
};