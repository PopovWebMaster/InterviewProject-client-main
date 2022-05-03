import { INPUT_NAME } from './../../../config.js';

export const get_all_input_names = () => {
    let res = {};
    for( let key in INPUT_NAME ){
        let name = INPUT_NAME[key];
        res[name] = true;
    };
    return res;

};