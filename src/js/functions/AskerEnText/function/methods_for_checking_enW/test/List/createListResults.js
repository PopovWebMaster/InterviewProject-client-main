import {  TEST_LIST, CORRECT_WORD } from './../testList.js';
import { CLASS_NAME } from './../../../../../../training/Etaps/Etap_4/TextTrainingDisplay/config.js';
import { get_result_of_checking_enW } from './../../../get_result_of_checking_enW.js';
import { isset } from './../../../../../../functions/isset.js';

export const createListResults = () => {

    let correct_word = CORRECT_WORD;

    let div_TrainingDisplay = document.createElement('div');
    
    div_TrainingDisplay.style.cssText = `
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        height: auto;
        font-size: 0.7em;
        opacity: 1;
    `;

    let div_resultList = document.createElement('div');
    div_resultList.style.opacity = '1';
    div_resultList.style.cssText = `
        width: 84%;
        margin: 0 auto;
        position: relative;
        font-size: 1em;
        opacity: 1;
    `;

    let ul_test = document.createElement('ul');

    TEST_LIST.forEach( ( item ) => {
        let user_word = item;

        let li = document.createElement('li');
        li.style.cssText = `
            width: 100%;
            height: 1.5em;
            color: #ababab;
            text-align: center;
            line-height: 1.5em;
            font-size: 1.5em;
            font-family: 'Molengo', sans-serif;
            opacity: 1;

            overflow: hidden;
        
        `;


        let result = get_result_of_checking_enW({
            enW: correct_word,
            userEnW: user_word
        });

        let span = result.html_enW;

        li.innerHTML = span;

        let spanOk = document.createElement('span');
        spanOk.innerText = result.ok? 'ok - true': 'ok - false';
        spanOk.style.cssText = `
            color: #000000;
            font-size: 0.7em;
            margin-left: 2em;
        `;
        li.appendChild(spanOk);

        if( isset( li.querySelector('span.ok_hidden' )) ){
            for( let i = 0; i < li.querySelectorAll('span.ok_hidden' ).length; i++ ){
                let span_ok_hidden = li.querySelectorAll('span.ok_hidden' ); 
                span_ok_hidden[i].style.cssText = `
                    opacity: 0;
                `;
            };

        };

        if( isset( li.querySelector('span.icon-ok-1' )) ){
            for( let i = 0; i < li.querySelectorAll('span.icon-ok-1' ).length; i++ ){
                let span_icon_ok = li.querySelectorAll('span.icon-ok-1');
                span_icon_ok[i].style.cssText = `
                    padding-left: 5px;
                    color: green;
                `;
            };
            
        };

        if( isset( li.querySelector('span.e_4_red' )) ){
            for( let i = 0; i < li.querySelectorAll('span.e_4_red' ).length; i++ ){
                let span_e_4_red = li.querySelectorAll('span.e_4_red');
                span_e_4_red[i].style.cssText = `
                    color: red;
                `;
            };
            
        };

        if( isset( li.querySelector('span.correctLetterWithError' )) ){
            for( let i = 0; i < li.querySelectorAll('span.correctLetterWithError' ).length; i++ ){
                let span_correctLetterWithError = li.querySelectorAll('span.correctLetterWithError');
                span_correctLetterWithError[i].style.cssText = `
                    color: #745f5f;
                `;
            };
            
        };

        ul_test.appendChild( li );

    });

    div_resultList.appendChild( ul_test );
    div_TrainingDisplay.appendChild( div_resultList );

    let divTest = document.getElementById('test');
    divTest.appendChild( div_TrainingDisplay );

};