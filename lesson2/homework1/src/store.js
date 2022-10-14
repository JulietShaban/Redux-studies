import { createStore, combineReducers } from "redux";
import languageReducer from "./language.reducer";
import usersReducer from "./users.reducer";

const addReducer = combineReducers({
  language: languageReducer,
  users: usersReducer,
});

const store = createStore(
    addReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
