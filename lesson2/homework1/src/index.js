import store from "./store";
import { setLanguage } from "./language.actions";
import { addUser, removeUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: "Tom" }));
store.dispatch(addUser({ id: 2, name: "Bom" }));
store.dispatch(addUser({ id: 3, name: "Tobey" }));
store.dispatch(removeUser(2));
store.dispatch(setLanguage('ua'));