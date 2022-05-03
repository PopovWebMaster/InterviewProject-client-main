// import { ANIMATION_NAME } from './../config.js';
// import { ID_NAME } from './../config.js';
// import { CLASS_NAME_DINAMIC_SPANS } from './../config.js';
import { SPEED_ANUMATION } from './../config.js';
// import { CLASS_NAME } from './../config.js';


import { overwrites_DOM_element_dinamic_spans } from './overwrites_DOM_element_dinamic_spans.js';

import { returns_initial_styles_of_circles } from './returns_initial_styles_of_circles.js'

export const breackAnimation = ( callback = undefined ) => {

    setTimeout( () => {

        overwrites_DOM_element_dinamic_spans();
        returns_initial_styles_of_circles();


        if( callback !== undefined ){
            callback();
        };

    }, SPEED_ANUMATION);



};















