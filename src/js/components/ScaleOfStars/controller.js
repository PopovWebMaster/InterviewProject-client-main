import { update } from './function/update.js';
import { calculate_the_number_of_light_stars } from './function/calculate_the_number_of_light_stars.js';

export const controller = {
    update( params ){

        let sum_words =   params.sum_words;
        let user_result = params.user_result;

        update({
            sum_words,
            user_result,
        });
    },

    calculate_the_number_of_light_stars( params ){

        let sum_words =     params.sum_words;
        let sum_stars =     params.sum_stars;
        let user_result =   params.user_result;

        let result = calculate_the_number_of_light_stars({
            sum_words,
            sum_stars,
            user_result
        });

        return result;
    },
};