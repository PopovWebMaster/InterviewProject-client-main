import { set_active_style_from_button } from './set_active_style_from_button.js';

export const handler_keyup = ( e ) => {

    let params = handler_keyup.params;
    let KEY_CODE = handler_keyup.KEY_CODE;
    let isGoodKeyPress = handler_keyup.isKeyPress();

    if( !isGoodKeyPress ){

        if( e.code === KEY_CODE.enter ){
            params.enter();
            set_active_style_from_button.keyUp(0);

        }else if( e.code === KEY_CODE.w ){
            params.w.close();

        }else if( e.code === KEY_CODE.a ){
            set_active_style_from_button.keyUp(0);

        }else if( e.code === KEY_CODE.s ){
            set_active_style_from_button.keyUp(1);

        }else if( e.code === KEY_CODE.d ){
            set_active_style_from_button.keyUp(2);

        };

        handler_keyup.setKeyPress( true );

    };

};