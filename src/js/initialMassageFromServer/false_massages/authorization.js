export const authorization_false_massage = {
    section_id_name: CONSTANTS.PAGES.AUTHORIZATION,

    href_for_post: "http://en-v6/login",
    href_to_register: "http://en-v6/register",
    href_to_reset_password: "http://en-v6/reset-password",

    email: {value: "", isError: false, errorMassage: ""},
    password: {value: "", isError: false, errorMassage: ""},

    inputMaxLength: {name: 255, email: 255, password: 255, password_confirmation: 255},

    action: {
        checkField:     'checkField',
        tryToAccept:    'tryToAccept',
        confirmEmailAgain: "confirmEmailAgain"
    },

    is_email_confirmed: false,




};