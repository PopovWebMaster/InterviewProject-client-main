import { ETAP_NAME } from './../settings.js';

export const get_title_of_etap = (etap_name) => {
    let titles = {
        [ ETAP_NAME[1] ]: 'Чтение / произношение',
        [ ETAP_NAME[2] ]: 'Зубрилка',
        [ ETAP_NAME[3] ]: 'Спрашиватель аудио',
        [ ETAP_NAME[4] ]: 'Спрашиватель текстовый',
        [ ETAP_NAME[5] ]: 'Итоговый тест',
    };
    return titles[ etap_name ];
};


