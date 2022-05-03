import { handler_keydown } from './handler_keydown.js';
import { handler_keyup } from './handler_keyup.js';

export const remove_event_key = () => {

    document.removeEventListener('keydown', handler_keydown );
    document.removeEventListener('keyup', handler_keyup );

};