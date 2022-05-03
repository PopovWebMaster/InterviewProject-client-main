


export const define_the_language = ( str ) => {

    let language;
// language = 'not defined';

    let isEn = /[a-zA-Z]/.test(str);
    let isNum = /[0-9]/.test(str);
    let isRu = /[абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]/.test(str);

    // if( isEn === isRu ){
    //     if( isEn || isRu ){
    //         // присутствуют и русские и английские буквы
    //         language = 'not defined';
    //     }else if( !isEn || !isRu ){

    //     };
        
    // }else{
    //     if(){

    //     }

    // };

    console.log( 'str', str);
    console.log( 'isEn', isEn);
    console.log( 'isRu', isRu);
    console.log( '');


};