let createArrWithParts = ( sumParts ) => {
    let arr = [];
    for( let i = 0; i < sumParts; i++ ){
        arr.push( [] );
    };
    return arr;
};

let newPositionOfPart = 0;

let setNewPositionOfPart = ( sumParts ) => {
    if( newPositionOfPart < (sumParts - 1) ){
        newPositionOfPart++;
    }else{
        newPositionOfPart = 0;
    };
};

export const get_a_list_of_words_divided_into_parts = ( arrListWords, sumParts ) => {

    let arrWithParts = createArrWithParts( sumParts );

    arrListWords.forEach( ( item ) => {
        arrWithParts[ newPositionOfPart ].push( item );
        setNewPositionOfPart( sumParts );
    });

    return arrWithParts;
};
