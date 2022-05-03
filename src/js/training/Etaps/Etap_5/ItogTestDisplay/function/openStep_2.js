import { closeAll } from './closeAll.js';
import { CLASS_NAME, DURATION } from './../config.js';

export const openStep_2 = () => {
    closeAll();

    let timer = setTimeout( () => {

        let DisplayStep_1 = document.getElementsByClassName( CLASS_NAME.DISPLAY_1 )[0];
        let DisplayStep_2 = document.getElementsByClassName( CLASS_NAME.DISPLAY_2 )[0];

        DisplayStep_1.style.zIndex = '100';
        DisplayStep_2.style.zIndex = '200';

        DisplayStep_1.style.opacity = '0';
        DisplayStep_2.style.opacity = '1';

        DisplayStep_2.style.height = '100%';

        clearTimeout(timer);
    }, DURATION );

};