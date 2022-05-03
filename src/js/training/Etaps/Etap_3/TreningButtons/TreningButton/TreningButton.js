import React from 'react';
import { Component } from 'react';
import './TreningButton.scss';

import {    CLASS_NAME_TRENING_BUTTON, 
            CLASS_NAME_TRENING_BUTTON_CHILD  } from './../../config.js';

import HotKey from './../../../components/HotKey/HotKey.js';

export default class TreningButton extends Component{

    constructor(props){
        super(props);

        this.getClassName = this.getClassName.bind(this);
        this.click = this.click.bind(this);
    }

    getClassName( isActive ){

        if( isActive ){
            return CLASS_NAME_TRENING_BUTTON_CHILD
        }else{
            return `${CLASS_NAME_TRENING_BUTTON_CHILD} noActive`
        };

    }

    click(){
        if( this.props.isActive ){
            this.props.action(); 
        };
    }

    render(){
		return (
            <div className = { CLASS_NAME_TRENING_BUTTON }>
                <div    
                    className = { this.getClassName( this.props.isActive ) }
                    onClick = { this.click }
                >
                    <span
                        style = {{
                            marginRight: this.props.value === '' || this.props.className === ''? '0': '0.8em',
                        }}
                    >
                        { this.props.value }
                        
                    </span>

                    <span
                        className = { this.props.className }
                    ></span>
                </div>

                <HotKey
                    keyName = { this.props.keyName }
                />
            </div>
        )
    }

};