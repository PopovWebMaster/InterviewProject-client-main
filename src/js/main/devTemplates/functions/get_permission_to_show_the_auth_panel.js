

export const get_permission_to_show_the_auth_panel = () => {
    let result = true;

    switch( ACTIVE_PAGE ) {
    
        case CONSTANTS.PAGES.REGISTRATION: 
        case CONSTANTS.PAGES.AUTHORIZATION:
        case CONSTANTS.PAGES.RESET_PASSWORD:          
            result = false;
            break;

    };

    return result;

};