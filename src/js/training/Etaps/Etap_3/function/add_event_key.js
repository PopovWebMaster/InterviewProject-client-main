// import { set_active_style_from_button } from './set_active_style_from_button.js';
import { is_the_device_a_computer } from './../../../../functions/is_the_device_a_computer.js';


import { handler_keydown } from './handler_keydown.js';
import { handler_keyup } from './handler_keyup.js';



export const add_event_key = ( params ) => {
    //    params пример:
    //         w: this.actionOpenAnswer,
    //         a: this.actionStart,
    //         s: this.actionRepeat,
    //         d: this.actionNotRemember,

    if( is_the_device_a_computer() ){

        const KEY_CODE = {
            w: 'KeyW',
            a: 'KeyA',
            s: 'KeyS',
            d: 'KeyD',
            enter: 'Enter',
        };

        let isGoodKeyPress = true;

        function isKeyPress(){
            return isGoodKeyPress;
        };

        function setKeyPress( new_isGoodKeyPress ){
            isGoodKeyPress = new_isGoodKeyPress;
        };

        handler_keydown.params = params;
        handler_keydown.KEY_CODE = KEY_CODE;
        handler_keydown.isKeyPress = isKeyPress;
        handler_keydown.setKeyPress = setKeyPress;

        document.addEventListener( 'keydown', handler_keydown );

        handler_keyup.params = params;
        handler_keyup.KEY_CODE = KEY_CODE;
        handler_keyup.isKeyPress = isKeyPress;
        handler_keyup.setKeyPress = setKeyPress;

        document.addEventListener( 'keyup', handler_keyup );



        // document.addEventListener( 'keydown', ( e ) => {

        //     if( isGoodKeyPress ){

        //         if( e.code === KEY_CODE.enter ){
        //             set_active_style_from_button.keyDown(0);

        //         }else if( e.code === KEY_CODE.w ){
        //             params.w.open();

        //         }else if( e.code === KEY_CODE.a ){
        //             params.a();
        //             set_active_style_from_button.keyDown(0);

        //         }else if( e.code === KEY_CODE.s ){
        //             params.s();
        //             set_active_style_from_button.keyDown(1);

        //         }else if( e.code === KEY_CODE.d ){
        //             params.d();
        //             set_active_style_from_button.keyDown(2);

        //         };

        //         isGoodKeyPress = false;

        //     };

        // });

        // document.addEventListener( 'keyup', ( e ) => {

        //     if( !isGoodKeyPress ){

        //         if( e.code === KEY_CODE.enter ){
        //             params.enter();
        //             set_active_style_from_button.keyUp(0);

        //         }else if( e.code === KEY_CODE.w ){
        //             params.w.close();

        //         }else if( e.code === KEY_CODE.a ){
        //             set_active_style_from_button.keyUp(0);

        //         }else if( e.code === KEY_CODE.s ){
        //             set_active_style_from_button.keyUp(1);

        //         }else if( e.code === KEY_CODE.d ){
        //             set_active_style_from_button.keyUp(2);

        //         };

        //         isGoodKeyPress = true;

        //     };

        // });

    };

};

