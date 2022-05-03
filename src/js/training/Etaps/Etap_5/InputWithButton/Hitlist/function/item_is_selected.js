import { get_NodeList_li } from './select/get_NodeList_li.js';
import { CLASS_NAME } from './../config.js';

export const item_is_selected = () => {
    let li = get_NodeList_li();

    let result = false;

    for( let i = 0; i < li.length; i++ ){
        if( li[i].className === CLASS_NAME.SELECT_LI ){
            result = true;
            break;
        };
    };

    return result;

};