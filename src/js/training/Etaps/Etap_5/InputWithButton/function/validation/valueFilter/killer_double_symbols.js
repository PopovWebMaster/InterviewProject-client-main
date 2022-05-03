import { REG_EX } from './../config.js';

export const killer_double_symbols = ( value ) => {

    let result = value;

    for( let char of value ){

        let isSymbols = REG_EX.SYMBOLS.test(char);

        if( isSymbols ){
            let duobleChar = `\\${char}\\${char}`;
            result = result.replace( new RegExp( duobleChar, 'g' ), char );
        };

    };

    return result;

};