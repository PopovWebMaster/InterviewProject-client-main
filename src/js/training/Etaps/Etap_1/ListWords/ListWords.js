import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './ListWords.scss';

import { AudioPlay } from './../../../../functions/AudioPlay.js';
import {    CLASS_NAME_WORDS, 
            ETAP_NAME, 
            ETAP_1 } from './../../../settings.js';

import { show_ru } from './functions/show_ru.js';

export default class ListWords extends Component{

    constructor(props){
        super(props);
        //this.state = { };

        this.click_li = this.click_li.bind(this);
        this.createListWords = this.createListWords.bind(this);
        this.show_ruW = this.show_ruW.bind(this);
        this.audioPlay = this.audioPlay.bind(this);

    }

    audioPlay( index ){
        if( this.props.button_sound_state ){
            let enW = this.props.words[index].enW;
            AudioPlay( enW, this.props.href_for_audio_file )
        };
    }

    show_ruW( index ){
        if( this.props.button_ru_state ){
            show_ru({
                index: index,
            });
        };  
    }

    click_li( index ){
        this.show_ruW(index);
        this.audioPlay(index);

    }

    createListWords( arr ){

        let li = arr.map(( item, index ) => {
            return  (
                <li key = { index }
                    onClick = { () => {
                        this.click_li(index);
                    }}
                    onMouseLeave = { this.show_ruW }
                >
                    <span className = { ETAP_1.CLASS_NAME.span_enW }>{ item.enW }</span>
                    <span className = { ETAP_1.CLASS_NAME.span_ruW }>{ item.ruW }</span>
                </li>
            );
        });
        return li;

    }

    render(){
		return (
            <div className = { CLASS_NAME_WORDS }> 
                <ul className = { `${ETAP_NAME[1]}`} >
                    { this.createListWords( this.props.words ) }
                </ul>
            </div>
        )
    }

};
