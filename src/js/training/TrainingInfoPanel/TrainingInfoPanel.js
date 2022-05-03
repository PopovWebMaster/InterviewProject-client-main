import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './TrainingInfoPanel.scss';

import { CLASS_NAME } from './config.js';

import ScaleOfStars, { ScaleOfStarsController } from './../../components/ScaleOfStars/ScaleOfStars.js';
import { controller } from './controller.js';

export const TrainingInfoPanelController = {
    update( params ){
        let sum_words = params.sum_words;
        let user_result = params.user_result;

        ScaleOfStarsController.update({
            sum_words,
            user_result,
        });

        controller.update({
            sum_words,
            user_result,
        });

    },
};



export default class TrainingInfoPanel extends Component{

    //     должен принять в свойствах:
    //          this.props.sum_stars, 
    //          this.props.sum_words, 
    //          this.props.user_result

    constructor(props){
        super(props);

    }

    render(){
        return (
            
            <div className = { CLASS_NAME.INFO_PANEL }>
                <div className = { CLASS_NAME.WRAP }>
                    <div className = { CLASS_NAME.INFO }>

                        <div className = { CLASS_NAME.IMG }>
                            <img src="/assets/img/icons/dictionary-1.png" alt="Словарик" /> 
                        </div>

                        <div className = { CLASS_NAME.QUEUE }>
                            { '№'+this.props.queue }
                        </div> 
                        
                    </div>

                    <div className = { CLASS_NAME.INFO_RESULT }>
                        <table>
                            <caption></caption>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>Всего слов:</th>
                                    <th className = { CLASS_NAME.SUM_WORDS }>{ this.props.sum_words }</th>
                                </tr>
                                <tr>
                                    <th>Результат тестирования:</th>
                                    <th className = { CLASS_NAME.USER_RESULT }>{ this.props.user_result }</th>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan = '2'>
                                        <ScaleOfStars
                                            sum_stars = { this.props.sum_stars }
                                            sum_words = { this.props.sum_words }
                                            user_result = { this.props.user_result }
                                        />
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
                
        );
    }
};








