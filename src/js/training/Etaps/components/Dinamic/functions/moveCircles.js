import { CLASS_NAME_DINAMIC_CIRCLES } from './../config.js';

import { setMoveStyleOfCircle } from './setMoveStyleOfCircle.js';

export const moveCircles = () => {

    let cercles = document.getElementsByClassName(CLASS_NAME_DINAMIC_CIRCLES)[0].children;

    for( let i = 0; i < cercles.length; i++ ){
        setMoveStyleOfCircle( cercles[i], i );
    };

};