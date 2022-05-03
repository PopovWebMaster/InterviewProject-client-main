import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Etap_2.scss';

import { show_workspace } from './../../functions/show_workspace.js';
import {    ID_NAME_OF_WORKSPACE,
            ETAP_NAME,
            ETAP_2 } from './../../settings.js';


import ButtonsPanel from './ButtonsPanel/ButtonsPanel.js';
import SelectingPartButton from './../components/buttons/SelectingPartButton/SelectingPartButton.js';
import ListWords from './ListWords/ListWords.js';

export default class Etap_2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            button_sound_state: true,
            active_radio_button: ETAP_2.NAMES_RADIO_BUTTONS.list, 
            active_sercle_index: 0,
        };

        this.click_button_sound = this.click_button_sound.bind(this);
        this.set_active_radio_button = this.set_active_radio_button.bind(this);
        this.set_active_sercle_index = this.set_active_sercle_index.bind(this);
        this.getActualPartOfWords = this.getActualPartOfWords.bind(this);
    }

    click_button_sound(){
        this.setState({
            button_sound_state: !this.state.button_sound_state
        });
    }

    set_active_radio_button( name ){
        this.setState({
            active_radio_button: name
        });
    }

    set_active_sercle_index( index ){
        this.setState({
            active_sercle_index: index
        });
    }

    getActualPartOfWords( active_sercle_index ){
        return this.props.words[ active_sercle_index ];
    }

    componentDidMount(){
        show_workspace();
    }

   
    render(){
		return (
            <div id = { ID_NAME_OF_WORKSPACE } className = { ETAP_NAME[2] } > 
                <ButtonsPanel
                    button_sound_state =  { this.state.button_sound_state }
                    button_sound_action = { this.click_button_sound }

                    radio_buttons_list = {[
                        {
                            title: 'Список',
                            name: ETAP_2.NAMES_RADIO_BUTTONS.list,
                        },
                        {
                            title: 'EN / RU',
                            name: ETAP_2.NAMES_RADIO_BUTTONS.en_ru,
                        },
                        {
                            title: 'RU / EN',
                            name: ETAP_2.NAMES_RADIO_BUTTONS.ru_en,
                        },
                    ]}
                    active_radio_button = { this.state.active_radio_button }
                    set_active_radio_button = { this.set_active_radio_button }
                />

                <SelectingPartButton 
                    sum_of_pats_of_words = { this.props.sum_of_pats_of_words }
                    first_active_sercle_index = { this.state.active_sercle_index }
                    set_active_sercle_index = { this.set_active_sercle_index }
                />

                <ListWords 
                    words = { this.getActualPartOfWords( this.state.active_sercle_index ) }
                    button_sound_state = { this.state.button_sound_state }
                    href_for_audio_file = { this.props.href_for_audio_file }
                    active_radio_button = { this.state.active_radio_button }
                />

            </div>
               
        )
    }

};