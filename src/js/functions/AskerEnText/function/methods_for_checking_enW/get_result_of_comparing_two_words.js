import { parses_words_into_letters } from './parses_words_into_letters.js';
import { get_arr_of_matching_letters } from './get_arr_of_matching_letters.js';
import { get_a_comparison_analysis } from './analysis/get_a_comparison_analysis.js';
import { collect_html_from_analysis } from './collect_html_from_analysis.js';
 
export const get_result_of_comparing_two_words = ( words ) => {

    let correct_word =  words.correct_word; 
    let user_word =     words.user_word;

    let arr_of_indexes_of_letters = parses_words_into_letters({
        correct_word,
        user_word,
    });

    let arr_match_letters_and_sequences = get_arr_of_matching_letters({
        arr_of_indexes_of_letters,
        user_word
    });

    let analysis = get_a_comparison_analysis({
        arr_match_letters_and_sequences,
        correct_word,
        user_word,
    });

    let html_enW = collect_html_from_analysis({
        analysis,
        correct_word,
        user_word,
    });

    return html_enW;

};

