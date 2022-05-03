
export const get_arr_of_matching_letters = ( params ) => {
    // создаёт массив о всеми совпадающими буквами по индесам

    let arrLeters = params.arr_of_indexes_of_letters;
    let user_word = params.user_word;

    let result;

    result = remove_false( arrLeters );
    result = filters_out_extra_user_letters( result );
    result = filters_out_impossible_max_indexes( result, user_word );

    // выстраивает в порядке по возростанию
    for( let i = 0; i < result.length; i++ ){
        
        if( i < ( result.length - 1 ) ){	

            let min_ind_uw = result[ i ].min_ind_letter_uw;
            let next_min_ind_uw = result[ i + 1 ].min_ind_letter_uw;

            if( min_ind_uw >= next_min_ind_uw ){
                
                let ind_cw_next = result[ i + 1 ].ind_letter_cw;
                let arr_ind_uw_next = arrLeters[ ind_cw_next ].arr_ind_letters_uw;
                    
                for( let j = 0; j < arr_ind_uw_next.length; j++ ){
                    if( min_ind_uw < arr_ind_uw_next[ j ] ){
                        result[ i + 1 ].min_ind_letter_uw = arr_ind_uw_next[ j ];	
                        arrLeters[ ind_cw_next ].arr_ind_letters_uw.splice( 0, ( j + 1 ) );
                        break;
                    };	
                };
            };

            if( min_ind_uw > result[ i + 1 ].min_ind_letter_uw ){
                result.splice( ( i + 1 ), 1 );
                i--;
            };
        };
    };

    return result;
}; 


function remove_false( arr ){
    // есди в массиве вместо объекта false, то он их удадяет
    let res = [];

    for( let i = 0; i < arr.length; i++){
        if( arr[ i ] !== false ){
            res.push( arr[i] );
        };
    };

    return res;

}

function filters_out_extra_user_letters( arr ){
    // берёт из arr_ind_letters_uw минимальное значение и возвращает его вместо массива arr_ind_letters_uw

    let res = [];
    for( let i = 0; i < arr.length; i++){

        let ind_letter_cw       = arr[ i ].ind_letter_cw;
        let arr_ind_letters_uw  = arr[ i ].arr_ind_letters_uw;
        let min_ind_letter_uw   = Math.min.apply( Math, arr_ind_letters_uw )

        res.push(
            {	
                ind_letter_cw, 
                min_ind_letter_uw,
            }
        );

    };

    return res;
}

function filters_out_impossible_max_indexes( arr, user_word ){
    // отсеивает совсем невозможные максимальные индексы user_word

    let res = [];
    let condition = false;
    
    for( let i = 0; i < arr.length; i++ ){
        let min_ind_letter_uw = arr[ i ].min_ind_letter_uw
        condition = ( min_ind_letter_uw + ( arr.length - 1 - i ) ) < ( user_word.length + 1 );
        
        if( condition ){
            res.push( arr[ i ] );
        };
    };

    return res;
}







