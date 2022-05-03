import { CLASS_NAME } from './../config.js';
// import { get_height_of_the_element_em } from './get_height_of_the_element_em.js';
import { get_height_of_the_element_em } from './../../../../../functions/get_height_of_the_element_em.js';

export const get_height_listResult_em = () => {

    let requestedWord = document.querySelector( `.${CLASS_NAME.RESULT_LIST}` ); 

    return get_height_of_the_element_em( requestedWord );

};