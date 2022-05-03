import { REG_EX } from './../config.js';

export const skips_only_allowed_symbols = ( value ) => {

    let result = '';

    for( let char of value ){

        let isEn =      REG_EX.EN.test(char);
        let isNum =     REG_EX.NUM.test(char);
        let isRu =      REG_EX.RU.test(char);
        let isSymbols = REG_EX.SYMBOLS.test(char);

        if( isEn || isNum || isRu || isSymbols ){
            result += char;
        };

    };

    return result;

};