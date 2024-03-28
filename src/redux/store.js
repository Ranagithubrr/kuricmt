import { legacy_createStore as createStore, combineReducers } from "redux";
import {captainReducer} from './captainReducer/captainReducer';


export const rootReducer = combineReducers({    
    captainReducer
});



const store = createStore(rootReducer);
export default store;