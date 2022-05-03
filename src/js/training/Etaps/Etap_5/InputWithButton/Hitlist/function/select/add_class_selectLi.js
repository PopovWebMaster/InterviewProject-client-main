import { CLASS_NAME } from './../../config.js';
import { get_NodeList_li } from './get_NodeList_li.js';

export const add_class_selectLi = ( index ) => {

    let li = get_NodeList_li();
    if( li.length !== 0 ){
        li[index].classList.add( CLASS_NAME.SELECT_LI );
    };

};