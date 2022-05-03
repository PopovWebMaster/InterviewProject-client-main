
export default class TestsMethods{
    constructor(obj){
        // this.obj = obj;

        this.max_circle_length

        this.test_incrementNextIndex = this.test_incrementNextIndex.bind(this);
    }


    test_incrementNextIndex(){

        let guargCount = 0;

        let resultObj = [];

        while ( !this.isFinish ) {

            let obj = {
                step: this.step,
                nextIndex: this.nextIndex,
                currentValue_scale: this.get_currentValue_from_scale(),
                totalAmount_scale: this.totalAmount_scale,
                question: this.getQuestion(),
            };
            
            this.incrementNextIndex();


            resultObj.push( obj );

            if( guargCount > this.max_circle_length ){
                console.error('Ошибка в цикле');
                break;
            }else{
                guargCount++;
            };
        };

        console.groupCollapsed('incrementNextIndex');
        // console.group('incrementNextIndex');
        console.table(resultObj);
        console.groupEnd();

    }

    

    test(){
        this.max_circle_length = (this.words.length + 1) * 2 + 100;

        console.group('mixed words');
        console.table(this.words);
        console.groupEnd();

        this.test_incrementNextIndex();

        console.groupCollapsed('пустой userProgress');
        console.table(this.userProgress);
        console.groupEnd();

    }




};