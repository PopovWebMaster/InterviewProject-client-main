import {    CLASS_NAME,
            LIST_DURATION } from './../config.js';

let selector = `.${CLASS_NAME.TEXT_TRAINING_DISPLAY} .${CLASS_NAME.RESULT_LIST}`;

export const adds_a_li_in_list_with_animation = ( html_enW ) => {
    
    let li = document.querySelectorAll( `${selector} ul li` );

    li[ li.length - 1 ].innerHTML = html_enW;
    li[ li.length - 1 ].style.opacity = '1';

    li[0].style.height = '0em';

    li[1].style.opacity = '0';

    add_new_last_li();

    remove_first_li();

};


function add_new_last_li(){
    
    let ul = document.querySelector( `${selector} ul` );
    let li = document.querySelectorAll( `${selector} ul li` );

    let li_style = li[0].style.transition;

    let new_li = document.createElement('li');

    new_li.style.transition = li_style;
    new_li.style.opacity = '0';

    ul.appendChild( new_li );

};

function remove_first_li(){

    let li = document.querySelectorAll( `${selector} ul li` );

    let timer = setTimeout(() => {
        li[0].remove();
        clearTimeout( timer );
    }, LIST_DURATION );

};
