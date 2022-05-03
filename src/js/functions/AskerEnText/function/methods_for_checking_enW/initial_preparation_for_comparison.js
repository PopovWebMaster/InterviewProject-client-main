import { killer_of_extra_spaces } from './killer_of_extra_spaces.js';

export const initial_preparation_for_comparison = ( str ) => {
    let new_str = killer_of_extra_spaces( str );
    new_str = new_str.toLowerCase();
    return new_str;
};