import { CLASS_NAME } from './../../config.js';
import { get_NodeList_li } from './get_NodeList_li.js';

export const get_index_of_selectLi = () => {

    let li = get_NodeList_li();

    let index = undefined;

    for( let i = 0; i < li.length; i++ ){
        if( li[i].className === CLASS_NAME.SELECT_LI ){
            index = i;
        };
    };

    return index;

};