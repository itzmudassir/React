import { useState } from "react";

function App() {
  const [color, setColor] = useState("#00ff9d");
  const [mode, setMode] = useState("default");

  const changeColorAndMode = (newColor, newMode) => {
    setColor(newColor);
    setMode(newMode);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-300 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <h1 className=" text-lg font-mono bg-white rounded-full px-4">You're in {mode} mode</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => changeColorAndMode("red", "red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => changeColorAndMode("black", "black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "#39FF14" }}
              onClick={() => changeColorAndMode("#39FF14", "green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => changeColorAndMode("blue", "blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
