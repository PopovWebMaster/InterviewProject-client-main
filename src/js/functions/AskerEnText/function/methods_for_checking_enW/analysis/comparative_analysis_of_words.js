import { isset } from './../../../../isset.js';

export const comparative_analysis_of_words = ( params ) => {
    //     анализиреет два слова и возвращает массив такого вида:
    // [
    //     {
    //         correct: {letter: "a", errorMark: true},
    //         user: {letter: "u", absent: false, excess: false, incorrect: true}
    //     },
    //     {
    //         correct: {letter: "s", errorMark: false},
    //         user: {letter: "s", absent: false, excess: false, incorrect: false}
    //     }
    //     ...
    // ]

    //     где:
    //     errorMark: true/false   означает подчёркивать/не подчёркивать
    //     absent: true            буква отсутствует
    //     excess: true            буква лишняя
    //     incorrect: true         буква записана неверно

    let arr_match_letters_and_sequences = params.arr_match_letters_and_sequences;
    let correct =  params.correct_word;
    let user =  params.user_word;

    let margeArr = merging_a_user_and_an_correct({
        correct,
        user,
        arr_match_letters_and_sequences,
    });

    let resultAnalusis = [];
    for( let i = 0; i < margeArr.length; i++ ){

        let letterCorrect = margeArr[i].correct;
        let letterUser = margeArr[i].user;

        if( letterCorrect !== '' && letterUser !== '' ){
            if( letterCorrect === letterUser ){ // всё правильно
                resultAnalusis.push({
                    user: {
                        letter: letterUser,
                        absent: false,     // отсутствует
                        excess: false,    // лишний
                        incorrect: false, // неверный
                    },
                    correct: {
                        letter: letterCorrect,
                        errorMark: false
                    }
                });
            }else{ // неверно указана буква
                resultAnalusis.push({
                    user: {
                        letter: letterUser,
                        absent: false,     // отсутствует
                        excess: false,    // лишний
                        incorrect: true, // неверный
                    },
                    correct: {
                        letter: letterCorrect,
                        errorMark: true
                    }
                });
            };

        }else if( letterCorrect === '' && letterUser !== '' ){ // лишняя буква
            resultAnalusis.push({
                user: {
                    letter: letterUser,
                    absent: false,     // отсутствует
                    excess: true,    // лишний
                    incorrect: false, // неверный
                },
                correct: {
                    letter: letterCorrect,
                    errorMark: false
                }
            });
        }else if( letterCorrect !== '' && letterUser === '' ){
            resultAnalusis.push({
                user: {
                    letter: letterUser,
                    absent: true,     // отсутствует
                    excess: false,    // лишний
                    incorrect: false, // неверный
                },
                correct: {
                    letter: letterCorrect,
                    errorMark: true
                }
            });
        };
    };
    
    return resultAnalusis;

};


function merging_a_user_and_an_correct( params ){

    let correct = params.correct;
    let user = params.user;
    let arr_match_letters_and_sequences = params.arr_match_letters_and_sequences;

    let firstMatch = arr_match_letters_and_sequences[0];

    let firstIndex_current = firstMatch.ind_letter_cw;
    let firstIndex_user = firstMatch.min_ind_letter_uw;

    let margeCurrent =  [];
    let margeUser =     [];

    // выравниваю стартовые позиции
    if( firstIndex_current > firstIndex_user ){
        let offset_length = firstIndex_current - firstIndex_user;

        for( let i = 0; i < firstIndex_current; i++ ){
            margeCurrent.push(correct[i]);
        };

        for( let i = 0; i < firstIndex_user; i++ ){
            margeUser.push(user[i]);
        };

        for( let i = 0; i < offset_length; i++ ){
            margeUser.unshift('');
        };

    }else if( firstIndex_current < firstIndex_user ){
        let offset_length = firstIndex_user - firstIndex_current;

        for( let i = 0; i < firstIndex_current; i++ ){
            margeCurrent.push(correct[i]);
        };

        for( let i = 0; i < firstIndex_user; i++ ){
            margeUser.push(user[i]);
        };

        for( let i = 0; i < offset_length; i++ ){
            margeCurrent.unshift('');
        };
        
    }else if( firstIndex_current === firstIndex_user ){
        let offset_length = (firstIndex_user + firstIndex_current)/2;

        for( let i = 0; i < offset_length; i++ ){
            margeUser.push( user[i] );
            margeCurrent.push( correct[i] );
        };
    };

    // точки соприкосновения 
    let pointers = [];
    for( let item of arr_match_letters_and_sequences ){
        pointers.push({
            current: item.ind_letter_cw,
            user: item.min_ind_letter_uw
        });
    };

    // заполняет массивы
    for( let i = 0; i < pointers.length; i++ ){

        if( isset( pointers[ i + 1 ] ) ){ // не последний

            let between_points_current = pointers[ i + 1 ].current - pointers[ i ].current;
            let between_points_user =    pointers[ i + 1 ].user - pointers[ i ].user;

            for( let a = 0; a < between_points_current; a++ ){
                margeCurrent.push( correct[ pointers[i].current + a ] );
            };
            for( let a = 0; a < between_points_user; a++ ){
                margeUser.push( user[ pointers[i].user + a ] );
            };

            if( between_points_current < between_points_user ){
                let rest = between_points_user - between_points_current;
                for( let a = 0; a < rest; a++ ){
                    margeCurrent.push( '' );
                };

            }else if( between_points_current > between_points_user ){
                let rest = between_points_current - between_points_user;
                for( let a = 0; a < rest; a++ ){
                    margeUser.push( '' );
                };

            };

        }else{ // последний

            let rest_letters_current =  correct.length - pointers[i].current;
            let rest_letters_user =     user.length - pointers[i].user;

            for( let a = 0; a < rest_letters_current; a++ ){
                margeCurrent.push( correct[ pointers[i].current + a ] );
            };
            for( let a = 0; a < rest_letters_user; a++ ){
                margeUser.push( user[ pointers[i].user + a ] );
            };

            if( rest_letters_current < rest_letters_user ){
                let rest = rest_letters_user - rest_letters_current;

                for( let a = 0; a < rest; a++ ){
                    margeCurrent.push('');
                };

            }else if( rest_letters_current > rest_letters_user ){
                let rest = rest_letters_current - rest_letters_user;
                for( let a = 0; a < rest; a++ ){
                    margeUser.push('');
                };

            };

        };
    };

    let result = [];
    
    for( let i = 0; i < margeCurrent.length; i++ ){ // без разницы margeCurrent.length или margeUser.length
        result.push({
            correct: margeCurrent[i],
            user: margeUser[i],
        });
    };

    return result;
};

