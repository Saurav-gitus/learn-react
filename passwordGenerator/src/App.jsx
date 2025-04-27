import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-gray-950">
      <h1 className="text-2xl text-amber-100">Password Generator</h1>
    </div>
  );
}

export default App;
