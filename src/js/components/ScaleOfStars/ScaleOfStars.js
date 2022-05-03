//import './scss/home.scss';
import React from 'react';
//import ReactDOM from 'react-dom';
import { Component } from 'react';
import './ScaleOfStars.scss';

import { controller } from './controller.js';
import { CLASS_NAME } from './config.js';

export const ScaleOfStarsController = {

    update( params ){

        let sum_words =   params.sum_words;
        let user_result = params.user_result;

        controller.update({
            sum_words,
            user_result
        });
    },
    
};


export default class ScaleOfStars extends Component{

    //     должен принять в свойствах:
    //          this.props.sum_stars, 
    //          this.props.sum_words, 
    //          this.props.user_result

    constructor(props){
        super(props);

        this.createListStars = this.createListStars.bind(this);

    }

    createListStars( sum_stars, sum_words, user_result ){

        let stars = controller.calculate_the_number_of_light_stars({
            sum_stars,
            sum_words,
            user_result
        });

        let arr = [];
        for( let i = 0; i < sum_stars; i++ ){
            if( i < stars ){
                arr.push( true );
            }else{
                arr.push( false );
            };
        };

        let li = arr.map(( item, index )=>{
            if( item ){
                return (
                    <li 
                        className = { CLASS_NAME.LIGHT }
                        key = {index}
                    >
                        <span className = { CLASS_NAME.ICON_STAR_EMPTY }></span>
                    </li>
                );
            }else{
                return (
                    <li 
                        key = {index}
                    >
                        <span className = { CLASS_NAME.ICON_STAR }></span>
                    </li>
                );
            };
        });

        return li;
    }

    render(){
        return (
            <ul className = { CLASS_NAME.SCALE_OF_STARS }>
                { this.createListStars( this.props.sum_stars, this.props.sum_words, this.props.user_result ) }
            </ul>
        );
    }
};