// action type
export const SET_TEACHER = 'SET_TEACHER';
// action
export const setTeacherreducer = (teacher) => ({
    type: SET_TEACHER,
    payload: teacher,
});

// initial state
const initialState = {
    teachers: [],
};

// reducerS
export const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEACHER:
            return {
                ...state,
                teachers: action.payload,
            };
        default:
            return state;
    }
};