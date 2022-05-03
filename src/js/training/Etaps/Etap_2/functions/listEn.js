import  { ETAP_2 } from './../../../settings.js';

export const listEn = {
    getList(){
        return document.querySelectorAll(`ul.${ETAP_2.NAMES_RADIO_BUTTONS.en_ru} li`);
    },
    openRuW( index ){
        let li = this.getList();
        let ruW = ETAP_2.CLASS_NAME.li_show_ruW;

        for( let i = 0; i < li.length; i++){
            if( i === index ){ 
                li[i].classList.add( ruW );
            }else{
                li[i].classList.remove( ruW );
            };
        };
    },

    closeRuW( index ){
        let li = this.getList();
        let ruW = ETAP_2.CLASS_NAME.li_show_ruW;

        li[index].classList.remove( ruW );
    },
};
















