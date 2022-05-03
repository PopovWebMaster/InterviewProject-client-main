import { set_active_style_from_button } from './set_active_style_from_button.js';

export const handler_keydown = ( e ) => { 

    let params = handler_keydown.params;
    let KEY_CODE = handler_keydown.KEY_CODE;
    let isGoodKeyPress = handler_keydown.isKeyPress();

    if( isGoodKeyPress ){

        if( e.code === KEY_CODE.enter ){
            set_active_style_from_button.keyDown(0);

        }else if( e.code === KEY_CODE.w ){
            params.w.open();

        }else if( e.code === KEY_CODE.a ){
            params.a();
            set_active_style_from_button.keyDown(0);

        }else if( e.code === KEY_CODE.s ){
            params.s();
            set_active_style_from_button.keyDown(1);

        }else if( e.code === KEY_CODE.d ){
            params.d();
            set_active_style_from_button.keyDown(2);

        };

        handler_keydown.setKeyPress( false );

    };

};