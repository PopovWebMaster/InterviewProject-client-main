import { ETAP_NAME, ETAP_1 } from './../../../../settings.js';

export const show_ru = ( params ) => {
    // params.index

    let ruW = document.querySelectorAll(`.words .${ETAP_NAME[1]} li span.${ETAP_1.CLASS_NAME.span_ruW}`);
    let index = params.index;

    for( let i = 0; i < ruW.length; i++ ){
        if( i === index ){

            let span_ruW_height = ruW[i].offsetHeight;
            let li_padding_top = Number( getComputedStyle(ruW[i].parentElement).paddingTop.slice( 0, -2 ) );
            let span_ruW_border_top = Number( getComputedStyle(ruW[i]).borderTopWidth.slice( 0, -2 ) );
            let span_ruW_border_bottom = Number( getComputedStyle(ruW[i]).borderBottomWidth.slice( 0, -2 ) );

            let top = -1*( span_ruW_height + li_padding_top + span_ruW_border_top + span_ruW_border_bottom + 2 );
            let left = (ruW[i].parentElement.offsetWidth - ruW[i].offsetWidth)/2;

            ruW[i].style.opacity = 1;
            ruW[i].style.top = top+'px';
            ruW[i].style.left = left+'px';

        }else{
            ruW[i].style.opacity = 0;
            ruW[i].style.top = 0;
        };
    };

};
