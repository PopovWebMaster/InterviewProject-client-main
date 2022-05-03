import React from 'react';
import { Component } from 'react';

import HomePageTemplate from './HomePageTemplate.js';

export default class MainTemplate extends Component{

    constructor(props){
        super(props);

        //this.state = {};

        // this.createSection = this.createSection.bind(this);
    }

    // createSection(){
    //     if( this.props.section_id_name === 'home' ){
    //         return (
    //             <section id='homePage'>
    //                 <HomePageTemplate />
    //             </section>
    //         );
    //     }else{
    //         return (
    //             <section id = { this.props.section_id_name }></section>
    //         );
    //     };
    // }


    render(){
		if( this.props.section_id_name === 'home' ){
            return (
                <section id = 'homePage'>
                    <HomePageTemplate />
                </section>
            );
        }else{
            return '';
        };
    }

};


// {/* <aside id="enter">
//                     <div id="enter_page" >
//                         <a className = 'enter_exit' id='but_exit_menu' href = 'http://en-v6/login'>Вход/Регистрация</a>
//                     </div>
//                 </aside> */}

//                 <aside className = 'body_auth'  >{/*enter */}
// 					<div className = 'body_auth_wrap' >{/*enter_page */}
//                         <span className = "body_auth_us_name">sasha</span>{/*us_name */}
//                         <span className = 'body_auth_icon'>
//                             <span className = 'icon-user'></span>
//                         </span>
//                         <a 
//                             className = 'body_auth_button' 
//                             href = 'http://en-v6/logout'
//                         >Выход</a>{/*enter_exit */}
// 			        </div>
// 				</aside>