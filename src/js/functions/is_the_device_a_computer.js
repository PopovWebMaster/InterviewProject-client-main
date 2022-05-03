import { get_the_device_type } from './get_the_device_type.js';

export const is_the_device_a_computer = () => {

    let result = false;

    if( get_the_device_type() === 'computer' ){
        result = true;
    };

    return result;

};

