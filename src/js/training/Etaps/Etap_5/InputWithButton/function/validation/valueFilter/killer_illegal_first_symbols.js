import { killer_first_symbol_space } from './killer_first_symbol_space.js';
import { REG_EX } from './../config.js';

export const killer_illegal_first_symbols = ( value ) => {

    let result = killer_first_symbol_space( value );

    while( true ){

        let char = result[0];

        let isEn =  REG_EX.EN.test(char);
        let isNum = REG_EX.NUM.test(char);
        let isRu =  REG_EX.RU.test(char);

        let isValidChar = ( isEn || isNum || isRu );

        if( isValidChar ){
            break;
        }else{
            result = killer_first_symbol( result );
        };
    };

    return result;
};

function killer_first_symbol( value ){
    let res = '';

    for ( let i = 1; i < value.length; i++ ){
        res += value[i];
    };

    return res;
};