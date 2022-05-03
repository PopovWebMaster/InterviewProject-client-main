import { getControlWidth } from './getControlWidth.js';

export const getStartDiametrCircle = ( circleConfig ) => {

    let width = getControlWidth();
    let circleWidth = width * circleConfig.start_diameter;
    
    return circleWidth;

};