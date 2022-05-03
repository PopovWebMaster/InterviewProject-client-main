import { set_initial_style }                        from './function/set_initial_style.js';
import { open_input }                               from './function/open_input.js';
import { open_button }                              from './function/open_button.js';
import { close_input }                              from './function/close_input.js';
import { close_button }                             from './function/close_button.js';
import { sets_the_input_to_focus }                  from './function/sets_the_input_to_focus.js';
import { to_remove_the_input_focus }                  from './function/to_remove_the_input_focus.js';
import { close_error_massage_without_animation }    from './function/close_error_massage_without_animation.js';
import { set_hitlist_style_transition }             from './function/set_hitlist_style_transition.js';

import { SHOW_DISPLAY_DURATION }                    from './../config.js';

export const controller = {
    setTestedState(){
        let duration = SHOW_DISPLAY_DURATION;

        open_input({
            duration: duration,
            dulay: duration
        });

        open_button({
            duration: duration,
            dulay: 0
        });

        let time_ms = duration + duration + (duration/2);
        setTimeout( () => {
           sets_the_input_to_focus(); 
        }, time_ms );
        
    },

    setStateStart(){
        let duration = SHOW_DISPLAY_DURATION;

        close_error_massage_without_animation();

        close_input({
            duration: duration,
            dulay: 0
        });

        close_button({
            duration: duration,
            dulay: 0
        });

    },

    setInitialStyle(){
        let duration = SHOW_DISPLAY_DURATION;

        set_initial_style();

        set_hitlist_style_transition({
            duration: duration,
            dulay: duration
        })

    },

    setFocus(){
        sets_the_input_to_focus();
    },

    removeFocus(){
        to_remove_the_input_focus();
    },



};