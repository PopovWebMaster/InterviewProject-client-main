import { SET_MASSAGE_FROM_SERVER } from './action.js';

// const initialState = {
//     massage: 'Сообщение от сервера'
// };
const initialState = {};

export const massageReduser = ( state = initialState, action ) => {

    switch ( action.type ) {
        case SET_MASSAGE_FROM_SERVER:
            // return {
            //     ...state,
            //     massage: action.payload
            // };
            return action.payload;

        default:
            return state;
    };

};