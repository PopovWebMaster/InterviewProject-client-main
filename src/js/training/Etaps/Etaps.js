import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Etaps.scss';

import SelectEtapsPanel from './SelectEtapsPanel/SelectEtapsPanel.js';

import Etap_1 from './Etap_1/Etap_1.js';
import Etap_2 from './Etap_2/Etap_2.js';
import Etap_3 from './Etap_3/Etap_3.js';
import Etap_4 from './Etap_4/Etap_4.js';
import Etap_5 from './Etap_5/Etap_5.js';

import { ETAP_NAME } from './../settings.js';

import { hide_workspace } from './../functions/hide_workspace.js';

import { get_a_mixed_array } from './../../functions/get_a_mixed_array.js';
import { get_a_list_of_words_divided_into_parts } from './../../functions/get_a_list_of_words_divided_into_parts.js';
import { isset } from './../../functions/isset.js';

export default class Etaps extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeEtap: getActiveEtapNameFromSession(), //ETAP_NAME[1], 
        };

        this.mixed_words = get_a_mixed_array( this.props.words );

        let sumParts = this.props.sum_of_pats_of_words;
        this.list_of_words_divided_into_parts = get_a_list_of_words_divided_into_parts( this.mixed_words, sumParts );

        this.setActiveEtap = this.setActiveEtap.bind(this);
        this.createEtap = this.createEtap.bind(this);

    }

    setActiveEtap( etap_name ){

        if( etap_name !== this.state.activeEtap ){
            const callback = () =>{
                this.setState({
                    activeEtap: etap_name
                }) 
            };
            hide_workspace( callback ); 

            sessionStorage.setItem( 'activeEtap', etap_name );

        };
    }

    createEtap( etap_name ){
        let etaps = {
            [ ETAP_NAME[1] ]: (

                <Etap_1 
                    sum_of_pats_of_words =  { this.props.sum_of_pats_of_words }
                    words =                 { this.list_of_words_divided_into_parts }
                    href_for_audio_file =   { this.props.href_for_audio_file }
                />),
                
            [ ETAP_NAME[2] ]: (
                <Etap_2 
                    sum_of_pats_of_words =  { this.props.sum_of_pats_of_words }
                    words =                 { this.list_of_words_divided_into_parts }
                    href_for_audio_file =   { this.props.href_for_audio_file }
                />),
            [ ETAP_NAME[3] ]: (
                <Etap_3 
                    words =                 { this.mixed_words }
                    cycle_length_in_the_training = { this.props.cycle_length_in_the_training }
                    href_for_audio_file =   { this.props.href_for_audio_file }
                    
                />),
            [ ETAP_NAME[4] ]: (
                <Etap_4 
                    words =                 { this.mixed_words }
                    cycle_length_in_the_training = { this.props.cycle_length_in_the_training }
                    href_for_audio_file =   { this.props.href_for_audio_file }
                />),
            [ ETAP_NAME[5] ]: (
                <Etap_5 
                    words =                 { this.mixed_words }
                    href_for_post =         { this.props.href_for_post }
                    href_for_audio_file =   { this.props.href_for_audio_file }
                    min_sum_words =         { this.props.min_sum_words }
                    actions =               { this.props.actions }
                />),
        };

        return etaps[ etap_name ];
    }




    render(){
		return (
            <>
                <SelectEtapsPanel 
                    setActiveEtap = { this.setActiveEtap }
                    tasks =         { this.props.tasks }
                    activeEtap =    { this.state.activeEtap }
                />
                { this.createEtap( this.state.activeEtap ) }
               
            </>
        )
    }

};


function getActiveEtapNameFromSession(){
    let res;
    let activeEtapFromSession = sessionStorage.getItem( 'activeEtap' );

    if( isset( activeEtapFromSession ) ){
        res = activeEtapFromSession;
    }else{
        res = ETAP_NAME[1];
    };

    return res;
};










