import React from 'react';
import { Component } from 'react';
import './InputWithButton.scss';

import { CLASS_NAME } from './config.js';
import { controller as inputWithButtonController } from './controller.js';

import { add_event_keydown_start } from './function/add_event_keydown_start.js';
import { remove_event_keydown_start } from './function/remove_event_keydown_start.js';

import Hitlist, { hitlistController } from './Hitlist/Hitlist.js';

import { validation_input_value } from './function/validation/validation_input_value.js';

export default class InputWithButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            isError: false,
            errorMassage: '',
        };

        this.isKeyEnterUp = true;
        this.isGoodKeyPress = true;

        this.setValue = this.setValue.bind(this);
        this.getButtonValue = this.getButtonValue.bind(this);
        this.actionEnter = this.actionEnter.bind(this);
        this.actionSetValue_from_hitlist = this.actionSetValue_from_hitlist.bind(this);
        this.openErrorMassage = this.openErrorMassage.bind(this);
        this.closeErrorMassage = this.closeErrorMassage.bind(this);
        this.keydown = this.keydown.bind(this);
        this.keyup = this.keyup.bind(this);

        this.instructionsEnter_down = this.instructionsEnter_down.bind(this);
        this.instructionsEnter_up = this.instructionsEnter_up.bind(this);
        this.instructionsArrow_right = this.instructionsArrow_right.bind(this);
        this.instructionsArrow_top = this.instructionsArrow_top.bind(this);
        this.instructionsArrow_bottom = this.instructionsArrow_bottom.bind(this);


    }

    setValue( e ){

        let result = validation_input_value({
            value:  e.target.value,
            step: this.props.step,
        });

        this.setState({
            value: result.value
        });

        if( result.isError ){
            this.openErrorMassage( result.errorMassage );

        }else{
            this.closeErrorMassage();

        };

    }

    getButtonValue( test_in_process ){
        if( test_in_process ){ 
            return ( <span className = { CLASS_NAME.BUTTON.ENTER }></span> );
        }else{
            return ( <span>Начать тестирование</span> );
        };
    }

    actionEnter(){
        this.props.action( this.state.value );

        this.setState({
            value: ''
        });
        inputWithButtonController.setFocus();
    }

    actionSetValue_from_hitlist( value ){
        this.setState({
            value: value
        });
        inputWithButtonController.setFocus();
    }

    instructionsEnter_down( e ){

        let hutlist_is_selected = hitlistController.item_is_selected();

        if( hutlist_is_selected ){
            let word_txt = hitlistController.get_word_txt_of_selected_element();
            this.setState({
                value: word_txt
            });
            hitlistController.to_remove_all_selections();
        }else{
            this.actionEnter();
            let button = document.querySelector( `.${CLASS_NAME.BORDER_WRAP} div` );
            button.classList.add( CLASS_NAME.BUTTON.HOVER );
        };
  
    }

    instructionsEnter_up( e ){
        let button = document.querySelector( `.${CLASS_NAME.BORDER_WRAP} div` );
        button.classList.remove( CLASS_NAME.BUTTON.HOVER );
    }

    instructionsArrow_right( e ){
        if( this.props.test_in_process ){
            e.preventDefault();
            let arrowValue = hitlistController.get_word_txt_of_pseudo_placeholder();
            this.setState({
                value: arrowValue
            });
        };
    }

    instructionsArrow_top( e ){
        if( this.props.test_in_process ){
            e.preventDefault();
            hitlistController.select_top_item();
        };
    }

    instructionsArrow_bottom( e ){
        if( this.props.test_in_process ){
            e.preventDefault();
            hitlistController.select_bottom_item();
        };
    }

    keydown( e ){
        if( this.isKeyEnterUp ){
            if( e.which === 13 ){   // Enter
                this.instructionsEnter_down( e );
            };

            if( e.which === 39 ){   // стрелка вправо
                this.instructionsArrow_right( e );
            }; 

            if( e.which === 38 ){   // стрелка вверх
                this.instructionsArrow_top( e );
            }; 

            if( e.which === 40 ){   // стрелка винз
                this.instructionsArrow_bottom( e );
            }; 
            this.isKeyEnterUp = false;
        };

    }

    keyup( e ){
        if( !this.isKeyEnterUp ){
            if( e.which === 13 ){
                this.instructionsEnter_up( e );
            };

            this.isKeyEnterUp = true; 
        };
        
    }

    openErrorMassage( massage ){
        this.setState({
            isError: true,
            errorMassage: massage
        });
    }

    closeErrorMassage(){
        this.setState({
            isError: false
        });
        setTimeout( () => {
            this.setState({
                errorMassage: ''
            });
        }, 500); 
    }

    componentDidMount(){
        inputWithButtonController.setInitialStyle();
        add_event_keydown_start( this.actionEnter );
    }

    componentWillUnmount(){
        remove_event_keydown_start();
    }



    render(){
		return (
            <div className = { CLASS_NAME.INPUT_BUTTON }>
                <div className = { CLASS_NAME.WRAP }>

                    <div className = { CLASS_NAME.BORDER_WRAP }>
                        <input  
                            type =          "text" 
                            placeholder =   "" 
                            maxLength =     "250"
                            autoComplete =  "off"
                            onChange =      { this.setValue }
                            value =         { this.state.value }
                            onKeyDown =     { this.keydown }
                            onKeyUp =       { this.keyup }
                            
                        />

                        <div
                            onClick = { this.actionEnter }
                        >
                            { this.getButtonValue( this.props.test_in_process ) }
                        </div>

                    </div>  

                    <Hitlist 
                        words =             { this.props.words }
                        step =              { this.props.step }
                        test_in_process =   { this.props.test_in_process }
                        question =          { this.props.question }
                        value =             { this.state.value } 
                        actionSetValue =    { this.actionSetValue_from_hitlist }

                    />

                    <div className = { CLASS_NAME.ERROR.MASSAGE }>
                        <span className = { this.state.isError? CLASS_NAME.ERROR.OPEN: CLASS_NAME.ERROR.HIDE }>
                            { this.state.errorMassage }
                        </span>
                    </div>

                    
                    

                </div>
            </div>
        )
    }

};



