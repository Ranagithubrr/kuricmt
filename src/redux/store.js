import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { captainReducer } from "./captainReducer/captainReducer";
import { teacherReducer } from "./teacherReducer/teacherReducer";
import { applicationReducer } from "./applicationReducers/applicationReducer";
import dataReducer from "./dataReducer/dataReducer";

export const rootReducer = combineReducers({
  captainReducer,
  teacherReducer,
  applicationReducer,
  dataReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
