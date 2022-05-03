import { CLASS_NAME_DINAMIC_CIRCLES } from './../config.js';
import { CERCLES } from './../config.js';

import { getCircleStartParams } from './getCircleStartParams.js';

import { convertFromPxToEm } from './calcParams/convertFromPxToEm.js';

export const setAnimationCerclesStyles = () => {

    let circles = document.getElementsByClassName( CLASS_NAME_DINAMIC_CIRCLES )[0].children;

    for( let i = 0; i < circles.length; i++ ){

        let color = CERCLES[i].color;
        let borderWidth = CERCLES[i].borderWidth;

        let circleParams = getCircleStartParams( CERCLES[i] );

        let offset_em = convertFromPxToEm( circleParams.offset );
        let diameter_em = convertFromPxToEm( circleParams.diameter );

        circles[i].style.cssText = `
            top: ${offset_em}em;
            left: ${offset_em}em;

            width: ${diameter_em}em;
            height: ${diameter_em}em;

            border-width: ${borderWidth}px;
            border-color: ${color};

            opacity: 0;
        `;
    };
};

