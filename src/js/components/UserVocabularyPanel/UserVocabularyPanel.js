//import './scss/home.scss';
import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './UserVocabularyPanel.scss';

import { ID_NAME, CLASS_NAME } from './config.js';
import { controller } from './controller.js';

export const UserVocabularyPanelController = {
    setVocabulary( num ){
        controller.set_vocabulary( num );
    },
};

export default class UserVocabularyPanel extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div id = { ID_NAME }>
                <span>Ваш словарный запас: </span>
                <span className = { CLASS_NAME.SUM_VOC }>
                    { controller.convert_number_to_a_string( this.props.sum_words ) }
                </span>
            </div>
        )
    }

};
