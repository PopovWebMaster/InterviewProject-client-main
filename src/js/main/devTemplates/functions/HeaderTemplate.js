import React from 'react';
import { Component } from 'react';

export default class HeaderTemplate extends Component{

    render(){
		return (
            <>
                <div id="head_wrap">
                    <span id="menu_logo" className="icon-menu" ></span>
                    <hgroup>
                        <h1>От ноля до 10 000</h1>
                        <h2>english words</h2>
                    </hgroup>
                    <img src="/assets/img/flag-icon.png" alt="" title="" />
                </div>
            </>
        )
    }

};