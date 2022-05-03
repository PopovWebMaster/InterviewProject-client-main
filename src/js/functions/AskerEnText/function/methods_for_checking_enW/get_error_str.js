import { isset } from './../../../../functions/isset.js';
import { CLASS_NAME } from './../../../../training/Etaps/Etap_4/TextTrainingDisplay/config.js';

//лишняя буква
export const excess_letter = ( letter, index = undefined ) => {
    if ( isset( index ) ){
        return `<span class = ${ CLASS_NAME.SPAN_RED } key = ${index} ><strike>${letter}</strike></span>`;
    }else{
        return `<span class = ${ CLASS_NAME.SPAN_RED }><strike>${letter}</strike></span>`;
    };
    
};

//отсутствует буква
export const absent_letter = ( index = undefined ) => {
    if ( isset( index ) ){
        return `<span class = ${ CLASS_NAME.SPAN_RED } key = ${index}>_</span>`;

    }else{
        return `<span class = ${ CLASS_NAME.SPAN_RED }>_</span>`;
    };
};

//заменена буква
export const incorrect_letter = ( letter, index = undefined ) => {
    if ( isset( index ) ){
        return `<span class = ${ CLASS_NAME.SPAN_RED } key = ${ index }>${ letter }</span>`;
    }else{
        return `<span class = ${ CLASS_NAME.SPAN_RED }>${ letter }</span>`;
    };
};

// буква без ошибок
export const true_letter = ( letter, index = undefined ) => {
    if ( isset( index ) ){
        return `<span key = ${ index }>${ letter }</span>`;
    }else{
        return `<span>${ letter }</span>`;
    };
};

// обозначить правильную букву с ошибкой в контрольном слове
export const correct_letter_with_error = ( letter, index = undefined ) => {
    if ( isset( index ) ){
        return `<span class = ${ CLASS_NAME.SPAN_LETER_WITH_ERROR } key = ${ index }>${ letter }</span>`;
    }else{
        return `<span class = ${ CLASS_NAME.SPAN_LETER_WITH_ERROR }>${ letter }</span>`;
    };
};


