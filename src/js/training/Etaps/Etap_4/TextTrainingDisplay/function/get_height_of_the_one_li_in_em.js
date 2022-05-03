import { CLASS_NAME } from './../config.js';
// import { get_height_of_the_element_em } from './get_height_of_the_element_em.js';
import { get_height_of_the_element_em } from './../../../../../functions/get_height_of_the_element_em.js';

export const get_height_of_the_one_li_in_em = () => {

    let selector = `.${CLASS_NAME.TEXT_TRAINING_DISPLAY} .${CLASS_NAME.RESULT_LIST}`;
    let li = document.querySelectorAll( `${selector} ul li`);

    return get_height_of_the_element_em( li[0] );

};