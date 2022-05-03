import { OPEN_DURATION } from './../config.js';
import { CLASS_NAME } from './../config.js';

export const close = () => {

    let div_steps = document.querySelector( `.${CLASS_NAME.STEPS}` );

    let duration = OPEN_DURATION/1000;

    div_steps.style.opacity = '0';
    div_steps.style.marginTop = '-3em';
    div_steps.style.height = '0';

    div_steps.style.transition = `
        opacity ${duration}s ease-out,
        margin-top ${duration}s ease-out,
        height ${duration}s ease-out
    `;

    div_steps.style.transitionDelay =  `0s`;

};