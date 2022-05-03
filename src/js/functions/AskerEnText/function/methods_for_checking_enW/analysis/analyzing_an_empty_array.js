
export const analyzing_an_empty_array = ( correct_word ) => {

    let result = [];
    for( let i = 0; i < correct_word.length; i++ ){
        result.push({
            user: {
                letter: '',
                absent: true,     // отсутствует
                excess: false,    // лишний
                incorrect: false, // неверный
            },
            correct: {
                letter: correct_word[i],
                errorMark: false,
            }
        });

    };

    return result;

};