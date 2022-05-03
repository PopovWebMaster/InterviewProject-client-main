import { remove_class_selectLi } from './remove_class_selectLi.js';
import { add_class_selectLi } from './add_class_selectLi.js';
import { get_NodeList_li } from './get_NodeList_li.js';
import { get_index_of_selectLi } from './get_index_of_selectLi.js';
import { isset } from './../../../../../../../functions/isset.js';


export const select_bottom_item = () => {

    let li = get_NodeList_li();

    let index = get_index_of_selectLi();
    let nextIndex;

    if( isset( li ) ){
        if( index === undefined ){
            nextIndex = 0;

        }else{
            if( index === li.length - 2 ){
                nextIndex = li.length - 2;
            }else{
                nextIndex = index + 1;
            };
        };

        remove_class_selectLi();
        add_class_selectLi( nextIndex );
    };

};