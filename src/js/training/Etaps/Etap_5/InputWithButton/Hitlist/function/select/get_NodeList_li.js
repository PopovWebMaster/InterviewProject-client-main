import { CLASS_NAME } from './../../config.js';

export const get_NodeList_li = () => {

    let selector = `.${CLASS_NAME.HITLIST} ul li`;
    let li = document.querySelectorAll( selector );

    return li;

};