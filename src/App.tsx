import { useState } from "react";

function App() {
  const [num, setNum] = useState<number>(1);

  const increment = () => {
    setNum(num + 1);
    console.log(num);
  };

  const decrement = () => {
    setNum(num - 1);
    console.log(num);
  };

  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <h1 className="text-4xl">{num}</h1>
      <button className="bg-blue-500 p-3 text-white" onClick={increment}>
        +
      </button>

      <button className="bg-blue-500 p-3 text-white" onClick={decrement}>
        -
      </button>
    </main>
  );
}

export default App;
