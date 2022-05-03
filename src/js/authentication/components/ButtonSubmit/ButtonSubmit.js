import React from 'react';
//import ReactDOM from 'react-dom';
// import { Component } from 'react';
import './ButtonSubmit.scss';
import { CLASS_NAME } from './../../config.js';
import MainAuthComponent from './../../components/MainAuthComponent/MainAuthComponent.js';

export default class ButtonSubmit extends MainAuthComponent{ // 

    constructor(props){
        super(props);
        this.state = {
            data_is_being_sent: false,
        };

        this.actionSubmit = this.actionSubmit.bind(this);

    }

    actionSubmit( e ){
        e.preventDefault();

        if( !this.state.data_is_being_sent ){
            this.setState({
                data_is_being_sent: true,
            });

            this.props.submit( () => {
                this.setState({
                    data_is_being_sent: false,
                });
            } );
        };
        


    }

    render(){
		return (
  
            <button 
                className = { CLASS_NAME.BUTTON }
                onClick = { this.actionSubmit }
                onKeyDown  = { (e) => {
                    e.preventDefault();
                }}
            >
                { this.state.data_is_being_sent? 
                    <span className = { CLASS_NAME.SPIN }></span>:
                    'Отправить'
                }
                
            </button>

        )
    }

};
