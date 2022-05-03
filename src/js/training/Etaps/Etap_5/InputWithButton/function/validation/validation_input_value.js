import { valueFilter } from './valueFilter.js';
import { validation_ru_string } from './validation_ru_string.js';
import { validation_en_string } from './validation_en_string.js';

export const validation_input_value = ( params ) => {

    let val = params.value;
    let step =  params.step;

    let isError = false;
    let errorMassage = '';

    let value = valueFilter( val );

    if( value !== '' ){
        if( step === 1 ){
            let res = validation_ru_string( value );

            isError = res.isError;
            errorMassage = res.errorMassage;

        }else if( step === 2 ){
            let res = validation_en_string( value );

            isError = res.isError;
            errorMassage = res.errorMassage;
        };
    };

    return {
        value,
        isError,
        errorMassage, 
    };


};