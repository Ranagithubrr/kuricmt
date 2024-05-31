import axios from 'axios';


export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchAllData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const [noticesRes, teachersRes, applicationsRes, captainsRes, websiteDataRes] = await Promise.all([
                axios.get("https://kuricmt-backend.onrender.com/notice"),
                axios.get("https://kuricmt-backend.onrender.com/user"),
                axios.get('https://kuricmt-backend.onrender.com/application/'),
                axios.get('https://kuricmt-backend.onrender.com/captains'),
                axios.get('https://kuricmt-backend.onrender.com/content/website-data')
            ]);

            const data = {
                allnotices: noticesRes.data.allNotices,
                notices: noticesRes.data.allNotices.slice(0, 3),
                noticeNumber: noticesRes.data.allNotices.length,
                teachers: teachersRes.data.AllUser,
                applications: applicationsRes.data.ApplicationsData,
                captains: captainsRes.data.AllCaptains,
                websiteData: websiteDataRes.data.contents[0]
            };

            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataFailure(error));
        }
    };
};


const initialState = {
    loading: false,
    data: {
        allnotices:[],
        notices: [],
        noticeNumber: 0,
        teachers: [],
        applications: [],
        captains: [],
        websiteData: {}
    },
    error: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default dataReducer;

