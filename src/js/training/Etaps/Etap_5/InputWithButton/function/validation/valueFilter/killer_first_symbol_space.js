
export const killer_first_symbol_space = ( value ) => {
    
    let res = '';
    if( value[0] === ' ' ){
        for ( let i = 1; i < value.length; i++ ){
            res += value[i];
        }
    }else{
        res = value;
    };

    return res;

};