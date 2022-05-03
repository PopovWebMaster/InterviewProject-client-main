let isGood = true;
let timePause = 300;

export const isGoodClick = () => {

    if( isGood ){
        isGood = false;
        setTimeout( () => {
            isGood = true;
        }, timePause );

        return true;
    }else{
        return false;
    };

};