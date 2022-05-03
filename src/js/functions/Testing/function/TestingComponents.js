import { get_a_mixed_array } from './../../get_a_mixed_array.js';
import { isset } from './../../isset.js';

import TestsMethods from './tests/TestsMethods.js';
import { create_arr_user_progress } from './create_arr_user_progress.js';


export default class TestingComponents extends TestsMethods{
    constructor(props){
        super(props);

        this.words =        get_a_mixed_array( props.words );
        this.min_sum_words = props.min_sum_words;
        this.userProgress = create_arr_user_progress( props.words );

        this.step = 1;
        this.isFinish = false;
        this.nextIndex = 0;

        this.currentValueFrom_Scale = 0;
        this.totalAmount_scale = this.words.length * 2;

        this.incrementNextIndex = this.incrementNextIndex.bind(this);
        this.get_currentValue_from_scale = this.get_currentValue_from_scale.bind(this);
        this.set_user_progress = this.set_user_progress.bind(this);
 
        
        
    }

    incrementNextIndex(){

        if( isset(this.words[this.nextIndex + 1]) ){
            this.nextIndex = this.nextIndex + 1;

        }else{
            if( this.step === 1 ){
                this.nextIndex = 0;
                this.step = 2;
            }else if( this.step === 2 ){
                this.isFinish = true;
                
            };
        };

    }

    get_currentValue_from_scale(){
        let value;

        if( this.step === 1 ){
            value = this.nextIndex;

        }else if( this.step === 2 ){
            if( !this.isFinish ){
                value = this.words.length + this.nextIndex;
            }else{
                value = this.words.length + this.nextIndex + 1;
            };

        };

        return value;
    }

    set_user_progress( analysisResult ){

        if( this.step === 1 ){
            this.userProgress[ this.nextIndex ].enW = analysisResult;

        }else if( this.step === 2 ){
            this.userProgress[ this.nextIndex ].ruW = analysisResult;

        };

    }



};