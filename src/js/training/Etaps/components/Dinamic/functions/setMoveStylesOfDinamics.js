import { ANIMATION_NAME } from './../config.js';
import { ID_NAME } from './../config.js';
import { CLASS_NAME_DINAMIC_SPANS } from './../config.js';
import { SPEED_ANUMATION } from './../config.js';

export const setMoveStylesOfDinamics = () => {

    let selector_main = `#${ID_NAME} .${CLASS_NAME_DINAMIC_SPANS}`;

    let selector_span_1 = `${selector_main} span.${ANIMATION_NAME.SPAN_1}`;
    let selector_span_2 = `${selector_main} span.${ANIMATION_NAME.SPAN_2}`;
    let selector_span_3 = `${selector_main} span.${ANIMATION_NAME.SPAN_3}`;

    let span_1 = document.querySelector( selector_span_1 );
    let span_2 = document.querySelector( selector_span_2 );
    let span_3 = document.querySelector( selector_span_3 );

    span_1.style.cssText = `
        animation-duration: ${SPEED_ANUMATION}ms;
        animation-play-state: running;

    `;

    span_2.style.cssText = `
        animation-duration: ${SPEED_ANUMATION}ms;
        animation-play-state: running;

    `;

    span_3.style.cssText = `
        animation-duration: ${SPEED_ANUMATION}ms;
        animation-play-state: running;

    `;

};


