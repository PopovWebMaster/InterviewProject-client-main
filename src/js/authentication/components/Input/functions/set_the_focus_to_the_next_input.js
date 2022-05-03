import { CLASS_NAME } from './../../../config.js';

const SELECTOR = `.${CLASS_NAME.INPUT_WRAP} div input`;

export const set_the_focus_to_the_next_input = ( e ) => {

    let id_name = e.currentTarget.id;
    let index = to_get_the_index_by_id_name( id_name );

    if( index !== undefined ){

        let input_list = document.querySelectorAll( SELECTOR );
        let next_index = index + 1;

        input_list[ index ].blur();

        if( input_list.length > next_index ){
            input_list[ next_index ].focus();
        };

    }else{
        console.error('Ошибка в методе "set_the_focus_to_the_next_input()" при попытке установить focus на следующий input');
    };

};


function to_get_the_index_by_id_name( id_name ){
    let input_list = document.querySelectorAll( SELECTOR );
    let index = undefined;

    for( let i = 0; i < input_list.length; i++ ){
        let input = input_list[i];
        if( input.id === id_name ){
            index = i;
            break;
        };
    };

    return index;


};



