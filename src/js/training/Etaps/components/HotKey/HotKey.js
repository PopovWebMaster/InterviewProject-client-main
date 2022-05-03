import React from 'react';
import { Component } from 'react';
import './HotKey.scss';

import { is_the_device_a_computer } from './../../../../functions/is_the_device_a_computer.js';

import { hotKeyController as controller } from './function/hotKeyController.js';

export const hotKeyController = controller;

export default class HotKey extends Component{

    constructor(props){
        super(props);

        // this.state = {};

    }

    render(){
		return (
            <div 
                className = 'hotKey'
                style = {{ display: is_the_device_a_computer()? 'block': 'none' }}
            >
                <span>
                    { this.props.keyName }
                </span>  
            </div>
        )
    }

};