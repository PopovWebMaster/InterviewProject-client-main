import { ID_NAME, ATTR_DATA_NAME } from './../config.js';
import { isset } from './../../../functions/isset.js';

export const set_open_status = ( flag = null ) => {
    /*
        использование set_open_status() без аргумента меняет open_status на обратный true/false
        с аргументом - устанавливает open_status в состояние flag
    */

    let leftMenu = document.getElementById( ID_NAME );
    let dataStatus = leftMenu.getAttribute( ATTR_DATA_NAME );

    if( isset( flag ) ){
        leftMenu.setAttribute( ATTR_DATA_NAME, flag );

    }else{
        if( isset( dataStatus ) ){
            if( dataStatus === 'true' ){
                leftMenu.setAttribute( ATTR_DATA_NAME, false );
            }else if( dataStatus === 'false' ){
                leftMenu.setAttribute( ATTR_DATA_NAME, true );
            };

        }else{
            leftMenu.setAttribute( ATTR_DATA_NAME, false );
            
        };
    };
    
};