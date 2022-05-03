import { controller as inputController }        from './InputWithButton/controller.js'
import { set_initial_styles }                   from './function/set_initial_styles.js';
import { CLASS_NAME }                           from './config.js';
import { get_height_of_display_curtain }        from './function/get_height_of_display_curtain.js';

export const controller = {

    setTestedState(){
        inputController.setTestedState();

        let height = get_height_of_display_curtain();
        let elem = document.querySelector( `.${CLASS_NAME.DISPLAY_CURTAIN}` );
        elem.style.height = `${height}em`;
    },

    setRestartState(){
        inputController.setStateStart();
    },

    setStateFinish(){
        inputController.setStateStart();
    },

    set_initial_styles(){
        set_initial_styles();
    },

};