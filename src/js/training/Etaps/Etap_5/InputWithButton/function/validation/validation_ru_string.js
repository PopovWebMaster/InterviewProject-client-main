import { ERROR_TEXT } from './errors_txt.js';
import { REG_EX } from './config.js';

export const validation_ru_string = ( str ) => {

    let isError = false;
    let errorMassage = '';
    
    let isEn =  REG_EX.EN.test(str);
    let isNum = REG_EX.NUM.test(str);
    let isRu =  REG_EX.RU.test(str);

    if( isRu || isNum ){
        if( isEn ){
            isError = true;
            errorMassage = ERROR_TEXT.ru_2;
        };

    }else{
        isError = true;
        errorMassage = ERROR_TEXT.ru_1;

    };

    return {
        isError,
        errorMassage, 
    };

}; 