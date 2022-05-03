import { CLASS_NAME_DINAMIC_CIRCLES } from './../../config.js';

export const convertFromPxToEm = ( num ) => {

    let dinamic_spans = document.getElementsByClassName( CLASS_NAME_DINAMIC_CIRCLES )[0];
    let fontSize_px = window.getComputedStyle(dinamic_spans).fontSize;
    let fontSize = fontSize_px.replace(new RegExp('px'), '');
    fontSize = Number( fontSize );

    return num/fontSize;

};