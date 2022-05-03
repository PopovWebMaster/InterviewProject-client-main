import { CLASS_NAME } from './../config.js';
// import { get_height_of_the_element_em } from './get_height_of_the_element_em.js';
import { get_height_of_the_element_em } from './../../../../../functions/get_height_of_the_element_em.js';


export const get_height_requestedWord_em = () => {

    let requestedWord = document.querySelector( `.${CLASS_NAME.REQUESTED_WORD}` ); 

    return get_height_of_the_element_em( requestedWord );

};