import { CLASS_NAME } from './../config.js';

export const close_listResult = ( time ) => {

    let duration = time.duration;
    let delay = time.delay;

    let listResult = document.querySelector( `.${CLASS_NAME.RESULT_LIST}` );

    let transitionOpacity = `opacity ${duration+100}ms ease-out ${delay}ms`;
    listResult.style.transition = `${transitionOpacity}`;
    listResult.style.opacity = '0';

    let timer = setTimeout( () => {
        listResult.style.transition = ``;

        let li = document.querySelectorAll( `.${CLASS_NAME.RESULT_LIST} ul li` );
        for( let i = 0; i < li.length; i++ ){
            li[i].innerHTML = '';
        };

        clearTimeout( timer );
    },duration );

};