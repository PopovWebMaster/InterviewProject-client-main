import { analyzing_an_empty_array } from './analyzing_an_empty_array.js';
import { comparative_analysis_of_words } from './comparative_analysis_of_words.js';
import { check_limit_errors } from './check_limit_errors.js';

export const get_a_comparison_analysis = ( params ) => {

    let arr_match_letters_and_sequences = params.arr_match_letters_and_sequences;
    let correct =  params.correct_word;
    let user =  params.user_word; // не удалять

    let result;

    if( arr_match_letters_and_sequences.length === 0 ){
        result = analyzing_an_empty_array( correct );

    }else{
        result = comparative_analysis_of_words( params );

    };

    let is_error_limit_exceeded = check_limit_errors( result );

    return {
        is_error_limit_exceeded,
        result,
    };




};

