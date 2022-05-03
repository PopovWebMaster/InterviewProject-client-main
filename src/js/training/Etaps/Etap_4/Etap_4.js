import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Etap_4.scss';

import { show_workspace } from './../../functions/show_workspace.js';
import { controller as visualController } from './controller.js';

import {    ID_NAME_OF_WORKSPACE,
            ETAP_NAME } from './../../settings.js';

import TextTrainingDisplay from './TextTrainingDisplay/TextTrainingDisplay.js';
import InputWithButton from './InputWithButton/InputWithButton.js';

import { CLASS_NAME_TEXT_TRENING } from './config.js';
import AskerEnText from './../../../functions/AskerEnText/AskerEnText.js';

import { adds_a_slovo_to_a_number } from './../../../functions/adds_a_slovo_to_a_number.js';
import Scale from './../components/Scale/Scale.js';


export default class Etap_4 extends Component{

    constructor(props){
        super(props);
        this.state = { 
            training_in_process: false,
            currentStepTrening: 0,
            ruW: '',
            enW: ''
        };

        this.Asker;
        this.totalAmount = this.props.words.length;

        this.action = this.action.bind(this);
        this.action_start = this.action_start.bind(this);
        this.action_trening = this.action_trening.bind(this);

    }

    action( enW ){
        if( this.state.training_in_process ){
            this.action_trening( enW );
        }else{
            this.action_start();
        };
    }

    action_start(){

        this.Asker = new AskerEnText({
            words:          this.props.words,
            cycle_length:   this.props.cycle_length_in_the_training,
        });

        let question = this.Asker.getQuestion();

        this.setState({
            training_in_process: true,
            ruW: question.ruW,
            currentStepTrening: this.Asker.getScaleParams().currentValue,
        });

        visualController.setStateTraining();

    }

    action_trening( enW ){

        this.Asker.setUserEnW( enW );

        if( this.Asker.trainingInProcess() ){ // тренинг в процессе
            let question = this.Asker.getQuestion();
            this.setState({
                ruW: question.ruW,
                enW: this.Asker.getHtmlEnW(),
                currentStepTrening: this.Asker.getScaleParams().currentValue,
            });

        }else{ // тренинг окончен 
            this.setState({
                training_in_process: false,
                ruW: `Вы успешно проработали ${ adds_a_slovo_to_a_number( this.props.words.length ) }`,
                enW: '',
                currentStepTrening: this.Asker.getScaleParams().currentValue,
            });
            visualController.setStateFinish();

        };

    }

    componentDidMount(){
        show_workspace();
    }

    render(){
		return (
            <div id = { ID_NAME_OF_WORKSPACE } > 

                <Scale  
                    currentValue =  { this.state.currentStepTrening } 
                    totalAmount =   { this.totalAmount }
                />

                <div className = { CLASS_NAME_TEXT_TRENING }>


                    <TextTrainingDisplay 
                        training_in_process = { this.state.training_in_process }
                        ruW = { this.state.ruW }
                        enW = { this.state.enW }
                    />

                    <InputWithButton 
                        training_in_process = { this.state.training_in_process }
                        action = { this.action }
                    /> 

                </div>
            </div>
        )
    }

};