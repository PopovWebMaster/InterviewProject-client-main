import { move } from './move.js';
import { createCercles } from './createCercles.js';

export const dinamicController =  {
    move(){
        move();
    },

    performs_initial_settings(){
        createCercles();
    }
};



