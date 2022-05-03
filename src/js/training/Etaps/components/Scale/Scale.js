import React, { Component } from 'react';
import './Scale.scss';

export default class Scale extends Component {

    // totalAmount
    // currentValue

    constructor(props){
        super(props);
        //this.state = {}

        this.getProcentValue = this.getProcentValue.bind(this);
        this.calculateProcent = this.calculateProcent.bind(this);

        this.getCssFromScaleValue = this.getCssFromScaleValue.bind(this);
        this.getCssFromScalePosition = this.getCssFromScalePosition.bind(this);

        this.setScalePosition = this.setScalePosition.bind(this);

    }

    calculateProcent( currentValue ){
        let totalAmount = this.props.totalAmount;
        let result = Math.floor( (currentValue * 100)/totalAmount );  
        return result;
    }

    getProcentValue( currentValue ){
        let procent = this.calculateProcent( currentValue );
        return `${procent}%`;
    }

    getCssFromScalePosition( currentValue ){
        let width = this.getProcentValue( currentValue );
        return `#scale .scale_hr .hr_progress {width: ${width}}`;
    }

    getCssFromScaleValue( currentValue ){

        let procent = this.calculateProcent( currentValue );
        let widthSpanProcentValue = document.querySelector('#scale .scale_procent span').offsetWidth;
        let widthHrScaleTotal = document.querySelector('#scale .scale_hr hr.hr_background').offsetWidth;

        let widthSpanAsAProcentage = ( widthSpanProcentValue * 100 )/widthHrScaleTotal;
        let marginLeftProcentValue;
        let halfWidthSpan = widthSpanAsAProcentage / 2;

        if( procent < halfWidthSpan ){
            marginLeftProcentValue = '0%';
        }else if( ( procent + halfWidthSpan ) < 100 ){
            marginLeftProcentValue =  `calc( ${procent}% - ${widthSpanProcentValue/2}px )`;
        }else if( ( procent + halfWidthSpan ) === 100 || ( procent + halfWidthSpan ) > 100 ){
            marginLeftProcentValue =  `calc(100% - ${widthSpanProcentValue}px)`;
        };

        return `#scale .scale_procent span {margin-left: ${marginLeftProcentValue};}`;
    }

    setScalePosition( currentValue ){
        let style_span = this.getCssFromScaleValue( currentValue );
        let style_hr_background = this.getCssFromScalePosition( currentValue );

        const sheet = new CSSStyleSheet();
        sheet.replaceSync( `${style_span} ${style_hr_background}`);
        document.adoptedStyleSheets = [sheet];
    }

    componentDidMount(){
        this.setScalePosition( this.props.currentValue );
    }

    componentDidUpdate(){
        this.setScalePosition( this.props.currentValue );
    }


    render(){
        return(
            <div id="scale">
                <div className="scale_procent">
                    <span 
                        >{ this.getProcentValue( this.props.currentValue ) }
                    </span>
                </div>

                <div className="scale_hr">
                    <hr className="hr_background" />
                    <hr className="hr_progress" />
                </div>
            </div>

        );
    }


};

