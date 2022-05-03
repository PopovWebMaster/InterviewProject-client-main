import {    ID_NAME, 
            CLASS_NAME,
            width_answer_close     } from './../config.js';

export const close = () => {

    let answer =        document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER}` );
    let answer_ru =     document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER_RU}` );
    let answer_title =  document.querySelector( `#${ID_NAME} .${CLASS_NAME.ANSWER_TITLE}` );

    let dinamic_location = document.querySelector( `#${ID_NAME} .${CLASS_NAME.DINAMIC_LOCATION}` );

    dinamic_location.style.transition = 'opacity 0.2s';
    dinamic_location.style.transitionDelay = '0.2s';
    dinamic_location.style.opacity = 1;

    answer.style.transition = 'width 0.2s ease-out';
    answer.style.width = width_answer_close;
    
    answer_ru.style.cssText = `
        opacity: 0;
        transition-delay: 0s;
    `;

    answer_title.style.cssText = `
        opacity: 1;
        transition-duration: 0s;
        transition-delay: 0s;
    `;

};
