import { legacy_createStore as createStore, combineReducers } from "redux";
import { captainReducer } from "./captainReducer/captainReducer";
import { teacherReducer } from "./teacherReducer/teacherReducer";
import { applicationReducer } from "./applicationReducers/applicationReducer";

export const rootReducer = combineReducers({
  captainReducer,
  teacherReducer,
  applicationReducer
});

const store = createStore(rootReducer);
export default store;
