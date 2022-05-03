import { CLASS_NAME } from './../config.js';

export const sets_the_input_to_focus = () => {
    let input = document.querySelector(`.${CLASS_NAME.BORDER_WRAP} >input`);
    input.focus();
};

