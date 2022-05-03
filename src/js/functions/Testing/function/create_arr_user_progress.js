
export const create_arr_user_progress = ( words ) => {

    let length = words.length;
    let arr = [];
    for( let i = 0; i < length; i++ ){
        arr.push({
            enW: undefined,
            ruW: undefined,
        });
    };
    return arr;
};