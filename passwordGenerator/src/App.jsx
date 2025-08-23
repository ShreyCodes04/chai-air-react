// import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   const passwordRef = useRef(null)

//   const copyPasswordToCkipboard = useCallback(()=>{
//     passwordRef.current?.select()
//     passwordRef.current?.setSelectionRange(0,30)
//     window.navigator.clipboard.writeText(password)
//   },[password])

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*()_+{}|:;.,"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length)
//       pass += str.charAt(char)
//     }
//     setPassword(pass)
//   }, [length, numberAllowed, charAllowed])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, setPassword])

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-6 py-4 my-8 text-orange-300 bg-gray-800">
//         <h1 className="text-center text-2xl font-semibold text-white mb-4">
//           Password Generator
//         </h1>

//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-2 px-3 bg-black text-white placeholder-gray-400"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//           onClick={copyPasswordToCkipboard}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//             Copy
//           </button>
//         </div>

//         <div className="flex text-sm gap-x-4 flex-wrap">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={25}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => setLength(Number(e.target.value))}
//             />
//             <label>Length: {length}</label>
//           </div>

//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               className="cursor-pointer"
//               checked={numberAllowed}
//               id="numberInput"
//               onChange={() => setNumberAllowed((prev) => !prev)}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>

//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               className="cursor-pointer"
//               checked={charAllowed}
//               id="characterInput"
//               onChange={() => setCharAllowed((prev) => !prev)}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}|:;.,";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="w-full max-w-xl mx-auto shadow-2xl rounded-2xl px-8 py-10 text-gray-200 bg-gray-900/80 backdrop-blur-lg border border-gray-700">
        
        <h1 className="text-center text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg">
          Password Generator
        </h1>

        {/* Password box */}
        <div className="flex shadow-lg rounded-xl overflow-hidden mb-8 border border-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-4 px-5 bg-gray-950 text-xl text-cyan-300 placeholder-gray-500 tracking-wider"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-gradient-to-r from-blue-600 to-purple-700 hover:from-purple-700 hover:to-blue-600 text-white px-6 text-lg font-semibold transition-all duration-200"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-6 text-lg">
          {/* Length */}
          <div className="flex items-center justify-between">
            <label className="font-semibold">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer accent-purple-500 w-2/3"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Numbers */}
          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="font-semibold">
              Include Numbers
            </label>
            <input
              type="checkbox"
              className="cursor-pointer w-5 h-5 accent-cyan-400"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>

          {/* Characters */}
          <div className="flex items-center justify-between">
            <label htmlFor="characterInput" className="font-semibold">
              Include Symbols
            </label>
            <input
              type="checkbox"
              className="cursor-pointer w-5 h-5 accent-cyan-400"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


