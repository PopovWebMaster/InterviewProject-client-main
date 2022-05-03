import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './SelectingPartButton.scss';

import { isGoodClick } from './../../../../../functions/isGoodClick.js';

import {    CLASS_NAME_ICON_ARROW_LEFT,
            CLASS_NAME_ICON_ARROW_RIGHT  } from './../../../../settings.js';

export default class SelectingPartButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeSercleIndex: this.props.first_active_sercle_index
        };

        this.setPrevActiveSercle = this.setPrevActiveSercle.bind(this);
        this.setNextActiveSercle = this.setNextActiveSercle.bind(this);
        this.setNewActiveSercle = this.setNewActiveSercle.bind(this);
        this.createSercleParts = this.createSercleParts.bind(this);
        this.setResult = this.setResult.bind(this);

    }
    setResult( index ){
        this.props.set_active_sercle_index( index );
    }

    setPrevActiveSercle(){
        if( isGoodClick() ){
            let index = this.state.activeSercleIndex;
            let newIndex = 0;

            if( index === 0 ){
                newIndex = ( this.props.sum_of_pats_of_words - 1);

            }else if( index < this.props.sum_of_pats_of_words ) {
                newIndex = index - 1;
            };

            this.setState({
                activeSercleIndex: newIndex
            });
            this.setResult( newIndex );
        };
    }

    setNextActiveSercle(){
        if( isGoodClick() ){
            let index = this.state.activeSercleIndex;
            let newIndex = 0;

            if( index < ( this.props.sum_of_pats_of_words - 1 ) ){
                newIndex = index + 1;

            }else if( index === ( this.props.sum_of_pats_of_words - 1)){
                newIndex = 0;

            };
            this.setState({
                activeSercleIndex: newIndex
            });
            this.setResult( newIndex );
        };
    }

    setNewActiveSercle( index ){
        if( isGoodClick() ){
            this.setState({
                activeSercleIndex: index
            });
            this.setResult( index );
        };
    }

    createSercleParts( activeSercleIndex ){
        let arr = [];
        let sum_parts = this.props.sum_of_pats_of_words;
        for( let i = 0; i < sum_parts; i++){
            arr.push(i);
        };

        let liList = arr.map( ( item, index ) => {
            return (
                <li className = { activeSercleIndex === index? 'op1': '' }
                    onClick = { () => {
                        this.setNewActiveSercle( index );
                    }}
                    key = { item } 
                ></li>
            );
        });
        return liList;
    }

    render(){
		return (
            <div className = 'butSerclePart'>
                <div    onClick = { this.setPrevActiveSercle }
                        className = 'nextPart'
                >
                    <span className = { CLASS_NAME_ICON_ARROW_LEFT }></span>
                </div>

                <ul>
                    { this.createSercleParts( this.state.activeSercleIndex ) }
                </ul>

                <div    onClick = { this.setNextActiveSercle }
                        className = 'nextPart'
                >
                    <span className = { CLASS_NAME_ICON_ARROW_RIGHT }></span>
                </div>
            </div>
        )
    }

};