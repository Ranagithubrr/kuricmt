import { ADD_USER, UPDATE_USER, REMOVE_USER } from "./userActionTypes";

const initialFromLocalStorage = localStorage.getItem("userData");
const initialState = initialFromLocalStorage ? JSON.parse(initialFromLocalStorage) : {

};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newState = {
                ...state,
                user: action.payload || {},
            };
            localStorage.setItem('userData', JSON.stringify(newState.user));
            return newState;
        case UPDATE_USER:
            const newStateUpdate = {
                ...state,
                user: action.payload,
            };
            localStorage.setItem('userData', JSON.stringify(newStateUpdate.user));
            return newStateUpdate;

        case REMOVE_USER:
            localStorage.removeItem('userData');
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
};
