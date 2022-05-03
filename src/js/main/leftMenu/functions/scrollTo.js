import { PREFIX_MENU_ITEMS } from './../config.js';

export const scrollTo = ( item_id ) => {

    let article_id = item_id.replace( PREFIX_MENU_ITEMS, '');
    article_id = article_id.trim();

    let article = document.getElementById( article_id );

    if( article !== null ){

        let scroll_pos = article.offsetTop;
        window.scrollTo({
            top: scroll_pos,
            behavior: "smooth"
        });
    };

    

};