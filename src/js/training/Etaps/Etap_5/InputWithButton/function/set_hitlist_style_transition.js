import { CLASS_NAME }  from './../config.js';

export const set_hitlist_style_transition = ( time ) => {

    let duration = time.duration;
    let dulay = time.dulay;

    let selector = `.${CLASS_NAME.INPUT_BUTTON} .${CLASS_NAME.WRAP} .hitlist`;

    let hitlist = document.querySelector( `${selector}` );
    hitlist.style.transition = `width ${duration}ms ease ${dulay}ms`;

   


};