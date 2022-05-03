import { get_height_requestedWord_em } from './get_height_requestedWord_em.js';
import { get_height_listResult_em } from './get_height_listResult_em.js';

export const get_height_of_the_display_in_em = () => {

    let height_requestedWord = get_height_requestedWord_em();
    let height_listResult = get_height_listResult_em();

    return height_requestedWord + height_listResult;
};