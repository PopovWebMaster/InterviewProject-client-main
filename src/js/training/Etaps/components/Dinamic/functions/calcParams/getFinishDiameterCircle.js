import { getControlWidth } from './getControlWidth.js';

export const getFinishDiameterCircle = ( circleConfig ) => {

    let width = getControlWidth();
    let circleWidth = (width * circleConfig.start_diameter) * circleConfig.magnification_factor;
    
    return circleWidth;




};