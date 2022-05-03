import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Etap_1.scss';

import { show_workspace } from './../../functions/show_workspace.js';
import {    ID_NAME_OF_WORKSPACE,
            ETAP_NAME } from './../../settings.js';

import ButtonsPanel from './ButtonsPanel/ButtonsPanel.js';
import SelectingPartButton from './../components/buttons/SelectingPartButton/SelectingPartButton.js';
import ListWords from './ListWords/ListWords.js';

export default class Etap_1 extends Component{

    constructor(props){
        super(props);
        this.state = { 
            button_sound_state: true,
            button_ru_state: true,
            active_sercle_index: 0,
        };

        this.click_button_sound = this.click_button_sound.bind(this);
        this.click_button_ru = this.click_button_ru.bind(this);
        this.set_active_sercle_index = this.set_active_sercle_index.bind(this);
        this.getActualPartOfWords = this.getActualPartOfWords.bind(this);

    }

    click_button_sound(){
        this.setState({
            button_sound_state: !this.state.button_sound_state
        });
    }

    click_button_ru(){
        this.setState({
            button_ru_state: !this.state.button_ru_state
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
            <div id = { ID_NAME_OF_WORKSPACE }> 
                
                <ButtonsPanel 

                    button_sound_state =  { this.state.button_sound_state }
                    button_sound_action = { this.click_button_sound }
                    
                    button_ru_state =     { this.state.button_ru_state }
                    button_ru_action =    { this.click_button_ru }

                />

                <SelectingPartButton 
                    sum_of_pats_of_words = { this.props.sum_of_pats_of_words }
                    first_active_sercle_index = { this.state.active_sercle_index }
                    set_active_sercle_index = { this.set_active_sercle_index }
                />

                <ListWords 
                    words = { this.getActualPartOfWords( this.state.active_sercle_index ) }
                    button_sound_state = { this.state.button_sound_state }
                    button_ru_state = { this.state.button_ru_state }
                    href_for_audio_file = { this.props.href_for_audio_file }
                
                />
                

            </div>
        )
    }

};