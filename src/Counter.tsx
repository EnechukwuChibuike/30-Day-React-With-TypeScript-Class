import { useReducer } from "react";

interface CounterState {
  count: number;
  theme: "light" | "dark";
}

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "toggleTheme" };

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, theme: "light" });

  const increaseCount = () => {
    dispatch({ type: "increment" });
  };

  const decreaseCount = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const changeTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <main
      className={`flex flex-col items-center justify-center h-screen ${
        state.theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <h1
        className={`text-5xl ${
          state.theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {state.count}
      </h1>

      <section className="flex gap-3">
        <button className="p-3 bg-blue-600 text-white" onClick={increaseCount}>
          +
        </button>
        <button className="p-3 bg-blue-600 text-white" onClick={decreaseCount}>
          -
        </button>
        <button className="p-3 bg-blue-600 text-white" onClick={reset}>
          reset
        </button>

        <button className="p-3 bg-blue-600 text-white" onClick={changeTheme}>
          {state.theme}
        </button>
      </section>
    </main>
  );
}
