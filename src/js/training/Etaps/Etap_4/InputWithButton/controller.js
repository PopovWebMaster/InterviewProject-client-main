import { set_initial_style } from './function/set_initial_style.js';
import { open_input } from './function/open_input.js';
import { open_button } from './function/open_button.js';
import { close_input } from './function/close_input.js';
import { close_button } from './function/close_button.js';
import { sets_the_input_to_focus } from './function/sets_the_input_to_focus.js';
import { close_error_massage_without_animation } from './function/close_error_massage_without_animation.js';

export const controller = {
    setTrainingState( time ){

        open_input({
            duration: time.duration,
            dulay: time.duration
        });

        open_button({
            duration: time.duration,
            dulay: 0
        });

        let time_ms = time.duration + time.duration + (time.duration/2);
        setTimeout( () => {
           sets_the_input_to_focus(); 
        }, time_ms );
        
    },

    setStateStart( time ){

        close_error_massage_without_animation();

        close_input({
            duration: time.duration,
            dulay: 0
        });

        close_button({
            duration: time.duration,
            dulay: 0
        });

    },

    setInitialStyle(){
        set_initial_style();
    },

    setFocus(){
        sets_the_input_to_focus();
    },



};