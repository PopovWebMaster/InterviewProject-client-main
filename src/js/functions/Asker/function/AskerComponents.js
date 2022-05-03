import { get_a_mixed_array } from './../../get_a_mixed_array.js';
import { isset } from './../../isset.js';


export default class AskerComponents{

    constructor( obj ){

        this.words =        get_a_mixed_array( obj.words );
        this.cycleLength =  obj.cycle_length;
        this.isFinish =     false;
        this.nextIndex =    0;
        this.currentValueFrom_Scale = 0;
        this.arrOfCells;
        this.stepInCircle = 0; //  шагает по this.arrOfCells - это индекс в this.arrOfCells
        this.maxProgress =  3; // максимальная оценка в this.arrOfCells[this.stepInCircle].progress
        
        this.stop_trening = this.stop_trening.bind(this);
        this.get_an_arrOfCells = this.get_an_arrOfCells.bind(this);
        this.get_the_next_word_from_the_array = this.get_the_next_word_from_the_array.bind(this);
        this.increment_nextIndex = this.increment_nextIndex.bind(this);
        this.increment_stepInCircle = this.increment_stepInCircle.bind(this);
        this.take_the_next_step = this.take_the_next_step.bind(this);
        this.set_progress = this.set_progress.bind(this);
        this.replace_the_word_if_full_progress = this.replace_the_word_if_full_progress.bind(this);
        this.check_for_the_end_of_the_training = this.check_for_the_end_of_the_training.bind(this);
        this.is_arrOfCells_empty = this.is_arrOfCells_empty.bind(this);
        this.select_new_stepInCircle = this.select_new_stepInCircle.bind(this);
        this.get_currentValue_from_scale = this.get_currentValue_from_scale.bind(this);
        this.get_countFullCells_from_arrOfCells = this.get_countFullCells_from_arrOfCells.bind(this);


        this.arrOfCells =   this.get_an_arrOfCells( this.cycleLength );
    }

    stop_trening(){
        this.isFinish = true;
    }

    get_an_arrOfCells( cycleLength ){
        let arr = [];
        for( let i = 0; i < cycleLength; i++ ){
            arr.push({
                progress: 0,
                requested_word: this.get_the_next_word_from_the_array()
            });
        };
        return arr;
    }

    get_the_next_word_from_the_array(){
        let obj;
        if( this.nextIndex !== false ){
            obj = this.words[ this.nextIndex ];
            this.increment_nextIndex();
        }else{
            obj = false;
        };
        return obj;
    }

    increment_nextIndex(){
        if( this.nextIndex !== false ){
            if( isset( this.words[ this.nextIndex + 1 ] )){
                this.nextIndex = this.nextIndex + 1;
            }else{
                this.nextIndex = false;
            };
        };
    }

    increment_stepInCircle(){

        let nextStep = this.stepInCircle + 1;

        if( isset( this.arrOfCells[ nextStep ] ) ){
            this.stepInCircle = nextStep;
        }else{
            this.stepInCircle = 0;
        };
    }

    select_new_stepInCircle(){
        this.increment_stepInCircle();
       
        for( let i = 0; i < this.arrOfCells.length; i++ ){
            let obj = this.arrOfCells[ this.stepInCircle ].requested_word;
            if( obj === false ){
                this.increment_stepInCircle();
            }else{
                break;
            };
        };
    }

    take_the_next_step( assessment ){
        this.set_progress( assessment );
        this.replace_the_word_if_full_progress();

        this.check_for_the_end_of_the_training();

        if( !this.isFinish ){
            this.select_new_stepInCircle();
        };
    }

    set_progress( assessment ){
        // assessment принимает только true/false
        let progress = this.arrOfCells[ this.stepInCircle ].progress;
        if( assessment ){
            progress++;
        }else{
            if( progress !== 0 ){
                progress--;
            };
        };
        this.arrOfCells[ this.stepInCircle ].progress = progress;
    }

    replace_the_word_if_full_progress(){
        let progress  = this.arrOfCells[ this.stepInCircle ].progress;
        if( progress > this.maxProgress ){
            let obj = {
                progress: 0,
                requested_word: this.get_the_next_word_from_the_array(),
            };
            this.arrOfCells[ this.stepInCircle ] = obj;
        };
    }

    check_for_the_end_of_the_training(){

        if( this.nextIndex === false ){
            if( this.is_arrOfCells_empty() ){
                this.isFinish = true;
            };
        };

    }

    is_arrOfCells_empty(){
        let isEmpty = true;
        for( let i = 0; i < this.arrOfCells.length; i++ ){
            let requested_word = this.arrOfCells[i].requested_word;
            if( requested_word !== false  ){
                isEmpty = false;
                break;
            };
        };
        return isEmpty;
    }

    get_currentValue_from_scale(){
        let totalAmount = this.words.length;
        let currentValue;

        if( this.nextIndex !== false ){
            currentValue = this.nextIndex - this.cycleLength;

        }else{
            let countCells = this.get_countFullCells_from_arrOfCells();
            currentValue = totalAmount - countCells;
        };

        return currentValue;
    }

    get_countFullCells_from_arrOfCells(){
        let countCells = 0;
        for( let i = 0; i < this.arrOfCells.length; i++ ){
            let requested_word = this.arrOfCells[i].requested_word;
            if( requested_word !== false  ){
                countCells++;
            };
        };
        return countCells;
    }

   










    
};



