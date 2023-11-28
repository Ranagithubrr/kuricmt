import { legacy_createStore as createStore, combineReducers } from "redux";
import {userReducer} from './userReducer/userReducer';
import {captainReducer} from './captainReducer/captainReducer';


export const rootReducer = combineReducers({
    userReducer,
    captainReducer
});



const store = createStore(rootReducer);
export default store;