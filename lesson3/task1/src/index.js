
import store, { increment, decrement, reset } from "./store";
import { addUser, deleteUser, updateUser } from './users.actions';


store.subscribe(() => console.log(store.getState()))

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({id: 1, name: 'Tom',}));
store.dispatch(addUser({id: 2, name: 'Bom',}));