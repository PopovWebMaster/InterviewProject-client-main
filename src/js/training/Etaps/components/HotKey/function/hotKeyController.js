import { show } from './show.js';
import { hide } from './hide.js';
import { isOpen } from './isOpen.js';

export const hotKeyController = {

    isOpen(){
        isOpen();
    },

    show(){
        show();
    },

    hide(){
        hide();
    },

    switch(){
        if( isOpen() ){
            hide();
        }else{
            show();
        };
    },

};

