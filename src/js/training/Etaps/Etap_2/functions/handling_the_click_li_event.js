import { ETAP_2 } from './../../../settings.js';
import { AudioPlay } from './../../../../functions/AudioPlay.js';
import { listEn } from './listEn.js';
import { listRu } from './listRu.js';


export const handling_the_click_li_event = ( params ) => {
    // params.active_radio_button;
    // params.spanClassName;
    // params.button_sound_state;
    // params.href_for_audio_file;
    // params.enW;
    // params.index;

    let index = params.index;
    
    let className_enW = ETAP_2.CLASS_NAME.span_enW;
    let className_ruW = ETAP_2.CLASS_NAME.span_ruW;

    let active_radio_button = params.active_radio_button;
    let spanClassName = params.spanClassName;

    const audio_playback = () => {
        if( params.button_sound_state ){
            let enW =   params.enW;
            let href =  params.href_for_audio_file;
            AudioPlay( enW, href );
        };
    };

    const click_list = () => {
        if( spanClassName ===  className_enW ){
            audio_playback();
        }else if( spanClassName === className_ruW ){
            return;
        };
    };

    const click_en_ru = () => {
        if( spanClassName === className_enW ){
            audio_playback();
            listEn.openRuW( index );
        }else if( spanClassName === className_ruW ){
            listEn.closeRuW( index );
        };
    };

    const click_ru_en = () => {
        if( spanClassName === className_enW ){
            audio_playback();
            listRu.closeEnW( index );
        }else if( spanClassName === className_ruW ){
            listRu.openEnW( index );
        };
    };

    if( active_radio_button === ETAP_2.NAMES_RADIO_BUTTONS.list ){
        click_list();

    }else if( active_radio_button === ETAP_2.NAMES_RADIO_BUTTONS.en_ru ){
        click_en_ru();

    }else if( active_radio_button === ETAP_2.NAMES_RADIO_BUTTONS.ru_en ){
        click_ru_en();

    };

};




