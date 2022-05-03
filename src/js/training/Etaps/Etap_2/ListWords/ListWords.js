import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './ListWords.scss';

import {    CLASS_NAME_WORDS,
            ETAP_NAME, 
            ETAP_2 } from './../../../settings.js';

import { handling_the_click_li_event } from './../functions/handling_the_click_li_event.js';

export default class ListWords extends Component{

    constructor(props){
        super(props);
        //this.state = { };

        this.createListWords = this.createListWords.bind(this);
        this.click_li = this.click_li.bind(this);
        this.getActualClassName = this.getActualClassName.bind(this);
        this.initial_list_preparation = this.initial_list_preparation.bind(this);

    }

    initial_list_preparation( ){
        let list = document.querySelectorAll('.words ul.' + ETAP_NAME[2] + ' li');
        if( list ){
            for( let i = 0; i < list.length; i++ ){
                list[i].classList.remove( ETAP_2.CLASS_NAME.li_show_ruW );
                list[i].classList.remove( ETAP_2.CLASS_NAME.li_show_enW );
            };
        };
    }

    click_li( e, index ){

        handling_the_click_li_event({
            active_radio_button:    this.props.active_radio_button,
            spanClassName:          e.target.className,
            button_sound_state:     this.props.button_sound_state,
            href_for_audio_file:    this.props.href_for_audio_file,
            enW:                    this.props.words[index].enW,
            index: index

        });

    }

    getActualClassName( active_radio_button ){
        return `${ETAP_NAME[2]} ${ ETAP_2.NAMES_RADIO_BUTTONS[ active_radio_button ] }`;
    }

    createListWords( words ){

        this.initial_list_preparation();

        let li = words.map( ( item, index ) => {
            return (
                <li key = { index }
                        onClick = { ( e ) => {
                           this.click_li( e, index );
                        }}
                    >
                    <span   className = { ETAP_2.CLASS_NAME.span_enW }>
                        { item.enW }
                    </span>
                    <span className = { ETAP_2.CLASS_NAME.span_ruW }>
                        { item.ruW }
                    </span>
                </li>
            );
        });
        return li;
    }

    render(){
		return (
            <div className = { CLASS_NAME_WORDS }> 
                <ul className = { this.getActualClassName( this.props.active_radio_button ) }>
                    { this.createListWords( this.props.words ) }
                </ul>
            </div>
        )
    }

};




