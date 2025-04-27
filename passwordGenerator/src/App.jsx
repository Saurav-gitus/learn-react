import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_[]{}.,/?<>;";
    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLength, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [passLength, numAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center mb-4 font-bold text-xl">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-600 hover:bg-blue-900 text-white px-3 py-0.5 shrink-0 duration-50 active:scale-95"
          onClick={copyPasswordToClipboard}
        >
          COPY
        </button>
      </div>
      <div className="flex text-sm gap-x-2 text-white">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={30}
            value={passLength}
            onChange={(e) => setPassLength(e.target.value)}
            className="cursor-pointer"
          />
          <label>Length: {passLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numAllowInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <h1>Numbers</h1>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="charAllowInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <h1>Characters</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
