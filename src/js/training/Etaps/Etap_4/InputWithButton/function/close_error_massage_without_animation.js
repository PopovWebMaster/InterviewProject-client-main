import { CLASS_NAME } from './../config.js';

export const close_error_massage_without_animation = () => {

    let errorMassage = CLASS_NAME.ERROR.MASSAGE;
    let open = CLASS_NAME.ERROR.OPEN;
    let hide = CLASS_NAME.ERROR.HIDE;
    let hideWithOutAnimation = CLASS_NAME.ERROR.HIDE_WITHOUT_ANIMATION;

    let elem = document.querySelector( `.${errorMassage} span` );
    elem.classList.remove( open, hide, hideWithOutAnimation );
    elem.classList.add( hideWithOutAnimation );
    
};