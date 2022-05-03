import { ID_NAME, SPEED_OF_MOVEMENT, CUBIC_BEZIER_FUNCTION } from './../config.js';
import { get_width_of_the_element_em } from './../../../functions/get_width_of_the_element_em.js';

export const get_style_close = ( with_animation = false ) => {

    let leftMenu = document.getElementById( ID_NAME );
    let width = get_width_of_the_element_em( leftMenu );

    let style;
    let duration =      SPEED_OF_MOVEMENT;
    let cubic_func =    CUBIC_BEZIER_FUNCTION;
    
    if( with_animation ){
        style = `
            opacity: 0;
            left: -${width}em;
            transition: left ${duration}ms ${cubic_func} 0s, opacity 0ms ${cubic_func} ${duration}ms;
        `;

    }else{
        style = `
            opacity: 0;
            left: -${width}em;
            transition: left 0ms ${cubic_func} 0s, opacity 0ms ${cubic_func} 0ms;
        `;
    };
    
    return style;



};