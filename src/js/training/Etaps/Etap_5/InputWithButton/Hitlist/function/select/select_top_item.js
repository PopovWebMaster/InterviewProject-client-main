import { remove_class_selectLi } from './remove_class_selectLi.js';
import { add_class_selectLi } from './add_class_selectLi.js';
import { get_NodeList_li } from './get_NodeList_li.js';
import { get_index_of_selectLi } from './get_index_of_selectLi.js';
import { isset } from './../../../../../../../functions/isset.js';

export const select_top_item = () => {

    let li = get_NodeList_li();

    let index = get_index_of_selectLi();
    let nextIndex;

    if( isset( li ) ){
        if( index === undefined ){
            nextIndex = li.length - 2;

        }else{
        if( index === 0 ){
                nextIndex = 0;
            }else{
                nextIndex = index - 1;
            }; 
        };

        remove_class_selectLi();
        add_class_selectLi( nextIndex );
    };

};