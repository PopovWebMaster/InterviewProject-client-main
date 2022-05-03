
import { CLASS_NAME_DINAMIC_CIRCLES } from './../config.js';
import { setAnimationCerclesStyles } from './setAnimationCerclesStyles.js';

export const returns_initial_styles_of_circles = () => {

    let circles = document.getElementsByClassName( CLASS_NAME_DINAMIC_CIRCLES )[0].children;

    for( let i = 0; i < circles.length; i++ ){
        circles[i].style.transition = '';
    };

    setAnimationCerclesStyles();

};