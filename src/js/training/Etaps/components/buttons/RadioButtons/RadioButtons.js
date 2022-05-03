import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './RadioButtons.scss';

export default class RadioButtons extends Component{

    constructor(props){
        super(props);
        this.state = {
            active_radio_button: this.props.active_radio_button,
        };
        this.setActiveRadioButton = this.setActiveRadioButton.bind(this);
    }

    setActiveRadioButton( name ){

        this.setState({
            active_radio_button: name
        });
        this.props.set_active_radio_button( name );

    }

    createListRadioButtons( active_radio_button ){
        let list = this.props.radio_buttons_list;

        let li = list.map( ( item, index ) => {
            return (
                <li
                    key = { index }
                    className = { active_radio_button === item.name? 'activeStyle': '' }
                    onClick = { () => {
                        this.setActiveRadioButton( item.name );
                    }}
                >
                    <span>{ item.title }</span>
                </li>
            );
        });

        return li;
    }

    render(){
		return (
            <div 
                className = 'radioButtons'
            > 
                <ul>
                    { this.createListRadioButtons( this.state.active_radio_button ) }
                </ul>
            </div>
        )
    }
};