import { remove_class_selectLi } from './remove_class_selectLi.js';
import { add_class_selectLi } from './add_class_selectLi.js';

export const select_item = ( index ) => {

    remove_class_selectLi();
    add_class_selectLi( index );

};