export const adds_a_slovo_to_a_number = ( sum_words = undefined ) => {
    if( sum_words === undefined){
        return '0 слов';
    }
    //let countResUs = 0;
    

    let lastSimb1 = String( sum_words ).slice(-1);
    lastSimb1 = Number( lastSimb1 );
    
    let lastSimb2 = String( sum_words ).slice(-2);
    lastSimb2 = Number( lastSimb2 );
    
    let slovoStr;
    if( lastSimb1 === 0 || ( lastSimb2 > 10 && lastSimb2 < 20 ) ){ slovoStr = ' слов'; }// *0 или от 11 до 19
    else if( lastSimb1 === 1 && lastSimb2 !== 11 ){ slovoStr = ' слово'; }// *1 и не равно 11
    else if( lastSimb1 > 1 && lastSimb1 < 5 ){ slovoStr = ' слова'; }// от *2 до *4 
    else if( lastSimb1 > 4 && lastSimb1 < 10 ){ slovoStr = ' слов'; }// от *5 до *9
    
    return sum_words + slovoStr;

};