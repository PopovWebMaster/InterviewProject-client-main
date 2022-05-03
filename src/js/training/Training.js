import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Training.scss';

import UserVocabularyPanel from './../components/UserVocabularyPanel/UserVocabularyPanel.js';
import TrainingInfoPanel from './TrainingInfoPanel/TrainingInfoPanel.js';

import Etaps from './Etaps/Etaps.js';

export default class Training extends Component{

    constructor(props){
        super(props);
    }

    render(){
		return (
            <>
                <UserVocabularyPanel 
                    sum_words =     { this.props.massage.user_vocabulary }
                />
                <TrainingInfoPanel 
                    sum_stars =     { this.props.massage.scale_stars_for_one_dictionary }
                    sum_words =     { this.props.massage.sum_words }
                    user_result =   { this.props.massage.user_result }
                    queue =         { this.props.massage.queue }
                    user_result =   { this.props.massage.user_result }
                />
                <Etaps 
                    tasks =                         { this.props.massage.tasks }
                    sum_of_pats_of_words =          { this.props.massage.sum_of_pats_of_words }
                    cycle_length_in_the_training =  { this.props.massage.cycle_length_in_the_training }
                    actions =                       { this.props.massage.actions }
                    href_for_post =                 { this.props.massage.href_for_post }
                    href_for_audio_file =           { this.props.massage.href_for_audio_file }
                    words =                         { this.props.massage.words }
                    min_sum_words =                 { this.props.massage.min_sum_words }
                />
            </>
        )
    }

};
