// action type
export const SET_CAPTAINS = 'SET_CAPTAINS';
// action
export const setCaptainsreducer = (captains) => ({
    type: SET_CAPTAINS,
    payload: captains,
});

// initial state
const initialState = {
    captains: [],
};

// reducerS
export const captainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAPTAINS:
            return {
                ...state,
                captains: action.payload,
            };
        default:
            return state;
    }
};