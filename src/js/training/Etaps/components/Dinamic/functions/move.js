import { moveDinamics } from './moveDinamics.js';
import { moveCircles } from './moveCircles.js';
import { breackAnimation } from './breackAnimation.js';

import { SPEED_ANUMATION } from './../config.js';

let is_immovable = true;

export const move = () => {

    if( is_immovable ){
        moveDinamics();
        moveCircles();

        breackAnimation();
        is_immovable = false;
    };

    let timeFunc = setTimeout( () => {
        is_immovable = true;
        clearTimeout( timeFunc );
    },SPEED_ANUMATION )

};