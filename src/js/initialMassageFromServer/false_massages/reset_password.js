export const reset_password_false_massage = {
    section_id_name: CONSTANTS.PAGES.RESET_PASSWORD,

    href_for_post: 'http://en-v6/reset-password',

    inputMaxLength: {
        name: 5,
        email: 5,
        secret_code: 5,
        password: 5,
        password_confirmation: 5,
    },

    action: {
        checkField: 'checkField',
        tryToAccept: 'tryToAccept'
    },

    email: {
        value: '',
        isError: false,
        errorMassage: '',
    },

    secret_code: { 
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