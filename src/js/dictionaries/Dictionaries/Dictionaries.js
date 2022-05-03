import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Dictionaries.css';

import UserVocabularyPanel from './../../components/UserVocabularyPanel/UserVocabularyPanel.js';
import OneLevel from './OneLevel/OneLevel.js';

export default class  Dictionaries extends Component{

    constructor(props){
        super(props);

        this.createLevels = this.createLevels.bind(this);
        this.getSumWords = this.getSumWords.bind(this);

    }

    getSumWords( ListDictionaries ){
        let sumWords = 0;
        for( let key in ListDictionaries ){
            sumWords = sumWords + ListDictionaries[key].level_data.user_result;
        };
        return sumWords;
    }

    createLevels(){

        let lestDictionaries = this.props.massage.listDictionaries;
        let arr = [];

        for( let key in lestDictionaries ){
            let list = [];
            let level_data = '';
            for( let name in lestDictionaries[key] ){
                let obj = {};
                if( name !== 'level_data' ){
                    obj.queue = name;
                    obj.dic_data = lestDictionaries[key][name]
                    list.push(obj);
                }else{
                    level_data = lestDictionaries[key][name];
                    level_data.level_num = key;
                };
                
            };

            arr.push({ list, level_data });
        };

        arr = arr.reverse();

        let levels = arr.map(( item, index )=>{
            let isFirstLevel;
            if( index === 0 ){
                isFirstLevel = true;
            }else{
                isFirstLevel = false;
            };
            return (
                <OneLevel 
                    list = { item.list }
                    level_data = { item.level_data }
                    key = { index }
                    isFirstLevel = { isFirstLevel }
                />
            )

        });

        return levels;
    }

    render(){
		return (
            <>
                <UserVocabularyPanel sum_words = { this.getSumWords( this.props.massage.listDictionaries ) }/>
                { this.createLevels() }

            </>
        )
    }

};
