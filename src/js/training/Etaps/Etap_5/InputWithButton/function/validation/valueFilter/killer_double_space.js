
export const killer_double_space = ( value ) => {
    let res = value;
    while( true ){
        res = res.replace( new RegExp( '  ', 'g' ), ' ' );
        if( res.indexOf( '  ', 0 ) === -1 ){
            break;
        };
    };
    return res;
};