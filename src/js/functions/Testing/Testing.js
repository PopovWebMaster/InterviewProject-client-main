import TestingComponents from './function/TestingComponents.js';
import { get_analysis_answer } from './function/get_analysis_answer.js';
import { isset } from './../isset.js';
import { adds_a_slovo_to_a_number } from './../adds_a_slovo_to_a_number.js';

export default class Testing extends TestingComponents{

    constructor(props){
        super(props);


        this.getQuestion = this.getQuestion.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.getScaleParams = this.getScaleParams.bind(this);
        this.testingInProcess = this.testingInProcess.bind(this);
        this.getStep = this.getStep.bind(this);
        
        this.getUserItogResult = this.getUserItogResult.bind(this);
        this.getResultMassage = this.getResultMassage.bind(this);



        // this.test();

    }


    getQuestion(){

        let question;

        if( this.step === 1 ){
            question = this.words[ this.nextIndex ].enW;
        }else if( this.step === 2 ){
            question = this.words[ this.nextIndex ].ruW;
        };

        return question;
 
    }

    acceptAnswer( answer ){

        let analysisResult = get_analysis_answer({
            words:      this.words,
            nextIndex:  this.nextIndex,
            step:       this.step,
            answer:     answer
        });

        this.set_user_progress( analysisResult );
        
        this.incrementNextIndex();

        // console.log( 'nextIndex', this.nextIndex );
        // console.log( 'question', this.getQuestion() );

    }

    getScaleParams(){
        return {
            currentValue: this.get_currentValue_from_scale(),
            totalAmount: this.totalAmount_scale,
        };
    }

    testingInProcess(){
        return !this.isFinish;

    }

    getStep(){
        return this.step;
    }

    getUserItogResult(){
        let result = 0;
        this.userProgress
        for( let i = 0; i < this.userProgress.length; i++ ){
            if( this.userProgress[i].enW && this.userProgress[i].ruW ){
                result++;
            };
        };
        return result;
    }

    getResultMassage(){
        let text;
        let userResult = this.getUserItogResult();

        if( userResult === 0 ){
            text = `
                Тестирование окончено. 
                Ваш результат ${adds_a_slovo_to_a_number( userResult )} из ${ this.words.length }. 
                Минимальный необходисый результат по данному словарю - ${adds_a_slovo_to_a_number( this.min_sum_words )}   
            `;
        }else{
            text = `
                Тестирование окончено. 
                Вы отлично усвоили ${adds_a_slovo_to_a_number( userResult )} из ${ this.words.length }. 
                Минимальный необходисый результат по данному словарю - ${adds_a_slovo_to_a_number( this.min_sum_words )}   
            `;
        };

        return text;
    }

    
    
};



