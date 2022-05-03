import React from 'react';
import { Component } from 'react';

import { get_permission_to_show_the_auth_panel } from './get_permission_to_show_the_auth_panel.js';

export default class NavTemplate extends Component{

    constructor(props){
        super(props);

        this.getMenuAuth = this.getMenuAuth.bind(this);

    }

    getMenuAuth(){
        if( get_permission_to_show_the_auth_panel() ){
            return (
                <div className = 'menu_auth'>

                    <div className = 'menu_user_info'>
                        <span className = 'menu_user_name'>Василиск</span>
                        <span className = 'icon'><span className = 'icon-user'></span></span>
                    </div>

                    <div className = 'menu_auth_button'>
                        <a href = 'http://en-v6/login' >
                            Выход
                        </a> 
                    </div>

                </div>

            );
        }else{
            return '';

        };

    }

    render(){
		return (
            <>{/*<nav id = 'leftMenu'>*/}

                <div className = 'close_button'>
                    <div>
                        <span className = "icon-left-open-big"></span>
                    </div>
                </div>

                <div className = 'menu_wrap'>

                    { this.getMenuAuth() }

                    <ul className = 'menu_items'>

                        <li >
                            <a  
                                className = 'itemMenu' 
                                id =        'menu_welcome' 
                            >
                                Главная
                            </a>
                        </li>

                        <li>
                            <a 
                                className = 'itemMenu' 
                                id =        'menu_how_to_learns' 
                            >
                                Как учиться?
                            </a>
                        </li>

                        <li>
                            <a 
                                className = 'itemMenu' 
                                id =        'menu_important' >
                                    Что важно?
                            </a>
                        </li>

                        

                    </ul>

                    <div className = 'menu_start_button'>
                        <div>
                            <a href = 'http://en-v6/dictionaries'>Выбрать словарь</a>
                        </div>
                    </div>
                </div>
            {/*</nav>*/}
            </>
        )
    }

};