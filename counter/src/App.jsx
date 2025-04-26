import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 font-extrabold text-4xl text-white">
      <h1 className="text-4xl font-extrabold mb-6">Simple Counter App</h1>
      <h1 className="text-2xl mb-8">Counter: {counter}</h1>

      <div className="flex space-x-6">
        <button
          onClick={handleIncrement}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 text-lg font-semibold transform rounded-md transition duration-150 active:scale-95"
        >
          Increment
        </button>

        <button
          onClick={handleDecrement}
          className="bg-red-500 hover:bg-red-600 px-6 py-2 text-lg font-semibold transform rounded-md transition duration-150 active:scale-95"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
