import { getStartDiametrCircle } from './calcParams/getStartDiametrCircle.js';
import { getStartOffsetCircle } from './calcParams/getStartOffsetCircle.js';

export const getCircleStartParams = ( circle ) => {

    let diameter = getStartDiametrCircle( circle ); 
    let offset = getStartOffsetCircle( circle ); 

    return {
        diameter: diameter,
        offset: offset
    };

};