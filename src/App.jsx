import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        Tirth1
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white justify-center rounder-2xl px-3 py-2">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
