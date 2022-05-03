import React from 'react';
import { Component } from 'react';
import './ButtonSkipAQuestion.scss';


export default class ButtonSkipAQuestion extends Component{

    constructor(props){
        super(props);

        this.action = this.action.bind(this);

    }

    action(){
        if( this.props.test_in_process ){
            this.props.action();
        };
    }

    render(){
		return (
            <div className = 'buttonSkipAQuestion'>
                <div
                    className = { this.props.test_in_process? '': 'noActive' }
                    onClick = { this.action }
                >
                    <span>Пропустить</span>
                    <span className = 'icon-frown'></span>
                </div>
            </div>

        )
    }

};



