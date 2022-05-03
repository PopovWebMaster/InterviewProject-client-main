import { CLASS_NAME } from './config.js';

export const controller = {
    
    update( params ){
        let sum_words = params.sum_words;
        let user_result = params.user_result;

        let selector_tbody = `.${CLASS_NAME.INFO_PANEL} .${CLASS_NAME.WRAP} .${CLASS_NAME.INFO_RESULT} table tbody`;

        let th_sum_words =      document.querySelector( `${selector_tbody} .${CLASS_NAME.SUM_WORDS}` );
        let th_user_result =    document.querySelector( `${selector_tbody} .${CLASS_NAME.USER_RESULT}` );

        th_sum_words.innerText = sum_words;
        th_user_result.innerText = user_result;

    },

    
};