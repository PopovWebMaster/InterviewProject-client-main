import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './OneLevel.scss';

import { adds_a_slovo_to_a_number } from './../../../functions/adds_a_slovo_to_a_number.js';
import ScaleOfStars from './../../../components/ScaleOfStars/ScaleOfStars.js';

export default class OneLevel extends Component{

    constructor(props){
        super(props);

        this.state = {
            isOpenResult: this.props.isFirstLevel,
        };

        this.level_num = this.props.level_data.level_num;
        this.sum_words = this.props.level_data.sum_words;
        this.min_sum_words = this.props.level_data.min_sum_words;
        this.user_result = this.props.level_data.user_result;
        this.sum_stars_in_one_dictionary = this.props.level_data.sum_stars_in_one_dictionary;

        this.createList = this.createList.bind(this);
        this.createResult = this.createResult.bind(this);
        this.clickResultBut = this.clickResultBut.bind(this);
    }

    createList( arr ){

        let list = arr.map(( item, index ) => {
            let sum_stars = this.sum_stars_in_one_dictionary;
            let sum_words = item.dic_data.sum_words_in_dictionary;
            let user_result = item.dic_data.user_result;
            return (
                <li key = {index}>
                    <a 
                        href = { item.dic_data.href }
                        title = { 'Словарь №'+ item.queue }
                    >
                        <div className = 'levelQueue'>
                            { '№'+ item.queue }
                        </div>
                        <div className = 'levelImg'>
                            <img src="/assets/img/icons/dictionary-1.png" alt="Словарик" />
                        </div>
                        <div className = 'levelSumWords'>
                            { adds_a_slovo_to_a_number( item.dic_data.sum_words_in_dictionary ) }
                        </div>
                        <div className = 'levelStars'>
                            <ScaleOfStars 
                                sum_stars =     { sum_stars }
                                sum_words =     { sum_words }
                                user_result =   { user_result }
                            />
                        </div>
                        
                    </a>
                </li>
            );

        });

        return list;
    }

    clickResultBut(){
        this.setState({
            isOpenResult: !this.state.isOpenResult
        });
    }

    createResult( arr ){

        let tr_body = arr.map(( item, index )=>{

            let res = item.dic_data.user_result;
            let sum = item.dic_data.sum_words_in_dictionary;

            let remnant; // остаток

            if( item.dic_data.user_result === 0){
                remnant = '-';
            }else if( res === sum ){
                remnant = <span className="icon-ok-1"></span>;
            }else{
                remnant = '-'+(sum - res);
            };

            return (
                <tr key = {index}>
                    <th key = {index+100}>{ '№'+item.queue }</th>
                    <th key = {index+200}>{ item.dic_data.user_result }</th>
                    <th key = {index+300}>{ item.dic_data.sum_words_in_dictionary }</th>
                    <th key = {index+400} className = 'levelRemnant'>{ remnant }</th>
                </tr>
            );
        });

        let balance;
        if( this.min_sum_words > this.user_result ){
            balance = `${this.min_sum_words - this.user_result}-${this.sum_words - this.user_result}`;
        }else{
            balance = 0;
        };

        return (<>
            <div  className = 'levelResults_but'>
                <span
                    onClick = { this.clickResultBut }
                >Результаты тестирования</span>
            </div>
            <table className = 'levelResults' style = { this.state.isOpenResult? {display: 'table'}:{display: 'none'}}>
                <caption></caption>
                <thead>
                    <tr>
                        <th className = 'th_head'>словарь</th>
                        <th className = 'th_head'>ваш результат</th>
                        <th className = 'th_head'>всего слов</th>
                        <th className = 'th_head'>состояние готовности</th>
                    </tr>
                </thead>
                <tbody>
                    { tr_body }
                </tbody>

                <tfoot>
                </tfoot>

            </table>

            <table className = 'levelResultInfo' style = { this.state.isOpenResult? {display: 'table'}:{display: 'none'}}>
                <caption></caption>
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Ваш итоговый результат:</th>
                        <th>{ this.user_result }</th>
                    </tr>
                    <tr>
                        <th>Минимальный проходной балл:</th>
                        <th>{ this.min_sum_words }</th>
                    </tr>
                    <tr>
                        <th>Осталось для перехода на следующий уровень:</th>
                        <th>{ balance }</th>
                    </tr>
                    
                </tbody>

                <tfoot></tfoot>

            </table>
        </>);
    }

    render(){
		return (
            <div className = 'oneLevel'>
                <div className = 'levelHead'>
                    <span className = 'levelName'>Уровень { this.level_num }</span>
                    <span className = 'levelSumWords'>{ adds_a_slovo_to_a_number( this.sum_words ) }</span>
                </div>
                <ul>
                    { this.createList( this.props.list ) }
                </ul>
                { this.createResult( this.props.list ) }
            </div>

        )
    }

};