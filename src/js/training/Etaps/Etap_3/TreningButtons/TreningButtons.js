import React from 'react';
import { Component } from 'react';
import './TreningButtons.scss';

import HotKeyPanel from './../../components/HotKeyPanel/HotKeyPanel.js';
import TreningButton from './TreningButton/TreningButton.js';

export default class TreningButtons extends Component{

    constructor(props){
        super(props);
    }

    render(){
		return (<>
            <div id = 'treningButtons'>

                <TreningButton 
                    value =     { this.props.training_in_process? 'Легко вспомнил': 'Начать тренинг'  }  
                    className = 'icon-thumbs-up-alt'
                    action =    { this.props.training_in_process? this.props.actionRemember: this.props.actionStart }
                    keyName =   'A'
                    isActive =  { true }
                />

                <TreningButton 
                    value =     ''
                    className = 'icon-arrows-ccw'
                    action =    { this.props.actionRepeat }
                    keyName =   'S'  
                    isActive =  { this.props.training_in_process } 
                />

                <TreningButton 
                    value =     'Не вспомнил'
                    className = 'icon-thumbs-down-alt'
                    action =    { this.props.actionNotRemember }
                    keyName =   'D' 
                    isActive =  { this.props.training_in_process }
                />

            </div>

            <HotKeyPanel
                training_in_process = { this.props.training_in_process }
            />

        </>)
    }

};