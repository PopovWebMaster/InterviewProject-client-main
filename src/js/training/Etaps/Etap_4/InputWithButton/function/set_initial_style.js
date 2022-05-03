import { CLASS_NAME }  from './../config.js';

export const set_initial_style = () => {

    let selector = `.${CLASS_NAME.INPUT_BUTTON} .${CLASS_NAME.WRAP} .${CLASS_NAME.BORDER_WRAP}`;

    let input = document.querySelector( `${selector} input` );
    input.classList.add( CLASS_NAME.INPUT.CLOSE );

    let button = document.querySelector( `${selector} div` );
    button.classList.add( CLASS_NAME.BUTTON.START );

};