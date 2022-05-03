export const SET_MASSAGE_FROM_SERVER = 'SET_MASSAGE_FROM_SERVER';

export const setMassageFromServer = ( massage ) => {
    return {
        type: SET_MASSAGE_FROM_SERVER,
        payload: massage
    }
};