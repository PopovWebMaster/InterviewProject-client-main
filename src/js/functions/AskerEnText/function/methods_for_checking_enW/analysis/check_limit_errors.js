

export const check_limit_errors = ( result ) => {
    /*
        result = [
            {
                correct: {letter: "b", errorMark: false}
                user: {letter: "b", absent: false, excess: false, incorrect: false}
            },
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
            {user: {…}, correct: {…}},
        ];
    */

    let is_error_limit_exceeded;
    let lendthResult = result.length;

    if( isEmptyString( result ) ){ // Проверяет не является ли слово пользователя пустой строкой
        is_error_limit_exceeded = true;

    }else{

        let countError = getCountErrors( result );
        let correctWordLendth = getCorrectWordLendth( result );
        let limitProcent;

        if( correctWordLendth < 7 ){
            limitProcent = 50;
        }else if( correctWordLendth < 10 ){
            limitProcent = 41;
        }else if( correctWordLendth < 15 ){
            limitProcent = 38;
        }else if( correctWordLendth < 20 ){
            limitProcent = 30;
        }else{
            limitProcent = 25;
        };

        let procentError = (countError * 100)/lendthResult;

        if( procentError > limitProcent ){
            is_error_limit_exceeded = true;

        }else{
            is_error_limit_exceeded = false;

        };

    };

    return is_error_limit_exceeded;

};


function isEmptyString( result ){
    let lendthResult = result.length;
    let userWordIsEmptyString = true;

    for( let i = 0; i < lendthResult; i++ ){
        let char = result[i].user.letter;
        if( char !== '' ){
            userWordIsEmptyString = false;
            break;
        };
    };
    return userWordIsEmptyString;
};

function getCountErrors( result ){

    let countError = 0;
    let lendthResult = result.length;

    for( let i = 0; i < lendthResult; i++ ){

        let absent = result[i].user.absent;
        let excess = result[i].user.excess;
        let incorrect = result[i].user.incorrect;

        let isError = absent || excess || incorrect;

        if( isError ){
            countError++;
        };
    };

    return countError;
};

function getCorrectWordLendth( result ){
    let correctWord = '';

    result.forEach( ( item ) => {
        correctWord = correctWord + item.correct.letter;
    });

    return correctWord.length;

};



