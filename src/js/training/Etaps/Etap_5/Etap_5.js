import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Etap_5.scss';

import { show_workspace } from './../../functions/show_workspace.js';
import {    ID_NAME_OF_WORKSPACE,
            ETAP_NAME } from './../../settings.js';

import Step from './Step/Step.js';
import Scale from './../components/Scale/Scale.js';
import ItogTestDisplay from './ItogTestDisplay/ItogTestDisplay.js';
import ButtonSkipAQuestion from './ButtonSkipAQuestion/ButtonSkipAQuestion.js';
import InputWithButton from './InputWithButton/InputWithButton.js';

import { controller as visualController } from './controller.js';
import { controller_DisplayStep_1 as dimamicController } from './ItogTestDisplay/DisplayStep_1/DisplayStep_1.js';

import Testing from './../../../functions/Testing/Testing.js';

import { CLASS_NAME, SHOW_DISPLAY_DURATION } from './config.js';
import { AudioPlay } from './../../../functions/AudioPlay.js';

import { UserVocabularyPanelController } from './../../../components/UserVocabularyPanel/UserVocabularyPanel.js';
import { TrainingInfoPanelController } from './../../TrainingInfoPanel/TrainingInfoPanel.js';

import { send_to_server } from './../../../functions/send_to_server.js';

export default class Etap_5 extends Component{

    constructor(props){
        super(props);
        this.state = {
            test_in_process: false,
            currentValue: 0,
            totalAmount: 4,

            step: 1,
            question: '',
        };

        this.Testing;

        this.audioPlay = this.audioPlay.bind(this);

        this.actionRepeat = this.actionRepeat.bind(this);
        this.actionSkip = this.actionSkip.bind(this);
        this.actionEnter = this.actionEnter.bind(this);
        this.actionStart = this.actionStart.bind(this);
        this.actionTesting = this.actionTesting.bind(this);

        this.send_result_to_server = this.send_result_to_server.bind(this);

        
    }

    audioPlay(){
        if( this.Testing.testingInProcess() ){
            if( this.Testing.getStep() === 1 ){ // дополнительная защита 
                let enW = this.Testing.getQuestion();
                let href = this.props.href_for_audio_file;
                AudioPlay( enW, href );
                dimamicController.move();
            };
        };
    }

    actionRepeat(){
        this.audioPlay();
    }

    actionSkip(){
        this.actionTesting( '' );
    }

    actionEnter( answer ){
        if( this.state.test_in_process ){
            this.actionTesting( answer );

        }else{
            this.actionStart();

        };
    }

    actionStart(){
        
        this.Testing = new Testing({
            words: this.props.words,
            min_sum_words: this.props.min_sum_words,
        });

        this.setState({
            test_in_process:    true,
            currentValue:       this.Testing.getScaleParams().currentValue,
            totalAmount:        this.Testing.getScaleParams().totalAmount,
            step:               this.Testing.getStep(),
        });

        visualController.setTestedState();

        let timer = setTimeout( () => {
            this.audioPlay();
            this.setState({
                question:           this.Testing.getQuestion(),
            });
            clearTimeout( timer );
        }, SHOW_DISPLAY_DURATION*2 );

    }

    actionTesting( answer ){

        this.Testing.acceptAnswer( answer );

        if( this.Testing.testingInProcess() ){

            let step = this.Testing.getStep();

            if( step === 1 ){
                this.setState({
                    test_in_process:    this.Testing.testingInProcess(),
                    currentValue:       this.Testing.getScaleParams().currentValue,
                    question:           this.Testing.getQuestion(), 
                    step:               this.Testing.getStep(),
                });
                this.audioPlay();

            }else if( step === 2 ){
                this.setState({
                    test_in_process:    this.Testing.testingInProcess(),
                    currentValue:       this.Testing.getScaleParams().currentValue,
                    question:           this.Testing.getQuestion(),
                    step:               this.Testing.getStep(),
                });

            };

        }else{ // Остановка тестирования здесь 

            visualController.setRestartState();

            this.setState({
                test_in_process:    this.Testing.testingInProcess(),
                currentValue:       this.Testing.getScaleParams().currentValue,
                question:           this.Testing.getResultMassage(),
            });

            this.send_result_to_server();

        };

    }

    send_result_to_server(){

        send_to_server({

            href: this.props.href_for_post,
            action: this.props.actions.setResult,
            
            data: {
                user_result_in_this_dictionary: this.Testing.getUserItogResult(),
            },

            successCallback: ( data ) => {
            /*
                Пример data 
                    'ok' =>                 $responce_from_set['ok'],
                    'errors' =>             $responce_from_set['errors'],
                    'user_result' =>        $this->getUserResult( $dictionary->id ),
                    'user_vocabulary' =>    $this->getVocabulary(),

            */

                UserVocabularyPanelController.setVocabulary( data.user_vocabulary );
                TrainingInfoPanelController.update({
                    sum_words: this.props.words.length,
                    user_result: data.user_result,
                });
            },
        });

    }

    componentDidMount(){
        show_workspace();
        visualController.set_initial_styles();
    }

    render(){
		return (
            <div id = { ID_NAME_OF_WORKSPACE /*'workspace'*/ }> 
                <div className = { CLASS_NAME.TEST_ITOG } /*'itogTest'*/ >
                    <div className = { `${CLASS_NAME.DISPLAY_CURTAIN} ${CLASS_NAME.SHOW_DISPLAY}` } >

                        <Step 
                            currentValue =      { this.state.currentValue } 
                            totalAmount =       { this.state.totalAmount }
                            test_in_process =   { this.state.test_in_process }
                            step =              { this.state.step }
                        />

                        <Scale  
                            currentValue =      { this.state.currentValue } 
                            totalAmount =       { this.state.totalAmount }
                        />

                        <ItogTestDisplay 
                            step =              { this.state.step }
                            test_in_process =   { this.state.test_in_process }
                            actionRepeat =      { this.actionRepeat }
                            question =          { this.state.question }

                        />

                        <ButtonSkipAQuestion 
                            test_in_process =   { this.state.test_in_process }
                            action =            { this.actionSkip }
                        />

                    </div>

                    <InputWithButton 
                        words =           { this.props.words }
                        step =            { this.state.step }
                        test_in_process = { this.state.test_in_process }
                        action =          { this.actionEnter }
                        question =        { this.state.question }
                    /> 

                </div>
                
            </div>
        )
    }

};