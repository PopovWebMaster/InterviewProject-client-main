
export const calculate_the_number_of_light_stars = ( params ) => {

    let sum_words =     params.sum_words;
    let sum_stars =     params.sum_stars;
    let user_result =   params.user_result;

    return Math.floor( user_result/(sum_words/sum_stars) );

};