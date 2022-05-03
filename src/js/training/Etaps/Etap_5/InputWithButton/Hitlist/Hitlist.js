import React from 'react';
import { Component } from 'react';
import './Hitlist.scss';

import { get_hitlist_arr } from './function/get_hitlist_arr.js';
import { controller } from './controller.js';

import { CLASS_NAME } from './config.js';

export const hitlistController = controller;

export default class Hitlist extends Component{

    constructor(props){
        super(props);
        // this.state = {};

        this.crealeList = this.crealeList.bind(this);
        this.getPlaceholder = this.getPlaceholder.bind(this);

    }

    crealeList( params ){

        let value = params.value;

        if( !value ){
            return <ul></ul>;
        };

        let words =           this.props.words;
        let test_in_process = this.props.test_in_process;
        let step =            this.props.step;

        let hitlist_arr = get_hitlist_arr({
            words,
            value,
            step
        });

        let ul;
        let li_with_span;
        let last_value_in_list = '';
        if( test_in_process ){

            let li = hitlist_arr.map( ( item, index ) => {

                let word = item.toLowerCase();
                let startPos = word.indexOf( value.toLowerCase() );
                let endPos = startPos + value.length;

                let part_1 = word.substring(0, startPos );
                let part_2 = word.substring( startPos, endPos );
                let part_3 = word.substring( endPos );

                last_value_in_list = word;

                li_with_span = (
                    <>
                        {part_1}<span>{part_2}</span>{part_3}
                    </>
                );

                return (
                    <li 
                        key = { index }
                        onClick = { () => {
                            this.props.actionSetValue( item );
                        }}
                    >
                        {li_with_span}
                    </li>
                );
            });

            ul = (
                <ul>
                    { li }
                    <li>{ this.getPlaceholder({ value, last_value_in_list })}</li>
                </ul>
            );

        }else{
            ul = (
                <ul></ul>
            );
        };

        return ul;

    }

    getPlaceholder( params ){

        let value = params.value;
        let last_value_in_list = params.last_value_in_list;

        let placeholder = '';
        let res = true;

        for( let i = 0; i < value.length; i++ ){

            let char_value = value[i];
            let char_last_value_in_list = last_value_in_list[i];

            if( char_value === undefined || char_last_value_in_list === undefined ){
                res = false;
                break;

            }else{
                if( value[i].toLowerCase() !== last_value_in_list[i].toLowerCase() ){
                    res = false;
                    break;

                };

            };
        };

        if(res){
            placeholder = value + last_value_in_list.slice( value.length );

            // placeholder = last_value_in_list;

        };

        return placeholder;
    }

    render(){
		return (
                
            <div className = { CLASS_NAME.HITLIST }>
                {
                    this.crealeList({
                        value: this.props.value
                    })
                }
            </div>

        )
    }

};



