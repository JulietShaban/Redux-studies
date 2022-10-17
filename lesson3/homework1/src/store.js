import { createStore, combineReducers } from "redux";
import languageReducer from "./language.reducer";
import usersReducer from "./users.reducer";
import cartReducer from "./cart.reducer";
const addReducer = combineReducers({
  language: languageReducer,
  users: usersReducer,
  cart: cartReducer
});

const store = createStore(
    addReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
