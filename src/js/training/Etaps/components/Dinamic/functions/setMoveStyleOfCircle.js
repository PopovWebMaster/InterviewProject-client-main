
import { getCircleFinishParams } from './getCircleFinishParams.js';


import { CERCLES } from './../config.js';
import { SPEED_ANUMATION } from './../config.js';


export const setMoveStyleOfCircle = ( elem, index ) => {

    elem.style.transition = '';

    let params = getCircleFinishParams(CERCLES[index]);

    let offset = params.offset;
    let diameter = params.diameter;

    let color = CERCLES[index].color;
    let borderWidth = CERCLES[index].borderWidth;

    let speed = CERCLES[index].speed;
    let deley = CERCLES[index].deley;
    let halfSpeed = speed/2;

    let transition = ` 
            top     ${speed}ms ease-out ${deley}ms, 
            left    ${speed}ms ease-out ${deley}ms, 
            width   ${speed}ms ease-out ${deley}ms, 
            height  ${speed}ms ease-out ${deley}ms,
            opacity ${halfSpeed}ms ease-out ${deley}ms
    `;

    elem.style.cssText = `
        top: ${offset}px;
        left: ${offset}px;

        width: ${diameter}px;
        height: ${diameter}px;

        border-width: ${borderWidth}px;
        border-color: ${color};

        transition: ${transition};

        opacity: 1;  
    `;

    setTimeout( () => {
        elem.style.opacity = 0;
    }, halfSpeed);

    
};















