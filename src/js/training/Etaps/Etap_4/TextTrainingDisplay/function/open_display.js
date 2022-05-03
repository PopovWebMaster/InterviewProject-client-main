import { CLASS_NAME } from './../config.js';
import { get_height_of_the_display_in_em } from './get_height_of_the_display_in_em.js';
import { get_height_of_the_one_li_in_em } from './get_height_of_the_one_li_in_em.js';

export const open_display = ( time ) => {

    let duration = time.duration;
    let delay = time.delay;

    let display = document.querySelector( `.${CLASS_NAME.TEXT_TRAINING_DISPLAY}` );
    let listResult = document.querySelector( `.${CLASS_NAME.RESULT_LIST}` );

    let transitionOpacity = `opacity ${duration+100}ms ease-out ${delay}ms`;
    let transitionHeight = `height ${duration}ms ease-out ${delay}ms`;
    let height = get_height_of_the_display_in_em();


    let height_li = get_height_of_the_one_li_in_em();

    display.style.transition = `${transitionOpacity}, ${transitionHeight}`;

    display.style.height = `${height - height_li}em`;
    listResult.style.opacity = '1';
    display.style.opacity = '1';

};