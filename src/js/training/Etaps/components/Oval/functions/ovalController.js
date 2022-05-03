
import { open } from './open.js';
import { close } from './close.js';
import { isOpen } from './isOpen.js';
import { openStatic } from './openStatic.js';


export const ovalController = {

    isOpen(){
        return isOpen();
    },

    openingSwitch(){
        if( isOpen() ){
            close();
        }else{
            open();
        };
    },

    open(){
        open();
    },

    openStatic(){
        openStatic();
    },

    close(){
        close();
    },

};


