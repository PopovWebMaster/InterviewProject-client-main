import { CLASS_NAME } from './../../config.js';
import { get_NodeList_li } from './get_NodeList_li.js';
import { isset } from './../../../../../../../functions/isset.js';

export const remove_class_selectLi = () => {

    let li = get_NodeList_li();
    if( isset( li ) ){
        for( let i = 0; i < li.length; i++ ){
            li[i].classList.remove( CLASS_NAME.SELECT_LI );
        };
    };

};