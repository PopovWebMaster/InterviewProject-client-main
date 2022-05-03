import { event_keydown_start } from './event_keydown_start.js';

export const add_event_keydown_start = ( action ) => {

    event_keydown_start.action = action;
    document.addEventListener( 'keydown', event_keydown_start );

};