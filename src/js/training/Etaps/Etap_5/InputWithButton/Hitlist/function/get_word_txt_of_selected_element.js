import { get_NodeList_li }          from './select/get_NodeList_li.js';
import { get_index_of_selectLi }    from './select/get_index_of_selectLi.js';
import { get_word_txt_of_li }       from './get_word_txt_of_li.js';

export const get_word_txt_of_selected_element = () => {

    let li = get_NodeList_li();
    let index = get_index_of_selectLi();
    let word_txt = '';

    if( li.length !== 0 ){
        if( index === undefined ){
            word_txt = get_word_txt_of_li( li.length - 1 );
        }else{
            word_txt = get_word_txt_of_li( index );
        };
    };

    return word_txt;

};