import { ID_NAME, ATTR_DATA_NAME } from './../config.js';
import { isset } from './../../../functions/isset.js';

export const get_open_status = () => {

    let leftMenu = document.getElementById( ID_NAME );
    let dataStatus = leftMenu.getAttribute( ATTR_DATA_NAME );

    let result;
    
    if( isset( dataStatus ) ){
        if( dataStatus === 'true' ){
            result =  true;
        }else if( dataStatus === 'false' ){
            result =  false;
        };
    }else{
        result =  false;
    };

    return result;

};