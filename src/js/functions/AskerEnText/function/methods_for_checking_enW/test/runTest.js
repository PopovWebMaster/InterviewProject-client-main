import { CLASS_NAME_TEXT_TRENING } from './../../../../../training/Etaps/Etap_4/config.js';
import { CLASS_NAME } from './../../../../../training/Etaps/Etap_4/TextTrainingDisplay/config.js';
import { CLASS_NAME as CLASS_NAME_input } from './../../../../../training/Etaps/Etap_4/InputWithButton/config.js';

let words;

export const runTest = ( wordsList ) => {
    words = wordsList;

    let style = `
        font-size: 2em;
        margin: 1em auto;
        background-color: #e37a00;
        width: 20%;
        border: 1px solid #ad5d00;
        border-radius: 0.5em;
        cursor: pointer;
        text-align: center;
        color: #ffffff;
    `;

    let testDiv = document.createElement('div');
    testDiv.className = 'test';

    let buttonStart = document.createElement('div');
    buttonStart.className = 'test_buttonStart';
    buttonStart.innerText = 'Start';
    buttonStart.style.cssText = style;
    buttonStart.addEventListener( 'click', start );

    let buttonStop = document.createElement('div');
    buttonStop.className = 'test_buttonStop';
    buttonStop.innerText = 'Stop';
    buttonStop.style.cssText = style;
    buttonStop.addEventListener( 'click', stop );

    testDiv.appendChild( buttonStart );
    testDiv.appendChild( buttonStop );

    let treningElem = document.getElementsByClassName( CLASS_NAME_TEXT_TRENING )[0];
    treningElem.appendChild(testDiv);

};


let timer;

function start(){
    console.dir(words);
    

    let button = document.getElementsByClassName( CLASS_NAME_input.INPUT_BUTTON )[0].children[0].children[0].children[1];

    timer = setInterval( () => {

        console.dir(runTest.isFinish());

        if( runTest.isFinish() ){
            clearInterval(timer);

            let testElem = document.getElementsByClassName('test')[0];
            testElem.remove();

        }else{
            let ruW = document.getElementsByClassName( CLASS_NAME.REQUESTED_WORD )[0].children[0].innerText;
            
            let enW;
            for( let i = 0; i < words.length; i++ ){
                if( words[i].ruW === ruW ){
                    enW = words[i].enW
                    break;
                };
            };

            let input = document.getElementsByClassName( CLASS_NAME_input.INPUT_BUTTON )[0].children[0].children[0].children[0];

            input.value = enW;
            for (var key in input) {
                if (key.startsWith('__reactEventHandlers$')) {
                    input[key].onChange && input[key].onChange({ target: input })
                }
            };

            setTimeout(() => {
                button.click();

            }, 300 );

        };     

    },500 );

    

};

function stop(){

    clearInterval(timer);
}



















