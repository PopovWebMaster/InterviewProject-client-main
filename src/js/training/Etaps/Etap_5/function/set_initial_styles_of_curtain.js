import { CLASS_NAME, SHOW_DISPLAY_DURATION } from './../config.js';;

export const set_initial_styles_of_curtain = () => {

    let selector = `.${CLASS_NAME.TEST_ITOG} .${CLASS_NAME.DISPLAY_CURTAIN}`;

    let div_curtain = document.querySelector( selector );

    div_curtain.style.cssText = `
        transition: opacity ${SHOW_DISPLAY_DURATION}ms ease-out, height ${SHOW_DISPLAY_DURATION}ms ease-out;
    `;

};