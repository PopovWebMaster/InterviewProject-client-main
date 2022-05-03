import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './ToggleButton.scss';

export default class ToggleButton extends Component{

    constructor(props){
        super(props);
        this.state = { 
            isOn: this.props.initial_state

        };
        this.createSpan = this.createSpan.bind(this);
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(){
        let isOn = this.state.isOn;
        this.setState({
            isOn: !isOn
        });
        this.props.action( !isOn );
    }

    createSpan( isOn ){
        if( isOn ){
            return (
                <span 
                    className = { this.props.value_on_class }
                >
                    { this.props.value_on_text }
                </span>
            );
        }else{
            return (
                <span 
                    className = { this.props.value_off_class }
                >
                    { this.props.value_off_text }
                </span>
            );
        };
    }
    
    render(){
		return (
            <div 
                className = 'toggleButton'
                onClick = { this.clickButton }
            > 
                { this.createSpan( this.state.isOn ) }
            </div>
        )
    }
};