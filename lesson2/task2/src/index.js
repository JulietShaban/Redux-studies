import "./index.css";
import store, { increment, decrement, reset } from "./store";

const resultElem = Document.querySelector(".counter__result");
const incrementBtn = Document.querySelector('[data-action="increment"]');
const resetBtn = Document.querySelector('[data-action="reset"]');
const decrementBtn = Document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

store.subscribe(()=>{
  const state = store.getState();
  const currentValue = state.value;
  const historyString = state.history.join(' ');

  resultElem.textContent = `${historyString} = ${currentValue}`;
});