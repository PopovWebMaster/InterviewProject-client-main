import { get_total_sum_stars } from './get_total_sum_stars.js';
import { calculate_the_number_of_light_stars } from './calculate_the_number_of_light_stars.js';
import { CLASS_NAME } from './../config.js';

export const update = ( params ) => {

    let sum_words =   params.sum_words;
    let user_result = params.user_result;

    let total_sum_star = get_total_sum_stars();
    let number_of_light_stars = calculate_the_number_of_light_stars({
        sum_words,
        user_result,
        sum_stars: total_sum_star,
    });

    let selector_li = `ul.${CLASS_NAME.SCALE_OF_STARS} li`;

    let li = document.querySelectorAll( selector_li );

    for( let i = 0; i < li.length; i++ ){
        li[i].classList.remove( CLASS_NAME.LIGHT );
        li[i].children[0].classList.remove( CLASS_NAME.ICON_STAR );
        li[i].children[0].classList.remove( CLASS_NAME.ICON_STAR_EMPTY );
    };

    for( let i = 0; i < li.length; i++ ){
        if( i < number_of_light_stars ){
            li[i].classList.add( CLASS_NAME.LIGHT );
            li[i].children[0].classList.add( CLASS_NAME.ICON_STAR_EMPTY );
        }else{
            li[i].children[0].classList.add( CLASS_NAME.ICON_STAR );
        };
    };

};