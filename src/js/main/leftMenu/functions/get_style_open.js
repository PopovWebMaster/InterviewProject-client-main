import { SPEED_OF_MOVEMENT, CUBIC_BEZIER_FUNCTION } from './../config.js';

export const get_style_open = ( with_animation = false ) => {

    let style;
    let duration =      SPEED_OF_MOVEMENT;
    let cubic_func =    CUBIC_BEZIER_FUNCTION;

    if( with_animation ){
        style = `
            opacity: 1;
            left: 0em;
            transition: left ${duration}ms ${cubic_func} 0s, opacity 0ms ${cubic_func} 0ms;
            
        `; 

    }else{
        style = `
            opacity: 1;
            left: 0em;
            transition: left 0ms ${cubic_func} 0s, opacity 0ms ${cubic_func} 0ms;
        `;
    };
    
    return style;

};