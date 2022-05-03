import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './SelectEtapsPanel.scss';

import {    ETAP_NAME,
            CLASS_NAME_ICON_CANCEL_OF_TASK } from './../../settings.js';
import { get_title_of_etap } from './../../functions/get_title_of_etap.js';



export default class SelectEtapsPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeEtap: this.props.activeEtap,
            title: get_title_of_etap( this.props.activeEtap ) ,
            task: this.props.tasks[ this.props.activeEtap ]
        };

        this.getTask = this.getTask.bind(this);
        this.getClassName = this.getClassName.bind(this);
        this.clickEtap = this.clickEtap.bind(this);
        this.openTask = this.openTask.bind(this);
        this.closeTask = this.closeTask.bind(this);

       

    }

    getTask(){
        return this.props.tasks[ this.state.activeEtap ];
    }

    getClassName( activeEtap, etap_name ){
        return activeEtap === etap_name? 'activeLi': '';
    }

    clickEtap( etap_name ){
        this.setState({
            activeEtap: etap_name,
            title: get_title_of_etap( etap_name ),
            task: this.props.tasks[ etap_name ]
        });
        this.props.setActiveEtap( etap_name );
    }

    openTask(){
        let etapName = document.getElementById('task');
        etapName.style.display = 'flex';

    } 

    closeTask(){
        let etapName = document.getElementById('task');
        etapName.style.display = 'none';
    }

    render(){
		return (
            <>
               <div id='etaps'>
                    <div>
                        <span>Этапы:</span>
                        <ul>
                            <li 
                                className = { this.getClassName( this.state.activeEtap, ETAP_NAME[1] ) }
                                onClick = { ()=>{ this.clickEtap( ETAP_NAME[1] ); }}
                            >1
                            </li>
                            <li 
                                className = { this.getClassName( this.state.activeEtap, ETAP_NAME[2] ) }
                                onClick = { ()=>{ this.clickEtap( ETAP_NAME[2] ); }}
                            >2
                            </li>
                            <li 
                                className = { this.getClassName( this.state.activeEtap, ETAP_NAME[3] ) }
                                onClick = { ()=>{ this.clickEtap( ETAP_NAME[3] ); }}
                            >3
                            </li>
                            <li 
                                className = { this.getClassName( this.state.activeEtap, ETAP_NAME[4] ) }
                                onClick = { ()=>{ this.clickEtap( ETAP_NAME[4] ); }}
                            >4
                            </li>
                            <li 
                                className = { this.getClassName( this.state.activeEtap, ETAP_NAME[5] ) }
                                onClick = { ()=>{ this.clickEtap( ETAP_NAME[5] ); }}
                            >5
                            </li>
                        </ul>
                    </div>

                    <div id='etapName'>
                        <div 
                            onClick = { this.openTask }
                        >
                            <span className="etapNameHeader">{ this.state.title }</span>
                            <span className="taskOpen">Задание открыть</span>
                        </div>

                        <div id='task'>
                            <div>
                                <span 
                                    onClick = { this.closeTask }
                                    className = { CLASS_NAME_ICON_CANCEL_OF_TASK }
                                ></span>
                                <p>{ this.state.task }</p>
                            </div>
                        </div>
                    </div>

                </div>
                
               
            </>
        )
    }

};














