import {    TEST_LIST,
            CORRECT_WORD } from './testList.js';
import { initial_preparation_for_comparison } from './../initial_preparation_for_comparison.js';
import { parses_words_into_letters } from './../parses_words_into_letters.js';
import { get_arr_of_matching_letters } from './../get_arr_of_matching_letters.js';

import { get_a_comparison_analysis } from './../analysis/get_a_comparison_analysis.js';


export const consoleTest = () => {

    let words = TEST_LIST;
    let correct_word = CORRECT_WORD;

    let arr_user_words = words;

    for( let i = 0; i < arr_user_words.length; i++ ){
        test( correct_word, arr_user_words[i] );
        console.log('');
    };

};



function test( correct_word, user_word ){

    let words = {
        correct_word: initial_preparation_for_comparison(correct_word),
        user_word: initial_preparation_for_comparison(user_word),
    };

    console.log(words.correct_word);
    console.log(words.user_word);
    //////////////////////////////////////////////////////////////
    let table_1 = [
        {
            correct_word,
            user_word
        },
        words
    ];
    console.groupCollapsed('initial_preparation_for_comparison');
    console.table(table_1);
    console.groupEnd();
    //////////////////////////////////////////////////////////////

    let arr_of_indexes_of_letters = parses_words_into_letters( words );
    console.groupCollapsed('parses_words_into_letters');
    console.table( words );
    console.table(arr_of_indexes_of_letters);
    console.groupEnd();
    //////////////////////////////////////////////////////////////


    let arr_match_letters_and_sequences = get_arr_of_matching_letters({
        arr_of_indexes_of_letters,
        user_word
    });
    console.groupCollapsed( 'get_arr_of_matching_letters' );
    console.table( words );
    console.table( arr_match_letters_and_sequences );
    console.groupEnd();
    
    //////////////////////////////////////////////////////////////


    let analysis = get_a_comparison_analysis({
        arr_match_letters_and_sequences,
        correct_word: words.correct_word,
        user_word: words.user_word,
    });
    console.groupCollapsed( 'get_a_comparison_analysis' );
    console.table( words );
    console.table( analysis.is_error_limit_exceeded );
    console.table( analysis.result);
    console.groupEnd();
    //////////////////////////////////////////////////////////////
    


};




// console.groupCollapsed()
// console.group('killer_of_extra_spaces');
// console.table(table);
// console.groupEnd();
