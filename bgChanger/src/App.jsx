import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("Black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-1 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-950 rounded-2xl px-3 py-2 ">
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "red" }}
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "Green" }}
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "Olive" }}
            onClick={() => setcolor("Olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "Gray" }}
            onClick={() => setcolor("Gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 rounded-full text-Black py-1 shadow-2xl"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => setcolor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 rounded-full text-Black py-1 shadow-2xl"
            style={{ backgroundColor: "Pink" }}
            onClick={() => setcolor("Pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setcolor("Purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 rounded-full text-black py-1 shadow-2xl"
            style={{ backgroundColor: "Lavender" }}
            onClick={() => setcolor("Lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 rounded-full text-black py-1 shadow-2xl"
            style={{ backgroundColor: "white" }}
            onClick={() => setcolor("White")}
          >
            White
          </button>
          <button
            className="outline-none px-4 rounded-full text-white py-1 shadow-2xl"
            style={{ backgroundColor: "Black" }}
            onClick={() => setcolor("Black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
