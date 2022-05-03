
export const killer_of_extra_spaces = ( str ) => {
    let str_trim = str.trim();
    let to_be_continued = true;
    let result;

    while ( to_be_continued ) {
        let num_pos = str_trim.indexOf('  '); // -1, не найдено
        if( num_pos === -1 ){
            to_be_continued = false;
            result = str_trim;

        }else{
            str_trim = str_trim.replace('  ', ' ');

        }; 
    };

    return result;
};


