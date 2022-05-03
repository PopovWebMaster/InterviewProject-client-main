
export const get_hitlist_arr = ( params ) => {

    let words =     params.words;
    // let question =  params.question;
    let value =     params.value.trim();
    let step =      params.step;

    let result = [];

    if( value !== undefined ){
        if( value.trim() !== '' ){
            if( value.length > 1 ){

                let matches = get_all_matches({
                    words,
                    step,
                    value,
                });

                result = sort({
                    matches,
                    value,
                });

                result = trimArr( result );

                result = result.reverse();

            };  
        };  
    };

    return result;
};


function get_all_matches( params ){
    let words =     params.words;
    let step =      params.step;
    let value =     params.value;

    let matches = [];

    for( let i = 0; i < words.length; i++ ){
        if( step === 1 ){
            let ruW = words[i].ruW;
            ruW = ruW.toLowerCase();
            let index = ruW.indexOf( value.toLowerCase() );
            if( index !== -1 ){
                matches.push( ruW );
            };

        }else if( step === 2 ){
            let enW = words[i].enW;
            enW = enW.toLowerCase();
            let index = enW.indexOf( value.toLowerCase() );
            if( index !== -1 ){
                matches.push( enW );
            };
        };
    };

    return matches;

};

function sort( params ){
    let matches = params.matches;
    let value =   params.value;

    let arr = [];

    for( let i = 0; i < matches.length; i++ ){
        let str = matches[i].toLowerCase();
        let index = str.indexOf( value.toLowerCase() );
        if( index === 0 ){
            arr.unshift( matches[i] );
        }else{
            arr.push( matches[i] );
        };
    };

    return arr;

};

function trimArr( arr ){
    let result = [];
    let maxLength = 7;

    for( let i = 0; i < arr.length; i++ ){
        if( i < maxLength ){
            result.push( arr[i] );
        }else{
            break;
        };
    };

    return result;

}












