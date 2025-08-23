import { useState } from "react"

function App() {
  const [color,setColor ] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duraion-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ps-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <button
            onClick = {() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "red"}}>Red
            </button>
            <button
            onClick = {() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "Green"}}>Green
            </button>
            <button
            onClick = {() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "black"}}>Black
            </button>
            <button
            onClick = {() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "yellow"}}>Yellow
            </button>
            <button
            onClick = {() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "blue"}}>Blue
            </button>
            <button
            onClick = {() => setColor("Cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "cyan"}}>Cyan
            </button>
            <button
            onClick = {() => setColor("Brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "brown"}}>Brown
            </button>
            <button
            onClick = {() => setColor("Grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "grey"}}>Grey
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
