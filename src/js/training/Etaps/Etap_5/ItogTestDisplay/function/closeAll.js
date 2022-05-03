import { CLASS_NAME, DURATION } from './../config.js';

export const closeAll = () => {

    let DisplayStep_1 = document.getElementsByClassName( CLASS_NAME.DISPLAY_1 )[0];
    let DisplayStep_2 = document.getElementsByClassName( CLASS_NAME.DISPLAY_2 )[0];

    DisplayStep_1.style.transition = `height ${DURATION}ms linear`;
    DisplayStep_2.style.transition = `height ${DURATION}ms linear`;

    DisplayStep_1.style.height = '0%';
    DisplayStep_2.style.height = '0%';

};