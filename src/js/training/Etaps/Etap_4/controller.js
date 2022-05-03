import { controller as inputController } from './InputWithButton/controller.js'
import { controller as displayController } from './TextTrainingDisplay/controller.js';

import { SHOW_DISPLAY_DURATION } from './config.js';

export const controller = {

    setStateTraining(){
        inputController.setTrainingState({
            duration: SHOW_DISPLAY_DURATION,
            dulay: SHOW_DISPLAY_DURATION
        });

        displayController.setStateTraining({
            duration: SHOW_DISPLAY_DURATION,
            dulay: 0
        });
    },

    setStateFinish(){
        inputController.setStateStart({
            duration: SHOW_DISPLAY_DURATION,
            dulay: 0
        });
        displayController.setStateFinish({
            duration: SHOW_DISPLAY_DURATION,
            dulay: 0
        });

    },

    // addInResultList( html ){
    //     console.log( html );

    // }






};