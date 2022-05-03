import { get_open_status } from './../../functions/get_open_status.js';
import { ID_NAME, ID_MENU_LOGO } from './../../config.js';
import { close_menu } from './../../functions/close_menu.js';


export const event_handler_body = ( e ) => {
    if( isClickExecutable( e ) ){
        close_menu();
    };

};


function isClickExecutable( e ){ // проверяет, является ли клик исполняемым
    // если целевой элемент клика не подлежит исполнению то возвращает false, иначе - true
    let result = true;

    if( !get_open_status() ){ // меню закрыто
        result = false;

    }else{

        let target = e.target;

        if( target.closest( `#${ID_NAME}`) ){ // клик в любом месте поля меню
            result = false;

        }else{

            if( target.id === ID_MENU_LOGO ){
                result = false;
            }else{
                /*
                    Дополнительные правила проверки писать здесь            
                */
            };
        };
    };

    return result;

};