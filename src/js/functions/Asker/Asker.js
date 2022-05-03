import AskerComponents from './function/AskerComponents.js'; 

    // Началом работы спрашивателя является его создание через оператор new
    // то-есть, что бы начать спрашивать заново, нужно заново создать экземпляр класса Asker

    // Экземпляр класса в момент создания должен принять:
    // this.Asker = new Asker({
    //     words:          this.props.words,   // объект со словами
    //     cycle_length:   5,                  // величина круга повтора слов до их полного усвоения
    // });


export default class Asker extends AskerComponents{

    constructor(props){
        super(props);


        this.console = this.console.bind(this);

        this.remember = this.remember.bind(this);
        this.notRemember = this.notRemember.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.getScaleParams = this.getScaleParams.bind(this);
        this.trainingInProcess = this.trainingInProcess.bind(this);


        this.consoleShow = false;
        if( this.consoleShow ){
            console.dir(this.words);
            this.console();
        };

    }

    remember(){
        this.take_the_next_step( true );
        this.console();
    }

    notRemember(){
        this.take_the_next_step( false );
        this.console();

    }

    getQuestion(){
        return  this.arrOfCells[ this.stepInCircle ].requested_word;
    }

    getScaleParams(){
        return {
            currentValue: this.get_currentValue_from_scale(),
            totalAmount: this.words.length,
        };
    }

    trainingInProcess(){
        return !this.isFinish;

    }


    console(){

        if( !this.consoleShow ){
            return;
        };

        let params = {
            cycleLength: this.cycleLength,
            nextIndex: this.nextIndex,
            //stepInCircle: this.stepInCircle,
            isFinish: this.isFinish
        };

        let arrCells = [];
        for( let i = 0; i < this.arrOfCells.length; i++ ){
            arrCells.push( {
                progress: this.arrOfCells[i].progress,
                obj: this.arrOfCells[i].requested_word,
                ruW: this.arrOfCells[i].requested_word.ruW
            });
        };

        console.table(params);
        // console.table(this.arrOfCells);
        console.log('stepInCircle', this.stepInCircle);
        console.table(arrCells);

        console.table(this.getScaleParams()); 
        // console.table(this.getQuestion());

        console.log('');
        console.log('');
        console.log('');

       
    }






    
};



