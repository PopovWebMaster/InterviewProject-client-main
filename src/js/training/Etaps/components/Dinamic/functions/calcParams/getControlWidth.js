import { ID_NAME } from './../../config.js';

export const getControlWidth = () => {
    let dinamic = document.getElementById( ID_NAME );

    let width_px = window.getComputedStyle(dinamic).width;
    let width = width_px.replace(new RegExp('px'), '');

    return width;
};





