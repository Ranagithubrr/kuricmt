// action type
export const SET_APPLICATION = 'SET_APPLICATION';
// action
export const setApplicationreducer = (application) => ({
    type: SET_APPLICATION,
    payload: application,
});

// initial state
const initialState = {
    applications: [],
};

// reducerS
export const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APPLICATION:
            return {
                ...state,
                applications: action.payload,
            };
        default:
            return state;
    }
};