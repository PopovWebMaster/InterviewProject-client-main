import { ERROR_TEXT } from './errors_txt.js';
import { REG_EX } from './config.js';

export const validation_en_string = ( str ) => {
    let isError = false;
    let errorMassage = '';

    let isEn =  REG_EX.EN.test(str);
    let isNum = REG_EX.NUM.test(str);
    let isRu =  REG_EX.RU.test(str);

    if( isEn ){
        if( isRu ){
            isError = true;
            errorMassage = ERROR_TEXT.en_2;
        }else if( isNum ){
            isError = true;
            errorMassage = ERROR_TEXT.en_3;
        };

    }else{
        isError = true;
        if( isNum ){
            errorMassage = ERROR_TEXT.en_3;
        }else{
            errorMassage = ERROR_TEXT.en_1;
        };
        
    };

    return {
        isError,
        errorMassage, 
    };

};