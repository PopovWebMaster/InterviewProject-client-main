import { ID_NAME } from './../config.js';
import { CLASS_NAME_DINAMIC_SPANS } from './../config.js';
import { CLASS_NAME } from './../config.js';

export const overwrites_DOM_element_dinamic_spans = () => {

    let new_dinamic_spans = document.createElement('div');
    new_dinamic_spans.classList.add( CLASS_NAME_DINAMIC_SPANS ); // 'dinamic_spans'
    
    let span_1 = document.createElement('span');
    span_1.className = CLASS_NAME.SPAN_VOLUME_UP ; //  'span-1 icon-volume-up';
    new_dinamic_spans.appendChild( span_1 );

    let span_2 = document.createElement('span');
    span_2.className = CLASS_NAME.SPAN_VOLUME_DOWN ; //'span-2 icon-volume-down';
    new_dinamic_spans.appendChild( span_2 );

    let span_3 = document.createElement('span');
    span_3.className = CLASS_NAME.SPAN_VOLUME_OFF ; //'span-3 icon-volume-off';
    new_dinamic_spans.appendChild( span_3 );

    let dinamic_spans = document.querySelector( `#${ID_NAME} .${CLASS_NAME_DINAMIC_SPANS}` ); //   '#dinamic .dinamic_spans');
    dinamic_spans.remove();

    let dinamic  = document.getElementById( ID_NAME ); // 'dinamic'
    dinamic.prepend( new_dinamic_spans );

};