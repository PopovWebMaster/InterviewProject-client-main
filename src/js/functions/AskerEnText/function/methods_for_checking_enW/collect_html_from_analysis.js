import  {
    excess_letter,
    absent_letter,
    incorrect_letter,
    true_letter,
    correct_letter_with_error,
} from './get_error_str.js';

export const collect_html_from_analysis = ( params ) => {

    let analysis =     params.analysis;
    let correct_word = params.correct_word;
    let user_word =    params.user_word;

    // analisys = {
    //     is_error_limit_exceeded: rtue/false,
    //     result: [
    //         {
    //             user: {
    //                 letter: '',
    //                 absent: true,     // отсутствует
    //                 excess: false,    // лишний
    //                 incorrect: false, // неверный
    //             },
    //             correct: {
    //                 letter: correct_word[i],
    //                 errorMark: false,
    //             }
    //         },
    //         ...
    //     ]
    // };

    let html_enW;

    if( analysis.is_error_limit_exceeded ){
        html_enW = `${ excess_letter( user_word ) } (${correct_word})`;

    }else{
        let strUserWord    = '';
        let strCorrectWord = '';

        analysis.result.forEach( ( item ) => {
            let letterCorrect = item.correct.letter;
            let letterUser = item.user.letter;

            if( item.user.absent ){
                strUserWord = strUserWord + absent_letter(); 

            }else if( item.user.excess ){
                strUserWord = strUserWord + excess_letter( letterUser );

            }else if( item.user.incorrect ){
                strUserWord = strUserWord + incorrect_letter( letterUser );

            }else{
                strUserWord = strUserWord + true_letter( letterUser );
            };

            if( item.correct.errorMark ){
                strCorrectWord = strCorrectWord + correct_letter_with_error( letterCorrect );
            }else{
                strCorrectWord = strCorrectWord + true_letter( letterCorrect);
            }; 
        });

        html_enW = `${strUserWord} (${strCorrectWord})`;

    };

    return html_enW;

};