
export const parses_words_into_letters = ( words ) => {
/*
        принимает:
        words = {
            correct_word,
            user_word
        }

        Его задача разобрать слова побуквенно. 
        Он циклом проходит по каждой букве correct_word, сравнивает её со всеми буквами user_word и 
    в случае нахождения совпадений записывает эти совпадения в виде массива
            {
                ind_letter_cw: 0,           < - индекс текущей буквы correct_word
                arr_ind_letters_uw: [2,5]   < - индексы всех совпавших букв в user_word
            },
        
        В итоге возвращаемый массив имеет такую структуру
        [
            0: {
                ind_letter_cw: 0, 
                arr_ind_letters_uw: [2,5]
            },
    	    1: false,
    		 ...
        ]
        если совпадений по символу нет, то вместо объекта записывает false
        длинна возвращаемого массива всегда равна длинне correct_word

*/

    let correct_word =  words.correct_word; 
    let user_word =     words.user_word;

    let res = [];
        
    for( let i = 0; i < correct_word.length; i++ ){
            
        let correct_letter = correct_word[i]; 
        let arr = []; 
        let pos = 0;
            
        while ( true ) {
            let found_pos = user_word.indexOf( correct_letter, pos );

            if( found_pos === -1 ){
                break;

            }else{
                arr.push( found_pos );
                pos = found_pos + 1;

            };
        };
        
        if( arr.length === 0 ){
            res[ i ] = false;

        }else{
            res[ i ] = { 
                ind_letter_cw: i, 
                arr_ind_letters_uw: arr 
            };
            
        };

    };	

    return res;	

};