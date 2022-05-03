import { convert_number_to_a_string } from './convert_number_to_a_string.js';
import { ID_NAME, CLASS_NAME } from './../config.js';

export const set_vocabulary = ( num ) => {

    let selector = `#${ID_NAME} span.${CLASS_NAME.SUM_VOC}`;
    let span = document.querySelector( selector );

    span.innerText = convert_number_to_a_string( num );

};