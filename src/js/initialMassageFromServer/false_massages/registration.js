export const registration_false_massage = {
    section_id_name: CONSTANTS.PAGES.REGISTRATION,
    
    href_for_post: 'http://en-v6/register',

    // href_to_reset_password: 'http://en-v6/register',
    href_to_login: 'http://en-v6/login',

    inputMaxLength: {
        name: 5,
        email: 5,
        password: 5,
        password_confirmation: 5,
    },

    action: {
        checkField: 'checkField',
        tryToAccept: 'tryToAccept'
    },

    name: { 
        value: '',
        isError: false,
        errorMassage: '',
    },

    email: {
        value: '',
        isError: false,
        errorMassage: '',
    },

    password: {
        value: '',
        isError: false,
        errorMassage: '',
    },

    password_confirmation: { 
        value: '',
        isError: false,
        errorMassage: '',
    },

};