import  { ETAP_2 } from './../../../settings.js';

const enW = ETAP_2.CLASS_NAME.li_show_enW;

const getList = () => {
    return document.querySelectorAll(`ul.${ETAP_2.NAMES_RADIO_BUTTONS.ru_en} li`);
};

export const listRu = {
    openEnW( index ){
        let li = getList();

        for( let i = 0; i < li.length; i++){
            if( i === index ){ 
                li[i].classList.add( enW );
            }else{
                li[i].classList.remove( enW );
            };
        };
    },

    closeEnW( index ){
        let li = getList();
        li[index].classList.remove( enW );
    },
};