import {    ID_NAME, 
    CLASS_NAME,
    width_answer_open     } from './../config.js';

export const openStatic = () => {

    let answer =        document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER}` );
    let answer_ru =     document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER_RU}` );
    let answer_title =  document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER_TITLE}` );

    let dinamic_location = document.querySelector( `#${ID_NAME} .${CLASS_NAME.DINAMIC_LOCATION}` );

    dinamic_location.style.transition = 'opacity 0s';
    dinamic_location.style.opacity = 0;

    answer.style.transition = 'width 0s ease-out';
    answer.style.width = width_answer_open;

    answer_ru.style.cssText = `
        opacity: 1;
        `;

    answer_title.style.cssText = `
        opacity: 0;
        transition-duration: 0s;
    `;//0
};