import { open_display } from './function/open_display.js';
import { close_listResult } from './function/close_listResult.js';

export const controller = {
    setStateTraining( time ){
        open_display({
            duration: time.duration,
            delay: time.dulay,
        });
    },

    setStateFinish( time ){
        close_listResult({
            duration: time.duration,
            delay: time.dulay,
        });
    }




};