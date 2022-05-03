export const get_a_mixed_array = ( arr ) => {
    let arr_new = [];
    let arr_storage = [];
        
    for(let i = 0; i < arr.length; i++){
        let rand;
        do{
            rand = getRandom(0, arr.length);
        }while (arr_storage[rand]);
        arr_new[rand] = arr[i];
        arr_storage[rand] = true;
    };

    function getRandom( min, max ){
        return Math.floor(Math.random() * (max - min)) + min;
    };
    
    return arr_new;
};



