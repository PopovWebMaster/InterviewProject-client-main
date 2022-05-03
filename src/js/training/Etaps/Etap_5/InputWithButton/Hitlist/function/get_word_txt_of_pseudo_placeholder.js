import { get_NodeList_li }          from './select/get_NodeList_li.js';
import { get_word_txt_of_li }       from './get_word_txt_of_li.js';

export const get_word_txt_of_pseudo_placeholder = () => {

    let li = get_NodeList_li();
    let word_txt = '';

    if( li.length !== 0 ){
        word_txt = get_word_txt_of_li( li.length - 1 );   
    };

    return word_txt;

};