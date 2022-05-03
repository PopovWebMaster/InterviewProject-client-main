import {    CLASS_NAME,
            LIST_DURATION } from './../config.js';

export const set_initial_list_styles = () => {

    let selector = `.${CLASS_NAME.TEXT_TRAINING_DISPLAY} .${CLASS_NAME.RESULT_LIST}`;

    let li = document.querySelectorAll( `${selector} ul li`);

    for( let i = 0; i < li.length; i++ ){
        li[i].style.transition =  `
            height ${LIST_DURATION}ms ease-out,
            opacity ${LIST_DURATION}ms ease-out 
        `;
    };

};