import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Etap_3.scss';

import { show_workspace } from './../../functions/show_workspace.js';
import {    ID_NAME_OF_WORKSPACE,
            ETAP_NAME } from './../../settings.js';
import { AudioPlay } from './../../../functions/AudioPlay.js';
import { adds_a_slovo_to_a_number } from './../../../functions/adds_a_slovo_to_a_number.js';

import Scale from './../components/Scale/Scale.js';
import Oval, { ovalController } from './../components/Oval/Oval.js';
import TreningButtons from './TreningButtons/TreningButtons.js';
import Asker from './../../../functions/Asker/Asker.js';

import { add_event_key } from './function/add_event_key.js';
import { remove_event_key } from './function/remove_event_key.js';

// Этап -  { ETAP_NAME[3] } 

export default class Etap_3 extends Component{

    constructor(props){
        super(props);

        this.state = {
            training_in_process: false,
            currentStepTrening: 0,
            ruW: '',
        };

        this.isGoodClick = true;

        this.totalAmount = this.props.words.length;
        this.Asker;

        console.dir(this.props);

        this.setInitialParams = this.setInitialParams.bind(this);
        this.actionStart = this.actionStart.bind(this);
        this.actionRemember = this.actionRemember.bind(this);
        this.actionRepeat = this.actionRepeat.bind(this);
        this.actionNotRemember = this.actionNotRemember.bind(this);

        this.start = this.start.bind(this);
        this.remember = this.remember.bind(this);
        this.repeat = this.repeat.bind(this);
        this.notRemember = this.notRemember.bind(this);
        this.updateData = this.updateData.bind(this);

        this.audioPlay = this.audioPlay.bind(this);
        this.antiBadClick = this.antiBadClick.bind(this);


    }

    audioPlay(){
        if( this.Asker.trainingInProcess() ){
            let href = this.props.href_for_audio_file;
            let enW = this.Asker.getQuestion().enW;
            AudioPlay( enW, href );
            ovalController.dinadicMove();
        }; 
    }

    setInitialParams(){
        this.setState({
            currentStepTrening: 0,
            ruW: 'Нажмите "Начать тренинг"',
        });
    }

    start(){
        this.antiBadClick( () => {
            ovalController.close();

            this.setState({
                training_in_process: !this.state.training_in_process
            });

            this.Asker = new Asker({
                words:          this.props.words,
                cycle_length:   this.props.cycle_length_in_the_training,
                // cycle_length:   5,
            });
            
            this.updateData();
            this.audioPlay();
        });
    }

    remember(){
        this.antiBadClick( () => {
            this.Asker.remember();
            this.updateData();
            this.audioPlay();
        });
    }

    repeat(){
        this.antiBadClick( () => {
            this.audioPlay();
        });
    }

    notRemember(){
        this.antiBadClick( () => {
            this.Asker.notRemember();
            this.updateData();
            this.audioPlay();
        });
        
    }

    updateData(){

        if( this.Asker.trainingInProcess() ){
            this.setState({
                training_in_process: this.Asker.trainingInProcess(),
                currentStepTrening: this.Asker.getScaleParams().currentValue,
                ruW: this.Asker.getQuestion().ruW,
            });

        }else{
            this.setState({
                training_in_process: this.Asker.trainingInProcess(),
                currentStepTrening: this.Asker.getScaleParams().currentValue,
                ruW: `Вы успешно проработали ${ adds_a_slovo_to_a_number( this.props.words.length ) }`,
            });
            ovalController.open();
        };

    }

    actionStart(){
        if( !this.state.training_in_process ){
            this.start();
        }else{
            this.remember();
        };
    }

    actionRepeat(){
        if( this.state.training_in_process ){
            this.repeat();
        };
    }

    actionRemember(){
        if( this.state.training_in_process ){
            this.remember();
        }else{
            this.start();
        };
    }

    actionNotRemember(){
        if( this.state.training_in_process ){
            this.notRemember();
        };
    }

    antiBadClick( func ){
        if( this.isGoodClick ){
            func();
            this.isGoodClick = false;

            let timerB = setTimeout( () => {
                this.isGoodClick = true;
                clearTimeout( timerB );
            }, 800 );
        };
    }

    componentDidMount(){
        show_workspace();
        this.setInitialParams();

        add_event_key({
            w: ovalController,
            a: this.actionRemember,
            s: this.actionRepeat,
            d: this.actionNotRemember,
            enter: this.actionStart
        });

    }

    componentWillUnmount(){
        remove_event_key();
    }


   
    render(){
		return (
            <div id = { ID_NAME_OF_WORKSPACE }> 

                <Scale  
                    currentValue =  { this.state.currentStepTrening } 
                    totalAmount =   { this.totalAmount }
                />

                <Oval 
                    training_in_process =   { this.state.training_in_process }
                    ruW = { this.state.ruW }
                />

                <TreningButtons 
                    training_in_process =   { this.state.training_in_process }
                    actionStart =           { this.actionStart }
                    actionRemember =        { this.actionRemember }
                    actionRepeat =          { this.actionRepeat }
                    actionNotRemember =     { this.actionNotRemember }
                />

            </div>
        )
    }

};
















