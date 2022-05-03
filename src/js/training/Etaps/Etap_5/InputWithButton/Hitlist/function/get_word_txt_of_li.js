import { get_NodeList_li } from './select/get_NodeList_li.js';


export const get_word_txt_of_li = ( index = undefined ) => {
    let word_txt = '';

    if( index !== undefined ){
        let li = get_NodeList_li();
        word_txt = li[index].textContent;
    };

    return word_txt;

};