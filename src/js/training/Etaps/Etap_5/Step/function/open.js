import { OPEN_DURATION } from './../config.js';
import { CLASS_NAME } from './../config.js';

export const open = () => {

    let div_steps = document.querySelector( `.${CLASS_NAME.STEPS}` );

    let duration = OPEN_DURATION/1000;

    div_steps.style.opacity = '1';
    div_steps.style.marginTop = '0';
    div_steps.style.height = '4em';

    div_steps.style.transition = `
        opacity ${duration}s ease-out,
        margin-top ${duration}s ease-out,
        height ${duration}s ease-out
    `;

    div_steps.style.transitionDelay =  `0s`;

};