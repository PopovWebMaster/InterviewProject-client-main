import { ANIMATION_DURATION } from './../config.js';
import { CLASS_NAME } from './../config.js';
import { OFFSET_SPAN_TEXT } from './../config.js';

export const showStep1 = () => {

    let selector = `.${CLASS_NAME.STEPS} .${CLASS_NAME.STEP_TEXT}`;

    let div_step_1 = document.querySelector( `${selector} .${CLASS_NAME.STEP_1}`);
    let span_step_1 = document.querySelector( `${selector} .${CLASS_NAME.STEP_1} span`);
    let div_step_2 = document.querySelector( `${selector} .${CLASS_NAME.STEP_2}`);
    let span_step_2 = document.querySelector( `${selector} .${CLASS_NAME.STEP_2} span`);

    let bg = document.querySelector( `.${CLASS_NAME.STEPS} .${CLASS_NAME.STEP_BG}`);

    let duration = ANIMATION_DURATION/1000;

    div_step_1.style.opacity =          '1';
    div_step_1.style.transition =       `opacity ${duration * 0.6}s ease-out`;
    div_step_1.style.transitionDelay =  `${duration}s`;

    span_step_1.style.marginLeft =      `0`;
    span_step_1.style.transition =      `margin-left ${duration*1.3}s ease-out`;
    span_step_1.style.transitionDelay =  `${duration*0.6}s`;

    div_step_2.style.opacity =          '0';
    div_step_2.style.transition =       `opacity ${duration * 0.6}s ease-out `;
    div_step_2.style.transitionDelay =  '0s';

    span_step_2.style.marginLeft =      `-${OFFSET_SPAN_TEXT}%`;
    span_step_2.style.transition =      `margin-left ${duration*1.3}s ease-out`;
    span_step_2.style.transitionDelay =  `0s`;

    bg.style.left = '0';
    bg.style.transition = `left ${duration * 1.3}s ease-out`;

};