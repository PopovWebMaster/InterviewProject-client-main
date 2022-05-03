import { getStartDiametrCircle } from './getStartDiametrCircle.js';
import { getControlWidth } from './getControlWidth.js';
import { getControlBorderWidth } from './getControlBorderWidth.js'

export const getStartOffsetCircle = ( circleConfig ) => {

    let circleWidth = getStartDiametrCircle( circleConfig );
    let controlWidth = getControlWidth();
    let controlBorderWidth = getControlBorderWidth();

    let offset;

    if( circleWidth === controlWidth ){
        offset = controlBorderWidth - circleConfig.borderWidth;
    }else if( circleWidth > controlWidth ){
        offset = ((( circleWidth - controlWidth )/2) + circleConfig.borderWidth) * (-1);

    }else if( circleWidth < controlWidth ){
        offset = (controlWidth - circleWidth)/2 - circleConfig.borderWidth;
    };

    return offset;

};