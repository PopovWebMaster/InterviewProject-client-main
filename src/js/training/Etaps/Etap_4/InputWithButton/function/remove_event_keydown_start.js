import { event_keydown_start } from './event_keydown_start.js';

export const remove_event_keydown_start = () => {

    document.removeEventListener( 'keydown', event_keydown_start );

};