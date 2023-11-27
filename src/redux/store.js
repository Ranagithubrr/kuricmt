import { legacy_createStore as createStore, combineReducers } from "redux";
import {userReducer} from './userReducer/userReducer'


export const rootReducer = combineReducers({
    userReducer
});



const store = createStore(rootReducer);
export default store;