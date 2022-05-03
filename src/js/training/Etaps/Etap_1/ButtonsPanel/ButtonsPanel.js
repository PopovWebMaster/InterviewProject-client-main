import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './ButtonsPanel.scss';

import ToggleButton from './../../components/buttons/ToggleButton/ToggleButton.js';

import {    CLASS_NAME_BUTTONS_PANEL,
            CLASS_NAME_ICON_VALUE_UP,
            CLASS_NAME_ICON_VALUE_OFF } from './../../../settings.js';

export default class ButtonsPanel extends Component{

    constructor(props){
        super(props);
        //this.state = { };
    }

    render(){
		return (
            <div className = { CLASS_NAME_BUTTONS_PANEL }> 
                <ToggleButton 
                    value_on_class =  { CLASS_NAME_ICON_VALUE_UP }
                    value_on_text =   ''
                    value_off_class = { CLASS_NAME_ICON_VALUE_OFF }
                    value_off_text =  ''
                    initial_state =   { this.props.button_sound_state }
                    action =          { this.props.button_sound_action }
                />
                <ToggleButton 
                    value_on_class =  ''
                    value_on_text =   'RU вкл.'
                    value_off_class = ''
                    value_off_text =  'RU выкл.'
                    initial_state =   { this.props.button_ru_state }
                    action =          { this.props.button_ru_action }
                />
            </div>
        )
    }

};