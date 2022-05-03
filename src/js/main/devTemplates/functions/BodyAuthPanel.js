import React from 'react';
import { Component } from 'react';

import { get_permission_to_show_the_auth_panel } from './get_permission_to_show_the_auth_panel.js';

export default class BodyAuthPanel extends Component{

    constructor(props){
        super(props);

    }

    render(){

        if( get_permission_to_show_the_auth_panel() ){
            return (
                <>
                    {/* <aside id="enter">
                        <div id="enter_page" >
                            <a className = 'enter_exit' id='but_exit_menu' href = 'http://en-v6/login'>Вход/Регистрация</a>
                        </div>
                    </aside> */}

                    <aside className = 'body_auth'  >{/*enter */}
                        <div className = 'body_auth_wrap' >{/*enter_page */}
                            <span className = "body_auth_us_name">sasha</span>{/*us_name */}
                            <span className = 'body_auth_icon'>
                                <span className = 'icon-user'></span>
                            </span>
                            <a 
                                className = 'body_auth_button' 
                                href = 'http://en-v6/logout'
                            >Выход</a>{/*enter_exit */}
                        </div>
                    </aside>
                </>
            )
        }else{
            return <></>
        };
		
    }

};