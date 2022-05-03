import { CLASS_NAME }  from './../config.js';

let start = CLASS_NAME.BUTTON.START;
let training = CLASS_NAME.BUTTON.TRAINING;

export const open_button = ( time ) => {

    let duration = time.duration;
    let dulay = time.dulay;

    let selector = `.${CLASS_NAME.INPUT_BUTTON} .${CLASS_NAME.WRAP} .${CLASS_NAME.BORDER_WRAP}`;

    let button = document.querySelector( `${selector} div` );

    button.style.transition = `width ${duration}ms ease ${dulay}ms`;

    button.classList.remove( start, training );
    button.classList.add( training );

};