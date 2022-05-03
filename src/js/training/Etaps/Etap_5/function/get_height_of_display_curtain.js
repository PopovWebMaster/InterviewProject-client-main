import { get_height_of_the_element_em } from './../../../../functions/get_height_of_the_element_em.js';
import { CLASS_NAME } from './../config.js';

export const get_height_of_display_curtain = () => {

    let div_curtain = document.querySelectorAll( `.${CLASS_NAME.DISPLAY_CURTAIN} >div` );
    let height_result = 0;

    for( let i = 0; i < div_curtain.length; i++ ){

        let height = get_height_of_the_element_em( div_curtain[i] );
        height_result = height_result + Math.abs( height );

    };

    return height_result;

};