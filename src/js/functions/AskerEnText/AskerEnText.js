import Asker from './../Asker/Asker.js'; 
import { get_result_of_checking_enW } from './function/get_result_of_checking_enW.js';
import { runTest } from './function/methods_for_checking_enW/test/runTest.js'
import { runFullTest } from './function/methods_for_checking_enW/test/runFullTest.js';

const DEV_MODE = false; // Для отладки, включает и выключает отображение данных в консоли

export default class AskerEnText{

        //     принимает:

        // this.Asker = new Asker({
        //     words:          this.props.words,
        //     cycle_length:   this.props.cycle_length_in_the_training,
        // });


    constructor( params ){

        this.htmlEnW = '';

        this.getQuestion = this.getQuestion.bind(this);
        this.getScaleParams = this.getScaleParams.bind(this);
        this.trainingInProcess = this.trainingInProcess.bind(this);

        this.setUserEnW = this.setUserEnW.bind(this);
        this.getHtmlEnW = this.getHtmlEnW.bind(this);

        this.Asker = new Asker({
            words:          params.words,
            cycle_length:   params.cycle_length,
        });

        if( DEV_MODE ){ // нужно только для отладки 
            console.dir( params.words );
            runTest.isFinish = () => {
                return !this.trainingInProcess();
            };
            runTest( params.words );
            runFullTest();
        };

    }

    setUserEnW( userEnW ){

        let question = this.Asker.getQuestion();

        let res = get_result_of_checking_enW({
            enW: question.enW,
            userEnW: userEnW
        });

        if( res.ok ){
            this.Asker.remember();
        }else{
            this.Asker.notRemember();
        };

        this.htmlEnW = res.html_enW;

    }

    getHtmlEnW(){
        return this.htmlEnW;
    }

    getQuestion(){
        return this.Asker.getQuestion();
    }

    getScaleParams(){
        return this.Asker.getScaleParams();
    }

    trainingInProcess(){
        return this.Asker.trainingInProcess();
    }

};



