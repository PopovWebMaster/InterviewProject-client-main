import { CLASS_NAME }  from './../config.js';

export const open_input = ( time ) => {

    let duration = time.duration;
    let dulay = time.dulay;

    let selector = `.${CLASS_NAME.INPUT_BUTTON} .${CLASS_NAME.WRAP} .${CLASS_NAME.BORDER_WRAP}`;

    let input = document.querySelector( `${selector} input` );
    let open = CLASS_NAME.INPUT.OPEN;
    let close = CLASS_NAME.INPUT.CLOSE;

    input.style.transition = `width ${duration}ms ease ${dulay}ms, opacity ${duration}ms ease ${dulay}ms`;

    input.classList.remove( open, close );
    input.classList.add( open );

};