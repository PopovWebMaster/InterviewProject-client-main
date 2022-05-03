import { CLASS_NAME } from './../config.js';

export const to_remove_the_input_focus = () => {
    let input = document.querySelector(`.${CLASS_NAME.BORDER_WRAP} >input`);
    input.blur();
};