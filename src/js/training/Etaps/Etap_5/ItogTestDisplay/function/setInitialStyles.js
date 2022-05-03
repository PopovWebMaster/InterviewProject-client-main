import { CLASS_NAME, DURATION } from './../config.js';

export const setInitialStyles = ( step ) => {

    let DisplayStep_1 = document.getElementsByClassName( CLASS_NAME.DISPLAY_1 )[0];
    let DisplayStep_2 = document.getElementsByClassName( CLASS_NAME.DISPLAY_2 )[0];

    let opacityDisplay_1 = step === 1? '1': '0';
    let opacityDisplay_2 = step === 2? '1': '0';

    let zIndexDisplay_1 = step === 1? '200': '100';
    let zIndexDisplay_2 = step === 2? '200': '100';

    DisplayStep_1.style.cssText = `
        transition: height ${DURATION}ms linear;
        opacity: ${opacityDisplay_1};
        z-index: ${zIndexDisplay_1};
    `;

    DisplayStep_2.style.cssText = `
        transition: height ${DURATION}ms linear;
        opacity: ${opacityDisplay_2};
        z-index: ${zIndexDisplay_2};
    `;

};