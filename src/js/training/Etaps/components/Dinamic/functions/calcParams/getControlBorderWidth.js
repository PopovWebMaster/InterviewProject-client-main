import { ID_NAME } from './../../config.js';

export const getControlBorderWidth = () => {
    let dinamic = document.getElementById( ID_NAME );
    let borderWidth_px = window.getComputedStyle(dinamic).borderWidth;
    let borderWidth = borderWidth_px.replace(new RegExp('px'), '');
    return Number( borderWidth );
};