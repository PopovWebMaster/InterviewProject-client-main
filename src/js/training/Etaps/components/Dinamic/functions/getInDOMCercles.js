import { CLASS_NAME_DINAMIC_CIRCLES } from './../config.js';
import { CERCLES } from './../config.js';



export const getInDOMCercles = () => {

    let dinamic_circles = document.getElementsByClassName( CLASS_NAME_DINAMIC_CIRCLES )[0];

    for( let i = 0; i < CERCLES.length; i++ ){
        let div = document.createElement('div');
        dinamic_circles.append( div );
    };

};
