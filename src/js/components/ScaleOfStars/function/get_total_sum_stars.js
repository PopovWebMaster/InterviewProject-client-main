import { CLASS_NAME } from './../config.js';

export const get_total_sum_stars = () => {

    let selector_li = `ul.${CLASS_NAME.SCALE_OF_STARS} li`;
    let li = document.querySelectorAll( selector_li );

    return li.length;

};