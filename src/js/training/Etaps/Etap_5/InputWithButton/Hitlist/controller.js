import { get_word_txt_of_selected_element } from './function/get_word_txt_of_selected_element.js';
import { get_word_txt_of_pseudo_placeholder } from './function/get_word_txt_of_pseudo_placeholder.js';
import { select_item }                      from './function/select/select_item.js';
import { select_top_item }                  from './function/select/select_top_item.js';
import { select_bottom_item }               from './function/select/select_bottom_item.js';
import { item_is_selected }                 from './function/item_is_selected.js';
import { remove_class_selectLi }            from './function/select/remove_class_selectLi.js';

export const controller = {

    get_word_txt_of_pseudo_placeholder(){
        return get_word_txt_of_pseudo_placeholder();
    },

    get_word_txt_of_selected_element(){
        return get_word_txt_of_selected_element();
    },

    select_item( index ){
        select_item( index );
    },

    select_top_item(){
        select_top_item();
    },

    select_bottom_item(){
        select_bottom_item();
    },

    item_is_selected(){
        return item_is_selected();
    },

    to_remove_all_selections(){
        remove_class_selectLi();
    },





};



