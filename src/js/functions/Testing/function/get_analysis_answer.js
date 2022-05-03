
export const get_analysis_answer = ( params ) => {

    /*
        params = {
            words:      [],
            nextIndex:  число,
            step:       1 или 2,
            answer:     строка
        };
    */

    let answer = params.answer.trim();
    let correct_answer = get_correct_answer( params );

    let result = false;

    if( answer.toLowerCase() === correct_answer.toLowerCase() ){
        result = true;
    };

    return result;

};

function get_correct_answer( params ){

    let words = params.words;
    let index = params.nextIndex;
    let step = params.step;

    let question;
    if( step === 1 ){
        question = words[index].ruW;
    }else if( step === 2 ){
        question = words[index].enW;
    };

    return question;

}
