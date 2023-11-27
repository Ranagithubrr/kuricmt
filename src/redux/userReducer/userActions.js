import { ADD_USER, UPDATE_USER, REMOVE_USER } from "./userActionTypes";

export const setUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}
export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}
