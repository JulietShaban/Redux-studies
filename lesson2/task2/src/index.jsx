import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => {
  return (
    <div class="page">
      <div class="counter">
        <span class="counter__result"></span>
        <div class="counter__actions">
          <button data-action="decrement" class="counter__button">
            -1
          </button>
          <button data-action="reset" class="counter__button">
            Reset
          </button>
          <button data-action="increment" class="counter__button">
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
