import { getFinishDiameterCircle } from './calcParams/getFinishDiameterCircle.js';
import { getFinishOffsetCircle } from './calcParams/getFinishOffsetCircle.js';

export const getCircleFinishParams = ( circle ) => {

    let diameter = getFinishDiameterCircle( circle ); 
    let offset = getFinishOffsetCircle( circle ); 

    return {
        diameter: diameter,
        offset: offset
    };

};