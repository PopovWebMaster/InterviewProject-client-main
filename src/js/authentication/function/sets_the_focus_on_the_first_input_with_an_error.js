// import { CLASS_NAME } from './../../config.js';
import { CLASS_NAME } from './../config.js';


const SELECTOR = `.${CLASS_NAME.INPUT_WRAP} div input`;


export const sets_the_focus_on_the_first_input_with_an_error = () => {

    // let timer = setTimeout( () => {

        let input_list = document.querySelectorAll( SELECTOR );

        for( let i = 0; i < input_list.length; i++ ){

            let input = input_list[i];
            if( input.className === CLASS_NAME.INPUT.INVALID ){
                input.focus();
                break;
            };

        };

    //     clearTimeout( timer );


    // },500 );

    

};