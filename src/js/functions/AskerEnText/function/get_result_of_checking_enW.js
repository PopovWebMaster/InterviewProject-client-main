import { get_result_of_comparing_two_words } from './methods_for_checking_enW/get_result_of_comparing_two_words.js';
import { initial_preparation_for_comparison } from './methods_for_checking_enW/initial_preparation_for_comparison.js';
import { CLASS_NAME } from './../../../training/Etaps/Etap_4/TextTrainingDisplay/config.js';

export const get_result_of_checking_enW = ( wordsEn ) => {

    let correct_word =  initial_preparation_for_comparison( wordsEn.enW ); 
    let user_word =     initial_preparation_for_comparison( wordsEn.userEnW );

    let ok;
    let html_enW;

    let ok_span_h = `<span class = '${ CLASS_NAME.ICON_OK } ${CLASS_NAME.OK_HIDDEN }' ></span>`;
    let ok_span_sh = `<span class = '${ CLASS_NAME.ICON_OK }' ></span>`;

    if( correct_word === user_word ){
        ok = true;
        html_enW = `${ok_span_h}${user_word}${ok_span_sh}`;

    }else{
        ok = false;

        html_enW = get_result_of_comparing_two_words({
            correct_word,
            user_word
        });

    };

    return {
        ok,
        html_enW
    };

};